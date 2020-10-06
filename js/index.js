$(function () {
    var arr, reg = new RegExp("(^| )first=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
        $('.overlay').remove();
    } else {
        particlesJS("particles", {
            "particles": {
                "number": {
                    "value": 64,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#4B9ECE"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                },
                "opacity": {
                    "value": 0.3,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 20,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 30,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 250,
                    "color": "#40afaf",
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 3,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": true,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 100,
                        "line_linked": {
                            "opacity": 0.5
                        }
                    },

                }
            },
            "retina_detect": true
        });
    }
    $('.index-wrapper header a').hide();
    $('.index-wrapper').show();
    var $header = $('.index-wrapper header')
        .css({
            height: 0
        })
        .animate({
            height: 120,
        }, 800, function () {
            $('.index-wrapper header a').show().fadeIn(600);
        });

    $('.head-btn').mousedown(function (e) {
        if (e.which == 1) {
            document.cookie = "first=" + escape(1) + ";expires=''";
            var $this = $(this);

            $header.animate({
                height: 0
            }, 800, function () {
                window.location.href = $this.attr('href');
            });
        }
    });

});