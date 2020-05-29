window.onload = function () {
	var app = document.getElementByClass('title-heading');

	var typewriter = new Typewriter(app, {
		loop: true
	});

	typewriter.typeString('Hello World!').start();
};
