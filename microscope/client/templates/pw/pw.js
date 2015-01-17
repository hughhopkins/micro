Template.pw.rendered = function() {
	 var node = typeof require !== 'undefined';

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

    var update = function() {
      var service = srv.value.toLowerCase().replace(/ /g, '');
      var pass = pw.value;
      var three = keyThree.value;

      var word = service + '||' + pass + '||' + three;

      password.innerText = word;

    };

    srv.onkeyup = update;
    pw.onkeyup = update;
    keyThree.onkeyup = update;

    password.onclick = function(e) {
      selectText(password);
    }
};
