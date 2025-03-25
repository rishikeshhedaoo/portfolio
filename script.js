window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    
    var parCircle = document.querySelector('.circle');
    if (parCircle) parCircle.style.transform = 'translateY(' + (scrollPosition / 2) + 'px)';

    var parCircle1 = document.querySelector('.circle1');
    if (parCircle1) parCircle1.style.transform = 'translateX(' + (scrollPosition / 2) + 'px)';

    var parCircle2 = document.querySelector('.circle2');
    if (parCircle2) parCircle2.style.transform = 'translateX(' + (-scrollPosition / 2) + 'px)';

    var dp = document.querySelector('.dp');
    if (dp) dp.style.opacity = 1 - (scrollPosition / 500); // Ensure opacity stays between 0 and 1

    var name = document.querySelector('.namecard');
    if (name) name.style.transform = 'translateY(' + (-scrollPosition / 2) + 'px)';
});

// Cursor effect
document.addEventListener('mousemove', function (e) {
    var cursor = document.querySelector('.cursor');
    if (cursor) {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    }
});

document.addEventListener('mouseover', function () {
    var cursor = document.querySelector('.cursor');
    if (cursor) cursor.classList.add('glow');
});

document.addEventListener('mouseout', function () {
    var cursor = document.querySelector('.cursor');
    if (cursor) cursor.classList.remove('glow');
});
