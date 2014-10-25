UI.registerHelper('pluralize', function(n, thing) {
	// super basic pularizer
	if (n === 1) {
		return '1 ' + thing;
	} else {
		return n + ' ' + thing + 's';
	}
});