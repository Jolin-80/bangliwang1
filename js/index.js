$(function() {
    // header_top
    $('.my').hover(function() {
        $('.my .my_zh').show();
    }, function() {
        $('.my .my_zh').hide();
    });
    //点击关闭
    $(".header_img span").on('click', function() {
        $(".header_img").hide();
    });
    //点击搜索input
    $('.search_txt').on('click', function() {
        $(this).val("");
    });
    //nav
    $('.nav_middle li a').hover(function() {
        $(this).addClass("active");
    }, function() {
        $(this).removeClass("active");
    });

    //nav_left 
    var _index = 0;
    $('.con_left li').hover(function() {
        _index = $(this).index();
        $(".leftDiv").eq(_index).css("display", "block");
        $(this).css("border", "1px solid #ccc");
        $(this).css("border-right", "1px solid #fff");
    }, function() {
        $(".leftDiv").eq(_index).css("display", "none");
        $(this).css("border", "none");
    });

    //nav_middle
    $('.middle_item li').on('mouseover', function() {
        _index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".middle_pic li").eq($(this).index()).fadeTo(300, 1).addClass("show").siblings().fadeOut(300).removeClass("show");
    });

    function startMove() {
        timer = setInterval(function() {
            _index++;
            if (_index >= $(".middle_item li").size()) {
                _index = 0;
            }
            $('.middle_pic li').eq(_index).fadeTo(300, 1).siblings().fadeOut(300);
            $('.middle_item li').eq(_index).addClass('active').siblings().removeClass('active');
        }, 2000)
    }

    startMove();


    // nav_con_right
    $('.banner_tit li').on('click', function() {
        _index = $(this).index();
        $(this).addClass("current").siblings().removeClass("current");
        $(".right_banner div").eq(_index).css("display", "block").siblings().not("ul").css("display", "none");

    });
});