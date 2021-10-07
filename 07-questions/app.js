const btns = document.querySelectorAll('.question-btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const current = e.currentTarget.parentElement.parentElement;
        current.classList.toggle('show-text');
    })
})