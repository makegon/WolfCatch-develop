$(function () {
	$('#supported').text('Supported/allowed: ' + !!screenfull.enabled);

	if (!screenfull.enabled) {
		return false;
	}

	$('#request').click(function () {
		screenfull.request($('#container')[0]);
		// Does not require jQuery. Can be used like this too:
		// screenfull.request(document.getElementById('container'));
	});

	$('#exit').click(function () {
		screenfull.exit();
	});

	$('#toggle').click(function () {
		screenfull.toggle($('#container')[0]);
	});

	$('#request2').click(function () {
		screenfull.request();
	});

	$('#demo-img').click(function () {
		screenfull.toggle(this);
	});

	function fullscreenchange() {
		var elem = screenfull.element;

		$('#status').text('Is fullscreen: ' + screenfull.isFullscreen);

		if (elem) {
			$('#element').text('Element: ' + elem.localName + (elem.id ? '#' + elem.id : ''));
		}

		if (!screenfull.isFullscreen) {
			$('#external-iframe').remove();
			document.body.style.overflow = 'auto';
		}
	}

	screenfull.on('change', fullscreenchange);

	// Set the initial values
	fullscreenchange();
});
