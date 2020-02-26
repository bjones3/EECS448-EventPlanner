window.addEventListener('DOMContentLoaded', (event) => {
	let inputUser = document.getElementById('creator');

	window.localStorage.setItem('user', inputUser.value);
	inputUser.addEventListener("input", function() {
		window.localStorage.setItem('user', inputUser.value);
	});
});
JSON.parse(window.localStorage.getItem('event'));
window.localStorage.setItem('event', JSON.stringify(jsonArray));
