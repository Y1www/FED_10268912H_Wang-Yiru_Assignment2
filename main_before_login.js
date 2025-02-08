document.querySelectorAll('.category, .item').forEach((element) => {
    element.addEventListener('click', () => {
        alert(`You clicked on ${element.innerText}`);
    });
});