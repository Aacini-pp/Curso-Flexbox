jQuery(document).ready(function (){

    console.log("si furula");

//menu pegajoso
    var alturaMenu = jQuery('.main-menu').offset().top;
	
	jQuery(window).on('scroll', function(){
		if ( jQuery(window).scrollTop() > alturaMenu ){
			jQuery('.main-menu').addClass('menu-fixed');
		} else {
			jQuery('.main-menu').removeClass('menu-fixed');
		}
    });
    

    
 // efecto  cambio en boton 

 jQuery(".icon-menu").click(function(){
    console.log("click boton");

    jQuery(this).toggleClass("menu_active");
});



//slider
jQuery('.bxslider').bxSlider({
    auto: true,
    autoControls: false,
    stopAutoOnClick: false,
    pager: true
  });


//efecto cubre miniaturas
 jQuery(".item-relacionados").hover(function(e) {
   jQuery(this).find(".cubreimgMiniaturas").slideToggle(1000, "easeOutElastic");
});


$(".group1").colorbox({rel:'group1'});

});