var search = function(e) {
	console.log(e.keyCode);

	 if (e.keyCode == 13) {
        document.getElementById('search-form').submit();
    }
}