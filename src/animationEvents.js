var firstAnimation;

firstAnimation = document.addEventListener('animationend', function (event) {
    if (event.target.id == 'animation-last') {
        destination = document.querySelector('.a-text');
        destination.setAttribute('visible', 'true');
    }
    else {
        document.querySelector('.navigation-entity').emit('done-1');
    }
});
