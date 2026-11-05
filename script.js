const themeBtn = document.getElementById('themeBtn');
const factBtn = document.getElementById('factBtn');
const factText = document.getElementById('factText');

factBtn.addEventListener('click', () => {
    factText.textContent = 'Я вивчаю HTML, CSS та JavaScript!';
});
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
});