var SaveNameButton = document.getElementById('button_name')
SaveNameButton.addEventListener("click", function() {
	var creat = document.getElementById('creator');
		window.localStorage.setItem('user', creat.value);
});
