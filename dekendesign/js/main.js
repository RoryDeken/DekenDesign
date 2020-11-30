jQuery(document).ready(function( $ ) {

  let year = new Date().getFullYear().toString().substr(-2);
  $("#year").text(year);
  // Smooth scroll for the menu and links with .scrollto classes
  $('.smoothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 70
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  // Websites Chart
		if($('#websites').length) {

			var doughnutData = [{
	        value: 80,
	        color: "#29314b"
	      },
	      {
	        value: 20,
	        color: "#c7d6da"
	      }
	    ];
	    var myDoughnut = new Chart(document.getElementById("websites").getContext("2d")).Doughnut(doughnutData);
		};

		// Web Apps Chart
		if($('#web-apps').length) {
			var doughnutData = [{
					value: 90,
					color: "#29314b"
				},
				{
					value: 10,
					color: "#c7d6da"
				}
			];
			var myDoughnut = new Chart(document.getElementById("web-apps").getContext("2d")).Doughnut(doughnutData);
		}

		// iOS Chart
		if($('#ios').length) {
			var doughnutData = [{
					value: 65,
					color: "#29314b"
				},
				{
					value: 35,
					color: "#c7d6da"
				}
			];
			var myDoughnut = new Chart(document.getElementById("ios").getContext("2d")).Doughnut(doughnutData);
		}

		// Android Chart
		if($('#android').length) {
			var doughnutData = [{
					value: 60,
					color: "#29314b"
				},
				{
					value: 40,
					color: "#c7d6da"
				}
			];
			var myDoughnut = new Chart(document.getElementById("android").getContext("2d")).Doughnut(doughnutData);
		}
});
