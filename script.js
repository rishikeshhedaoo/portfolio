window.addEventListener('scroll',function(){
    var scrollPosition = window.scrollY;
    var parCircle = document.querySelector('.circle');
    parCircle.style.transform = 'translateY('+(scrollPosition/2)+'px)';

    var parCircle1 = document.querySelector('.circle1');
    parCircle1.style.transform = 'translateX('+(scrollPosition/2)+'px)';

    var parCircle2 = document.querySelector('.circle2');
    parCircle2.style.transform = 'translateX('+(-scrollPosition/2)+'px)';

    var dp = document.querySelector('.dp');
    dp.style.opacity = (-scrollPosition%this.window);

    var name= document.querySelector('.namecard');
    name.style.transform = 'translateY('+(-scrollPosition/2)+'px)';

})

