let hiddenWord = "TICHLUYTUBAN";
let displayWord = "_".repeat(hiddenWord.length).split('');

document.getElementById('hiddenWord').textContent = displayWord.join(' ');

guessInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        guessLetter();
    }
});

function guessLetter() {
    let guess = document.getElementById('guessInput').value.toUpperCase();
    let found = false;
    let correctCount = 0;

    for (let i = 0; i < hiddenWord.length; i++) {
        if (hiddenWord[i] === guess) {
            displayWord[i] = guess;
            found = true;
            correctCount++;
        }
    }

    document.getElementById('hiddenWord').textContent = displayWord.join(' ');



    if (found) {
        onCorrectGuess();
        showToast(`Có ${correctCount} chữ ${guess}`, 'correct');
        correctCount = 0;
    } else {
        showToast(`Không có chữ ${guess}`, 'wrong');
    }

    if (!displayWord.includes('_')) {
        showPopup('TÍCH LUỸ TƯ BẢN');
    }

    document.getElementById('guessInput').value = '';
}

function showToast(message, type) {
    const toast = document.getElementById('toast');
    toast.textContent = message;

    toast.className = 'toast show';
    if (type === 'correct') {
        toast.classList.add('toast-correct');
    } else {
        toast.classList.add('toast-wrong');
    }

    setTimeout(function() {
        toast.className = toast.className.replace('show', '');
    }, 3000);
}

const character = document.getElementById('character');
const obstacle = document.getElementById('obstacle');

function jump() {
    if (!character.classList.contains('jump')) {
        character.classList.add('jump');

        setTimeout(function() {
            character.classList.remove('jump');
        }, 500);
    }
}

function onCorrectGuess() {
    // jump();
}

function checkCollision() {
    const characterRect = character.getBoundingClientRect(); 
    const obstacleRect = obstacle.getBoundingClientRect();  

    const obstacleLeft = obstacleRect.left;
    const characterRight = characterRect.right;


    if (obstacleLeft - characterRight < 100 && obstacleLeft - characterRight > 0) {
        jump();
    }
}

setInterval(checkCollision,40);

function showPopup(message) {
    document.getElementById('popup-message').textContent = message;
    document.getElementById('popup').classList.remove('hidden');
}

function closePopup() {
    document.getElementById('popup').classList.add('hidden');
}

