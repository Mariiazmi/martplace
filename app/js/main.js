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
      $(".js-range-slider").ionRangeSlider({
        skin: "round",
        type: "double",
        grid: false,
        min: 0,
        max: 330,
        from: 30,
        to: 300,
        prefix: "$"
    });

    $('.filter-list').on('click', function(){
      $('.product__item').addClass('list')
    });
    $('.filter-grid').on('click', function(){
      $('.product__item').removeClass('list')
    });

    // header__nav-burger
    $('.header__nav-burger').on('click', function(){
      $('.header__nav-list').slideToggle();
    });


    var mixer = mixitup('.new__slider');
});