$(document).ready(function() {
    $('dl').toggle();
    $('h2').bind('click', function(event) {
        event.preventDefault();
        $(this).next('dl').slideToggle(500, function() {
            $('.video-background').videobackground('resize');
        });
    });
    $('body').prepend('<div class="video-background"></div>');
    $('.video-background').videobackground({
        videoSource: [['video/Buda_finalOK.mp4', 'video/mp4'],
            ['video/Buda_finalOK.webm', 'video/webm'],
            ['video/Buda_finalOK.ogv', 'video/ogg']],
        controlPosition: '#main',
        poster: 'video/poster.jpg',
        loop: true,
        loadedCallback: function() {
            $(this).videobackground('mute');
        }
    });

    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    $('.portfolioFilter a').click(function() {
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });

    if ($('html').hasClass('csstransforms3d')) {

        $('.thumb').removeClass('scroll').addClass('flip');
        $('.thumb.flip').hover(
                function() {
                    $(this).find('.thumb-wrapper').addClass('flipIt');
                },
                function() {
                    $(this).find('.thumb-wrapper').removeClass('flipIt');
                }
        );

    } else {

        $('.thumb').hover(
                function() {
                    $(this).find('.thumb-detail').stop().animate({bottom: 0}, 500, 'easeOutCubic');
                },
                function() {
                    $(this).find('.thumb-detail').stop().animate({bottom: ($(this).height() * -1)}, 500, 'easeOutCubic');
                }
        );

    }
    $('#pasaVideo').on('click', function(e) {
        setTimeout(function() {
            $('.video-background').html('<video preload="none" poster="video/posteTimelapse.jpg" autoplay="autoplay" loop="loop"><source src="video/Timelapse_finalOK.mp4" type="video/mp4"><source src="video/Timelapse_finalOK.webm" type="video/webm"><source src="video/Timelapse_finalOK.ogv" type="video/ogg"></video>');
        }, 500);
        setTimeout(function() {
            $('.pt-page-1').css('background-image', 'url("video/posterElvis.jpg")');
            $('.pt-page-5').css('background-image', 'none');
        }, 2000);        
    });
    $('#devolVideo').on('click', function(e) {
        setTimeout(function() {
            $('.video-background').html('<video preload="none" poster="video/poster.jpg" autoplay="autoplay" loop="loop"><source src="video/Buda_finalOK.mp4" type="video/mp4"><source src="http://altoandes.com/recursos/video/Buda_finalOK.webm" type="video/webm"><source src="http://altoandes.com/recursos/video/Buda_finalOK.ogg" type="video/ogg"></video>');
        }, 500);
        setTimeout(function() {
            $('.pt-page-5').css('background-image', 'url("video/posteTimelapse.jpg")')
            $('.pt-page-1').css('background-image', 'none');
        }, 1000);
    });
    $('.cuadrosPubli').on('click', function(e) {
        $('#video').attr('src', '//player.vimeo.com/video/'+$(this).attr('id'));
        $('#videoPublicitario').css('display', 'block');
        $(this).find('label').css('display','block');
    });
    $('#videoPublicitario').on('click', function(e) {
        $('#video').attr('src', '');
        $('#videoPublicitario').css('display', 'none');
    });
    $('#biograJaime').on('click', function(e) {
        $('#popupBios').slideDown();
    });
    $('#biograNicolas').on('click', function(e) {
        $('#popupBiosNicolas').slideDown();
    });
    $('#popupBios').on('click', function(e) {
        $('#popupBios').slideUp();
    });
    $('#popupBiosNicolas').on('click', function(e) {
        $('#popupBiosNicolas').slideUp();
    });
    $('#btnJaime').on('click', function(e) {
        $('#publiNicolas').slideUp('slow');
        $('#biograNicolas').slideUp('fast');
        $('#contentNicolas').removeClass('menuHomeACT');
        $('#publiJuan').slideUp('slow');
        $('#biograJuan').slideUp('fast');
        $('#contentJuan').removeClass('menuHomeACT');
        $('#publiTodos').slideUp('slow');
        $('#biograRecientes').slideUp('fast');
        $('#publiJaime').slideDown('slow');
        setTimeout(function(){$('#biograJaime').slideDown('fast');},300);
        $('#contentKarina').removeClass('menuHomeACT');
        $('#contentJaime').addClass('menuHomeACT');
        $('#publiKarina').slideUp('slow');
        $('#biograKarina').slideUp('fast');
    });
    $('#btnKarina').on('click', function(e) {
        $('#publiNicolas').slideUp('slow');
        $('#biograNicolas').slideUp('fast');
        $('#contentNicolas').removeClass('menuHomeACT');
        $('#publiJuan').slideUp('slow');
        $('#biograJuan').slideUp('fast');
        $('#contentJuan').removeClass('menuHomeACT');
        $('#publiTodos').slideUp('slow');
        $('#publiJaime').slideUp('slow');
        $('#biograRecientes').slideUp('fast');
        $('#biograJaime').slideUp('fast');
        $('#publiKarina').slideDown('slow');
        setTimeout(function(){$('#biograKarina').slideDown('fast');},300);
        $('#contentKarina').addClass('menuHomeACT');
        $('#contentJaime').removeClass('menuHomeACT');
    });
    $('#btnNicolas').on('click', function(e) {
        $('#publiTodos').slideUp('slow');
        $('#publiJaime').slideUp('slow');
        $('#publiKarina').slideUp('slow');
        $('#publiJuan').slideUp('slow');
        $('#biograJuan').slideUp('fast');
        $('#contentJuan').removeClass('menuHomeACT');
        $('#biograRecientes').slideUp('fast');
        $('#biograJaime').slideUp('fast');
        $('#biograKarina').slideUp('fast');
        $('#contentKarina').removeClass('menuHomeACT');
        $('#contentJaime').removeClass('menuHomeACT');
        $('#publiNicolas').slideDown('slow');
        setTimeout(function(){$('#biograNicolas').slideDown('fast');},300);
        $('#contentNicolas').addClass('menuHomeACT');
    });
    $('#btnJuan').on('click', function(e) {
        $('#publiTodos').slideUp('slow');
        $('#publiJaime').slideUp('slow');
        $('#publiKarina').slideUp('slow');
        $('#publiNicolas').slideUp('slow');
        $('#biograRecientes').slideUp('fast');
        $('#biograJaime').slideUp('fast');
        $('#biograKarina').slideUp('fast');
        $('#biograNicolas').slideUp('fast');
        $('#contentKarina').removeClass('menuHomeACT');
        $('#contentJaime').removeClass('menuHomeACT');
        $('#contentNicolas').removeClass('menuHomeACT');
        $('#publiJuan').slideDown('slow');
        setTimeout(function(){$('#biograJuan').slideDown('fast');},300);
        $('#contentJuan').addClass('menuHomeACT');
    });
    $('#tituloDirectores').on('click', function(e) {
//        $('#publiTodos').slideDown('slow');
//        $('#publiJaime').slideUp('slow');
//        $('#publiKarina').slideUp('slow');
//        $('#publiNicolas').slideUp('slow');
//        setTimeout(function(){$('#biograRecientes').slideDown('fast');},300);
//        $('#biograJaime').slideUp('fast');
//        $('#biograKarina').slideUp('fast');
//        $('#biograNicolas').slideUp('fast');
//        $('#contentKarina').removeClass('menuHomeACT');
//        $('#contentJaime').removeClass('menuHomeACT');
//        $('#contentNicolas').removeClass('menuHomeACT');
//        $('#publiJuan').slideUp('slow');
//        $('#biograJuan').slideUp('fast');
//        $('#contentJuan').removeClass('menuHomeACT');
          $('#direct').slideToggle('slow');
    });
    $('#ultimosTrabajos').on('click', function(e) {
        $('#publiTodos').slideDown('slow');
        $('#publiJaime').slideUp('slow');
        $('#publiKarina').slideUp('slow');
        $('#publiNicolas').slideUp('slow');
        setTimeout(function(){$('#biograRecientes').slideDown('fast');},300);
        $('#biograJaime').slideUp('fast');
        $('#biograKarina').slideUp('fast');
        $('#biograNicolas').slideUp('fast');
        $('#contentKarina').removeClass('menuHomeACT');
        $('#contentJaime').removeClass('menuHomeACT');
        $('#contentNicolas').removeClass('menuHomeACT');
        $('#publiJuan').slideUp('slow');
        $('#biograJuan').slideUp('fast');
        $('#contentJuan').removeClass('menuHomeACT');
    });
    
//    setTimeout(function() {
//            $('.pt-page-1').css('background-image', 'none');
//        }, 1500);
        
   $('.menuPrincipal').addClass('box_rotate box_transition');   
   $('.video-background').find('video').attr('id','videoPrincipal');
   $('.link-menu').on('click', function(e) {
        document.getElementById('videoPrincipal').pause();
    });
   $('#soso').on('click', function(e) {
        setTimeout(function(){document.getElementById('videoPrincipal').play();},1000);
    });
});
function oculta(valor) {
    switch (valor) {
        case '0':
            for (var i = 1; i <= 17; i++) {
                $('#t' + i).fadeIn();
            }
            break;
        case '1':
            for (var i = 1; i <= 17; i++) {
                $('#t' + i).fadeOut();
            }
            setTimeout(function() {
                $('#t2').fadeIn();
            }, 500);
            setTimeout(function() {
                $('#t3').fadeIn();
            }, 500);
            setTimeout(function() {
                $('#t4').fadeIn();
            }, 500);
            setTimeout(function() {
                $('#t12').fadeIn();
            }, 500);
            break;
        case '2':
            for (var i = 1; i <= 17; i++) {
                $('#t' + i).fadeOut();
            }
            setTimeout(function() {
                $('#t9').fadeIn();
            }, 500);
            setTimeout(function() {
                $('#t10').fadeIn();
            }, 500);
            setTimeout(function() {
                $('#t11').fadeIn();
            }, 500);
            setTimeout(function() {
                $('#t14').fadeIn();
            }, 500);
            setTimeout(function() {
                $('#t15').fadeIn();
            }, 500);
            break;
        case '3':
            for (var i = 1; i <= 17; i++) {
                $('#t' + i).fadeOut();
            }
            setTimeout(function() {
                $('#t1').fadeIn();
            }, 500);
            setTimeout(function() {
                $('#t6').fadeIn();
            }, 500);
            setTimeout(function() {
                $('#t7').fadeIn();
            }, 500);
            setTimeout(function() {
                $('#t8').fadeIn();
            }, 500);
            break;
        case '4':
            for (var i = 1; i <= 17; i++) {
                $('#t' + i).fadeOut();
            }
            setTimeout(function() {
                $('#t1').fadeIn();
            }, 500);
            setTimeout(function() {
                $('#t5').fadeIn();
            }, 500);
            setTimeout(function() {
                $('#t13').fadeIn();
            }, 500);
            setTimeout(function() {
                $('#t16').fadeIn();
            }, 500);
            setTimeout(function() {
                $('#t17').fadeIn();
            }, 500);
            break;
    }
}
function toggle(este) {
    //$('#contenidoCine').slideToggle();
    $('#videoVimeo').attr('src', '//player.vimeo.com/video/' + este);

    if ($('#contenidoCine').css('display') == 'block') {
        $('#contenidoCine').slideUp();
        setTimeout(function() {
            $('#contenidoCine').slideDown();
        }, 500);
        $('#' + este).fadeIn('slow');
    } else {
        $('#contenidoCine').slideDown();
        $('#' + este).fadeIn('slow');
    }
}
function devolVideo(){
        setTimeout(function() {
            $('.video-background').html('<video preload="none" poster="video/poster.jpg" autoplay="autoplay" loop="loop"><source src="video/Elvis1280_2.mp4" type="video/mp4"><source src="video/Buda_finalOK.webm" type="video/webm"><source src="video/Buda_finalOK.ogv" type="video/ogg"></video>');
        }, 500);
        setTimeout(function() {
            $('.pt-page-5').css('background-image', 'url("video/posteTimelapse.jpg")')
            $('.pt-page-1').css('background-image', 'none');
        }, 1000);
}
function pasaVideo(){
    setTimeout(function() {
            $('.video-background').html('<video preload="none" poster="video/posteTimelapse.jpg" autoplay="autoplay" loop="loop"><source src="video/Timelapse_finalOK.mp4" type="video/mp4"><source src="video/Timelapse_finalOK.webm" type="video/webm"><source src="video/Timelapse_finalOK.ogv" type="video/ogg"></video>');
        }, 500);
        setTimeout(function() {
            $('.pt-page-1').css('background-image', 'url("video/posterElvis.jpg")');
            $('.pt-page-5').css('background-image', 'none');
        }, 1000);
}
function mataVideo(){
    $('#reel').html('<iframe src="//player.vimeo.com/video/80894614" width="800" height="450" frameborder="0" allowfullscreen style="position: absolute; left: 50%; top: 50%; margin-left: -400px; margin-top: -225px;"></iframe>');
    setTimeout(function(){document.getElementById('videoPrincipal').play();},1000);
}

