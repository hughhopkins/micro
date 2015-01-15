Template.pw.rendered = function() {
	var node = typeof require !== 'undefined';

	var sha1 = node ?
    function(d) { return require('crypto').createHash('sha1').update(d).digest('hex'); } :
    function(d){for(var j=0,a=0,c=[],k=[1732584193,4023233417,2562383102,271733878,3285377520],e,g,h,l,f,i=unescape(encodeURI(d)),b=i.length;a<=b;)c[a>>2]|=(i.charCodeAt(a)||128)<<8*(3-a++%4);for(c[d=(b>>6<<4)+15]=b<<3;j<=d;j+=16){b=k;for(a=0;80>a;b=[[(f=((i=b[0])<<5|i>>>27)+b[4]+(c[a]=16>a?~~c[j+a]:f<<1|f>>>31)+1518500249)+((e=b[1])&(g=b[2])|~e&(h=b[3])),l=f+(e^g^h)+341275144,f+(e&g|e&h|g&h)+882459459,l+1535694389][0|a++/20]|0,i,e<<30|e>>>2,g,h])f=c[a-3]^c[a-8]^c[a-14]^c[a-16];for(a=5;a;)k[--a]=k[a]+b[a]|0}for(d="";40>a;)d+=(k[a>>3]>>4*(7-a++%8)&15).toString(16);return d};

  // not sure what the below does
  function selectText(el) {
    if (document.selection) {
      var range = document.body.createTextRange();
      range.moveToElementText(el);
      range.select();
    } else if (window.getSelection) {
      var range = document.createRange();
      range.selectNode(el);
      window.getSelection().addRange(range);
    }
  }

  var exec = node ? require('child_process').exec : function(){};

  var srv = document.getElementById('srv');
  var pw = document.getElementById('pw');
  var keyThree = document.getElementById('keyThree');
  var password = document.getElementById('password');
  var key = document.getElementById('key');

  function drag(e) {
    e.stopPropagation();
    e.preventDefault();

    if(e.type === 'dragleave') {
      dropbox.className = '';
    } else {
      dropbox.className = 'over';
    }
  }

  function drop(e) {
    e.stopPropagation();
    e.preventDefault();

    dropbox.className = '';

    var dt = e.dataTransfer;
    var files = dt.files;

    updateKeyFiles(files);
  }

  var fileKey = '';

  var update = function() {
    var service = srv.value.toLowerCase().replace(/ /g, '');
    var pass = pw.value;

    var three = keyThree.value;

    var word = sha1(service + '||' + pass + '||' + fileKey + '||' + three);

    // so we have some uppercase letters, replace even index chars with uppercase
    word = word.replace(/[A-z]/g, function(c, i) {
      return i % 2 === 0 ?
        c.toUpperCase() :
        c;
    });

    password.innerText = word;

    // TODO: add proper cross platform copying (incl web)
    // will only work on mac app for now

  };


  var updateKeyFiles = function(files) {


    var getFile = function(file, cb) {
      var reader = new FileReader();
      reader.onload = function(e) {
        cb(e);
      };

      reader.readAsBinaryString(file);
    };

    var done = 0;
    var fileList = [];

    var isDone = function(e) {
      fileList.push(e.target.result);
      if (++done === files.length) {
        fileKey = sha1(fileList.join('||'));
        update();
      }
    }
    for (var i = 0; i < files.length; i++) {
      getFile(files[i], isDone);
    }
  }

  srv.onkeyup = update;
  pw.onkeyup = update;
  keyThree.onkeyup = update;

  password.onclick = function(e) {
    selectText(password);
  }

};
