function scroll(o) {
    var navA = (o.nav) ? document.querySelectorAll(o.nav) : document.querySelectorAll('nav a') ;
    var activeClass = (o.activeClass) ? o.activeClass : 'nav-active' ;
    var animatetime = (o.animateDuration >= 0 && o.animateDuration < 10000 ) ? o.animateDuration : 1000;

    document.addEventListener('click', to);
    window.addEventListener('scroll', navActive);
var than = 0;

    function navActive(){
        var elem = document.elementFromPoint(1, 100);

        for (var i = 0; i < navA.length; i++) {
            if (elem.getAttribute('class') === navA[i].getAttribute('href').substring(1)
                && navA[i] !== navA[than]) {
                navA[i].classList.add(activeClass);
                navA[than].classList.remove(activeClass);
                than = i;
                //return
            }

        }
    }

    function to(e) {
        var t = e.target;
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        var delta = 0;

        for (var i = 0; i < navA.length; i++) {
            if (navA[i] === t) {
                e.preventDefault();
                var scrollToClass = t.getAttribute('href').substring(1);
                var scrollT = document.querySelector('.' + scrollToClass);
                var heightScroll = scrollT.getBoundingClientRect().top;

                animate({
                    duration: animatetime,
                    timing: function circ(timeFraction) {
                        return 1 - Math.sin(Math.acos(timeFraction))
                    },
                    draw: function (progress) {
                        window.scrollTo(scrollLeft, scrollTop + (heightScroll - delta) * Math.abs(progress));
                    }
                });
                return

            }
        }
    }
}

