(function($) {
	var target = document.querySelector('.email');

	function selection(elem) {
		var elem   = document.querySelector(elem);
		var select = window.getSelection();
		var range  = document.createRange();

		range.selectNodeContents(elem);
		select.addRange(range);
	}
	
	target.onclick = function() {
		selection('.email');
	};
})(jQuery);
