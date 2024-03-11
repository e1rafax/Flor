document.addEventListener("DOMContentLoaded", function() {
    var frog = document.getElementById('frog');
    var sunflower = document.getElementById('sunflower');
    var message = document.getElementById('message');

    frog.style.display = 'block';
    sunflower.style.display = 'block';

    setTimeout(function() {
        sunflower.style.transform = 'translate(-50%, -50%) scale(1)';
        setTimeout(function() {
            message.style.display = 'block';
            message.style.opacity = '1';
        }, 2000); // 2 segundos después de que el girasol se abra completamente
    }, 2000); // 2 segundos después de que la página se cargue
});
