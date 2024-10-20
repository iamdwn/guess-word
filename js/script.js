let hiddenWord = "tichluytuban"; // Từ ẩn
let displayWord = "_".repeat(hiddenWord.length).split('');

// Hiển thị từ ẩn với các ký tự "_"
document.getElementById('hiddenWord').textContent = displayWord.join(' ');

// Hàm xử lý khi đoán chữ
function guessLetter() {
    let guess = document.getElementById('guessInput').value.toLowerCase();
    let message = document.getElementById('message');
    let found = false;

    // Kiểm tra xem chữ đoán có trong từ không
    for (let i = 0; i < hiddenWord.length; i++) {
        if (hiddenWord[i] === guess) {
            displayWord[i] = guess;
            found = true;
        }
    }

    // Cập nhật từ hiển thị
    document.getElementById('hiddenWord').textContent = displayWord.join(' ');

    // Nếu đoán đúng
    if (found) {
        onCorrectGuess(); // Gọi hàm nhảy nếu đoán đúng
        message.textContent = `Chữ "${guess}" đúng!`;
    } else {
        message.textContent = `Chữ "${guess}" không có trong từ.`;
    }

    // Nếu đoán hết tất cả các chữ trong từ
    if (!displayWord.includes('_')) {
        message.textContent = 'Chúc mừng, bạn đã đoán đúng từ!';
    }

    // Xóa chữ trong input sau khi đoán
    document.getElementById('guessInput').value = '';
}

// Nhân vật và chướng ngại vật
const character = document.getElementById('character');
const obstacle = document.getElementById('obstacle');

// Hàm nhảy cho nhân vật
function jump() {
    // Nếu nhân vật chưa có lớp jump thì thêm vào
    if (!character.classList.contains('jump')) {
        character.classList.add('jump');

        // Xóa lớp jump sau 500ms (thời gian nhảy)
        setTimeout(function() {
            character.classList.remove('jump');
        }, 500);
    }
}

// Gọi hàm nhảy khi đoán đúng
function onCorrectGuess() {
    jump();
}
