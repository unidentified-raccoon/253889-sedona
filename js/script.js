var link = document.querySelector(".form-header");
		var popup = document.querySelector(".pop-up");

			popup.classList.add("pop-up-hidden");

		link.addEventListener("click", function(event) {
			event.preventDefault();
			popup.classList.toggle("pop-up-animation");
      });

		window.addEventListener("keydown", function(event) {
			if (event.keyCode === 27) {
				popup.classList.add("pop-up-hidden");
				popup.classList.remove("pop-up-animation");
			}
		});