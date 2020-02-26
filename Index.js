let SaveNameButton = document.getElementById('button_name');

function User(){
	this.name = SaveNameButton;
};
User = new User();
User.name.addEventListener("click", function() {
	var creat = document.getElementById('creator');
		window.localStorage.setItem('Creator', creat.value);

	User.name = creat;
	console.log(User.name);
});
