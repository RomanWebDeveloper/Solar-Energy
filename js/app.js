	/* Slider*/
	
	$(document).ready(function(){
		$('.slider').slick({
			arrows:false,
			dots:true,
			slidesToShow:1,
			autoplay:false,
		});
	});

	$(document).ready(function(){
		$('.reviews__wrapper').slick({
			arrows:false,
			dots:true,
			slidesToShow:1,
			autoplay:false,
		});
	});

	/* Nav*/

	const toggleButton = document.getElementsByClassName('toggle-button')[0]
      const navbarLinks = document.getElementsByClassName('navbar-list')[0]

      toggleButton.addEventListener("click", () => {
      toggleButton.classList.toggle("active");
      navbarLinks.classList.toggle("active");
      })

      document.querySelectorAll(".navbar-list").forEach(n => n.addEventListener("click", () => {
      toggleButton.classList.remove("active");
      navbarLinks.classList.remove("active");
    }))

    /* Number Counter on Scroll */

	let nums = document.querySelectorAll(".achievements__box .achievements__number");
		let section = document.querySelector(".achievements__list");
		let started = false; // Function Started ? No

		window.onscroll = function () {
		  if (window.scrollY <= section.offsetTop) {
		    if (!started) {
		      nums.forEach((num) => startCount(num));
		    }
		    started = true;
		  }
		};

		function startCount(el) {
		  let goal = el.dataset.goal;
		  let count = setInterval(() => {
		    el.textContent++;
		    if (el.textContent == goal) {
		      clearInterval(count);
		    }		  }, 3000 / goal);
		}

		/* Filter*/

	let filter = $("[data-filter]");

	    filter.on("click", function(event) {
	        event.preventDefault();

	        let cat = $(this).data('filter');

	        if(cat == 'all') {
	            $("[data-cat]").removeClass("hide");
	        } else {
	            $("[data-cat]").each(function() {
	                let workCat = $(this).data('cat');

	                if(workCat != cat) {
	                    $(this).addClass('hide');
	                } else {
	                    $(this).removeClass('hide');
	                }
	            });
	        }
	    });