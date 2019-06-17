$(document).ready(function() {
	$(".dashboard-content__content-carousel").owlCarousel({
		items: 1,
		center: true,
		margin: 20,
		nav: true,
		// navElement: "<div class='slider-arrow'></div>",
		navText: "",
		dots: false
	});

	$(".slider-dots__item").click(function(e) {
		e.preventDefault();
		$(".slider-dots__item").removeClass("slider-dots__item_active");
		$(this).addClass("slider-dots__item_active");
		let target = $(this).attr("href");
		let pos;
		$(".content-carousel__slider").each(function() {
			if($(this).parent().index() == target){
				pos = $(this).parent().index();
				return;
			}
		});
		$(".dashboard-content__content-carousel").trigger("to.owl.carousel", [pos, 300]);
	});

	$(".dashboard-content__content-carousel").on("translated.owl.carousel", function() {
		let target = $(this).find(".owl-item.active .content-carousel__slider").attr("data-hash");
		let pos;
		$(".slider-dots__item").each(function() {
			if($(this).index() == target){
				pos = $(this).index();
				return;
			}
		});
		$(".slider-dots__item").removeClass("slider-dots__item_active");
		$(".more-info-table-container").removeClass("more-info-table-container_active");
		$(".slider-dots__item").eq(pos).addClass("slider-dots__item_active");
	});

	$(".offer-table__main-button").click(function(e) {
		e.preventDefault();
		// console.log($(this).parents(".content-carousel__slider"));
		$(this).parents(".content-carousel__slider").find(".more-info-table-container").toggleClass("more-info-table-container_active");
	});
});