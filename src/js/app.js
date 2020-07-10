//javaScript
//jquery
//Header Menu Dropdown
$(document).ready(function(){
  $(".with_dropdown").hover(function(){
    var menuDropdownHtml = $(this).children(".menu_dropdown");
    var menuDropdownIcon = $(this).find(".menu_inline > i");

    //Cambio icona menu Dropdown
    if (menuDropdownIcon.hasClass("fa-chevron-down")){
      menuDropdownIcon.removeClass("fa-chevron-down");
      menuDropdownIcon.addClass("fa-chevron-up");
    }else if (menuDropdownIcon.hasClass("fa-chevron-up")) {
      menuDropdownIcon.removeClass("fa-chevron-up");
      menuDropdownIcon.addClass("fa-chevron-down");
    }

    //Mostro o nascondo menu Dropdown attraverso class visible
    menuDropdownHtml.toggleClass("visible")

  });

});
//end jquery
