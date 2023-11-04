document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', () => {
        const cards = document.querySelectorAll('.card-animation');
        cards.forEach((card) => {
            if (isElementInViewport(card, 170)) { // Увеличьте значение, чтобы карточка оставалась видимой дольше
                card.classList.add('card-visible');
            } else {
                card.classList.remove('card-visible');
            }
        });
    });

    function isElementInViewport(el, offset = 0) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= -offset &&
            rect.left >= -offset &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) + offset
        );
    }
});
