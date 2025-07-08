document.addEventListener("DOMContentLoaded", () => {
    const words = document.querySelectorAll('.word');
    let currentWordIndex = 0;

    words[currentWordIndex].style.opacity = '1';

    function changeWord() {
        const currentWord = words[currentWordIndex];
        const nextWordIndex = (currentWordIndex + 1) % words.length;
        const nextWord = words[nextWordIndex];

        Array.from(currentWord.children).forEach((letter, i) => {
            setTimeout(() => {
                letter.classList.add('out');
            }, i * 80);
        });

        nextWord.style.opacity = '1';
        Array.from(nextWord.children).forEach((letter, i) => {
            letter.classList.add('behind');
            setTimeout(() => {
                letter.classList.remove('behind');
                letter.classList.add('in');
            }, 340 + (i * 80));
        });

        setTimeout(() => {
            Array.from(currentWord.children).forEach(letter => letter.classList.remove('in', 'out'));
            currentWord.style.opacity = '0';
            currentWordIndex = nextWordIndex;
        }, 2000);
    }

    setInterval(changeWord, 4000);
});
