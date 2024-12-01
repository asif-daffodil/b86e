const accordion = document.querySelectorAll('.accordion');
accordion.forEach(function (e, i) {
    e.addEventListener('click', function () {
        accordion.forEach((el, index) => {
            if (index !== i) {
                el.children[0].classList.remove('active');
                el.children[1].classList.remove('active');
            } else {
                el.children[0].classList.toggle('active');
                el.children[1].classList.toggle('active');
            }
        });
    });
}) 