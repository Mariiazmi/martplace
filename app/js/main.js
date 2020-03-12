$(function(){
    $('.featured__slider').slick({
        
      });
    $('.feed__inner').slick({
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 1145,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 775,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
        ]
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

    $('.product__tabs .tab').on('click', function(event) {
      var id = $(this).attr('data-id');
        $('.product__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.product__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#'+id).addClass('active-tab').fadeIn();
        return false;
      });

    var mixer = mixitup('.new__slider');
});