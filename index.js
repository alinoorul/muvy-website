const hamburger = document.getElementById('hamburger');
const overlay = document.getElementById('mobileOverlay');
const overlayClose = document.getElementById('overlayClose');

hamburger.addEventListener('click', function () {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
});

overlayClose.addEventListener('click', function () {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
});

overlay.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
    });
});
