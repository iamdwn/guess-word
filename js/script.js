let hiddenWord = "tichluytuban";
let displayWord = "_".repeat(hiddenWord.length).split('');

document.getElementById('hiddenWord').textContent = displayWord.join(' ');

function guessLetter() {
    let guess = document.getElementById('guessInput').value.toLowerCase();
    let message = document.getElementById('message');
    let found = false;

    for (let i = 0; i < hiddenWord.length; i++) {
        if (hiddenWord[i] === guess) {
            displayWord[i] = guess;
            found = true;
        }
    }

    document.getElementById('hiddenWord').textContent = displayWord.join(' ');

    if (found) {
        message.textContent = `Chữ "${guess}" đúng!`;
    } else {
        message.textContent = `Chữ "${guess}" không có trong từ.`;
    }

    if (!displayWord.includes('_')) {
        message.textContent = 'Chúc mừng, bạn đã đoán đúng từ!';
    }

    // Xóa chữ trong input sau khi đoán
    document.getElementById('guessInput').value = '';
}
