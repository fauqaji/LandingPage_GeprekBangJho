$(document).ready(function() {
    function moveElements() {
        if ($(window).width() <= 768) {
            $('.col-md-6.d-flex.justify-content-end.align-items-center').insertBefore('.col-md-6.mb-4');
        } else {
            $('.col-md-6.d-flex.justify-content-end.align-items-center').insertAfter('.col-md-6.mb-4');
        }
    }

    function checkPseudoElement() {
        if ($(window).width() <= 768) {
            $('.p1-beranda').removeClass('before').addClass('after');
        } else {
            $('.p1-beranda').removeClass('after').addClass('before');
        }
    }

    function checkPadding() {
        if ($(window).width() <= 768) {
            $('.p1-beranda').css('padding-left', '0');
        } else {
            $('.p1-beranda').css('padding-left', '55px');
        }
    }

    function adjustpkata() {
        if ($(window).width() < 768) {
            $(".p1-katakata").css("font-size", "30px");
        } else {
            $(".p1-katakata").css("font-size", "72px");
        }
    }

    function adjustimgtent() {
        if ($(window).width() < 768) {
            $(".img-tentang").css({
                "margin-left": "auto",
                "width": "230px",
                "height": "290px"
            });
        } else {
            $(".img-tentang").css({
                "margin-left": "70px",
                "width": "320px",
                "height": "380px"
            });
        }
    }

    function adjustdeskrispiT() {
        if ($(window).width() < 880) {
            $(".deskripsiT").css("margin-right", "0");
        } else {
            $(".deskripsiT").css("margin-right", "190px");
        }
    }

    function adjustPadding() {
    if ($(window).width() < 768) {
        $('.container-form').css('padding', '15px');
    } else if ($(window).width() >= 768 && $(window).width() < 1024) {
        $('.container-form').css('padding', '2vh 6vh');
    } else {
        $('.container-form').css('padding', '10vh 30vh');
    }
}


    function adjustElements() {
        moveElements();
        checkPseudoElement();
        checkPadding();
        adjustpkata();
        adjustimgtent();
        adjustdeskrispiT();
        adjustPadding();
    }

    adjustElements();

    $(window).resize(function() {
        adjustElements();
    });

    $('.btnB').mouseenter(function() {
        $(this).css({
            'background-color': '#6C5F5B',
            'color': '#ED7D31'
        });
    }).mouseleave(function() {
        $(this).css({
            'background-color': '#ED7D31',
            'color': '#ffffff'
        });
    });

    $('.card').mouseenter(function() {
        $(this).css({
            'filter': 'brightness(90%)',
        });
    }).mouseleave(function() {
        $(this).css({
            'filter': 'brightness(100%)',
        });
    });

    $('.paket').mouseenter(function() {
        $(this).css({
            'filter': 'brightness(80%)',
        });
    }).mouseleave(function() {
        $(this).css({
            'filter': 'brightness(100%)',
        });
    });

    $('.card-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            },
        }
    });

    $('#gambar').change(function() {
        var fileName = $(this).val().split('\\').pop();
        if (fileName) {
            $('.upload-btn-img').addClass('file-uploaded').text('Diunggah');
        } else {
            $('.upload-btn-img').removeClass('file-uploaded').text('Unggah');
        }
    });

    $(window).resize(function() {
        moveElements();
    });
});
