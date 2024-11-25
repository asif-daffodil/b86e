const headings = document.querySelector('.headings');
const details = document.querySelector('.details');
const headingsChildren = Array.from(headings.children);
const detailsChildren = Array.from(details.children);

headingsChildren.forEach((heading, index) => {
    heading.addEventListener('click', () => {
        for (let i = 0; i < headingsChildren.length; i++) {
            if (i === index) {
                headingsChildren[i].classList.add('active');
                detailsChildren[i].classList.add('active');
            } else {
                headingsChildren[i].classList.remove('active');
                detailsChildren[i].classList.remove('active');
            }
        }
    });
});