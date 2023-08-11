$(function () {
    // 메인비쥬얼 다음페이지 웨이트 타임
    $('.visual_wrap').on('init afterChange', function (e, s, c) {
        const current = $('.visual_wrap .slick-current');
        current.addClass('on').siblings().removeClass('on');

        $('.main_visual .visual_page span').text(c ? (c + 1) : 1);
        $('.main_visual .visual_page strong').text(s.slideCount);

        $('.main_visual .visual_page li').eq(0).addClass('on')
        $('.main_visual .visual_page li').eq(c).addClass('on')
            .siblings().removeClass('on');

        $('.main_visual .visual_page li').on('click', function (e) {
            e.preventDefault();
            const idx = $(this).index(); //0, 1, 2
            $('.visual_wrap').slick('slickGoTo', idx)
        })
    });











    // 메인비쥬얼 : 이미지 다음페이지
    $('.visual_wrap').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 700,
    });

    // 메인비쥬얼 : 화살표
    $('.main_visual .visual_arrow .left').on('click', function () {
        $('.visual_wrap').slick('slickPrev');
        console.log('000')
    })
    $('.main_visual .visual_arrow .right').on('click', function () {
        $('.visual_wrap').slick('slickNext')
    })








    // 메인탭 : 탭(2종)별 내용 나오게
    $('.tab_link li').on('click', function (event) {
        event.preventDefault();
        let idx = $(this).index(); //0, 1, 2

        $(this).addClass('on').siblings().removeClass('on');

        $('.tab_box .tab').eq(idx).addClass('on').siblings().removeClass('on');
        console.log(event, event.target, event.currentTarget, $(this), $(this).index());
    });

    // 메인탭 : tab_gnb 리스트별 이동되면 색상 변경
    $('.main_tab .tab_gnb>li').on('click', function () {
        let idx = $(this).index();
        $('.tab_cap').slick('slickGoTo', idx);
        $(this).addClass('on').siblings().removeClass('on');
    })

    $('.tab_cap').on('afterChange', function (e, s, c) {
        $('.main_tab .tab_gnb>li').eq(c).addClass('on').siblings().removeClass('on');
    })

    // 메인탭 : 이미지 다음페이지
    $('.tab_cap').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
    });

});