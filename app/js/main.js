$(function(){
    $('.featured__slider').slick({
        
      });
    $('.feed__inner').slick({
        slidesToShow: 3,
      });

    $(".product__item-star").rateYo({
        rating: 4.5,
        starWidth: "13px",
        spacing: "3px",
        readOnly: true,
        ratedFill: "#ffc000",
      });
    var mixer = mixitup('.new__slider');
});