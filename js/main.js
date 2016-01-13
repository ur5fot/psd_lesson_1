function scrollLanding(o) {
    var navA = (o.nav) ? document.querySelectorAll(o.nav) : document.querySelectorAll('nav a'),
        animatetime = (o.animateDuration >= 0 && o.animateDuration < 10000 ) ? o.animateDuration : 1000,
        activeClass = (o.activeClass) ? o.activeClass : 'nav-active',
        activeLeft = (o.activeLeft >= 0) ? o.activeLeft : 1,
        funtimin = (o.funtiming) ? o.funtiming :
            function circ(timeFraction) {
                return 1 - Math.sin(Math.acos(timeFraction))
            },
        activeTop = (o.activeTop >= 0) ? o.activeTop : 100;

    document.addEventListener('click', to);
    window.addEventListener('scroll', navActive);
    var than = 0;

    function navActive() {
        var elem = document.elementFromPoint(activeLeft, activeTop);

        for (var i = 0; i < navA.length; i++) {
            if (elem.getAttribute('class') === navA[i].getAttribute('href').substring(1)
                && navA[i] !== navA[than]) {
                navA[i].classList.add(activeClass);
                navA[than].classList.remove(activeClass);
                than = i;
                return
            }

        }
    }

    function to(e) {
        var t = e.target;
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        var delta = 0;

        if (t.classList.contains('hamburger-icon')) {

        } else {
            for (var i = 0; i < navA.length; i++) {
                if (navA[i] === t) {
                    e.preventDefault();
                    var scrollToClass = t.getAttribute('href').substring(1);
                    var scrollT = document.querySelector('.' + scrollToClass);
                    var heightScroll = scrollT.getBoundingClientRect().top;

                    animate({
                        duration: animatetime,
                        timing: funtimin,
                        draw: function (progress) {
                            window.scrollTo(scrollLeft, scrollTop + (heightScroll - delta) * Math.abs(progress));
                        }
                    });
                    return

                }
            }
        }


    }

    // var navAWigth = 0;
    // for (var i = 0; i < navA.length; i++) {
    //     navAWigth += navA[i].offsetWidth;

    // }

    // setTimeout(function tick() {
    //     if (navAWigth > document.documentElement.clientWidth) {
    //         document.querySelector('nav ul').style.display = 'none';
    //         document.querySelector('nav svg').style.display = 'block'
    //     } else {
    //         document.querySelector('nav ul').style.display = '';
    //         document.querySelector('nav svg').style.display = 'none'
    //     }
    //     //console.log(document.querySelector('nav ul').offsetWidth);
    //     //console.log(document.documentElement.clientWidth);
    //     setTimeout(tick, 2000)
    // }, 2000)
}

