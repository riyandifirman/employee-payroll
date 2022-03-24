(function ($) {

	"use strict";

	// =====================================================
	//      PRELOADER
	// =====================================================
	$(window).on("load", function () {
		'use strict';
		$('[data-loader="circle-side"]').fadeOut(); // will first fade out the loading animation
		$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
		var $hero = $('.hero-home .content');
		var $hero_v = $('#hero_video .content ');
		$hero.find('h3, p, form').addClass('fadeInUp animated');
		$hero.find('.btn-1').addClass('fadeIn animated');
		$hero_v.find('.h3, p, form').addClass('fadeInUp animated');
		$(window).scroll();
	})

	// =====================================================
	//      BACK TO TOP BUTTON
	// =====================================================
	function scrollToTop() {
		$('html, body').animate({ scrollTop: 0 }, 500, 'easeInOutExpo');
	}

	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 100) {
			$('#toTop').fadeIn('slow');
		} else {
			$('#toTop').fadeOut('slow');
		}
	});

	$('#toTop').on('click', function () {
		scrollToTop();
		return false;
	});

	// =====================================================
	//      NAVBAR
	// =====================================================
	$(window).on('scroll load', function () {

		if ($(window).scrollTop() >= 1) {
			$('.main-header').addClass('active');
		} else {
			$('.main-header').removeClass('active');
		}

	});

	// =====================================================
	//      STICKY SIDEBAR SETUP
	// =====================================================
	$('#mainContent, #sidebar').theiaStickySidebar({
		additionalMarginTop: 90
	});

	// =====================================================
	//      MOBILE MENU
	// =====================================================	
	var $menu = $("nav#menu").mmenu({
		"extensions": ["pagedim-black", "theme-dark"], // "theme-dark" can be changed to: "theme-white"
		counters: true,
		keyboardNavigation: {
			enable: true,
			enhance: true
		},
		navbar: {
			title: 'MENU'
		},
		navbars: [{ position: 'bottom', content: ['<a href="#">© 2021 Costy</a>'] }]
	},
		{
			// configuration
			clone: true,
		});
	var $icon = $("#hamburger");
	var API = $menu.data("mmenu");
	$icon.on("click", function () {
		API.open();
	});
	API.bind("open:finish", function () {
		setTimeout(function () {
			$icon.addClass("is-active");
		}, 100);
	});
	API.bind("close:finish", function () {
		setTimeout(function () {
			$icon.removeClass("is-active");
		}, 100);
	});

	// =====================================================
	//      CALCULATOR ELEMENTS
	// =====================================================	

	// Function to show prices next to each dropdown item which has price
	function showItemPrices(optionGroupListName) {

		if (optionGroupListName == 'optionGroup1List') {
			$('#optionGroup1 .price-list .list li').each(function () {
				itemPrice = $(this).data('value');
				if (itemPrice != 0) { $(this).append('<span class="price">' + itemPrice + '</span>'); }
				formatItemPrice();
			});
		}
		if (optionGroupListName == 'optionGroup2List') {
			$('#optionGroup2 .price-list .list li').each(function () {
				itemPrice = $(this).data('value');
				if (itemPrice != 0) { $(this).append('<span class="price">' + itemPrice + '</span>'); }
				formatItemPrice();
			});
		}
		if (optionGroupListName == 'optionGroup3List') {
			$('#optionGroup3 .price-list .list li').each(function () {
				itemPrice = $(this).data('value');
				if (itemPrice != 0) { $(this).append('<span class="price">' + itemPrice + '</span>'); }
				formatItemPrice();
			});
		}
		if (optionGroupListName == 'all') {
			$('.price-list .list li').each(function () {
				itemPrice = $(this).data('value');
				if (itemPrice != 0) { $(this).append('<span class="price">' + itemPrice + '</span>'); }
				formatItemPrice();
			});
		}

	}

	// Function to set total title and price initially
	function setTotalOnStart() {

		$('#totalTitle').val('Total');
		$('#total').val('$ 0.00');

	}

	// =====================================================
	//      INIT DROPDOWNS
	// =====================================================		
	$('select').niceSelect();
	showItemPrices('all');
	
	// =====================================================
	//      FORM LABELS
	// =====================================================		
	new FloatLabels('#personalDetails', {
		style: 1
	});

	// =====================================================
	//      FORM INPUT VALIDATION
	// =====================================================


	// Empty order validation
	window.Parsley.addValidator('emptyOrder', {
		validateString: function (value) {
			return value !== '$ 0.00';
		},
		messages: {
			en: 'Order is empty.'
		}
	});

	// Whole form validation
	$('#orderForm').parsley();

	// Clear parsley empty elements
	if ($('#orderForm').length > 0) {
		$('#orderForm').parsley().on('field:success', function () {
			$('ul.parsley-errors-list').not(':has(li)').remove();
		});
	}

})(window.jQuery);