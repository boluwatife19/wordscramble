const words = [
    {
        word: 'vscode',
        hint: 'An environment used for coding'
    },
    {
        word: 'pocket',
        hint: 'A bag for carrying small items'
    },
    {
        word: 'expert',
        hint: 'Person with extensive knowledge'
    }
]

const wordText = document.querySelector('.word')
const wordHint = document.querySelector('.hint span')
const inpField = document.querySelector('input')
const refreshBtn = document.querySelector('.refresh-word')
const checkBtn = document.querySelector('.check-word')
const timeText = document.querySelector('.hint span b')
let correctWord, timer;

const initTimer = maxTime => {
    clearInterval(timer)
    timer = setInterval( ()=> {
        if(maxTime > 0){
            maxTime--; 
            return timeText.innerText = maxTime;
        }
        clearInterval(timer)
        alert(`Time off! ${correctWord.toLocaleUpperCase()} is the correct word`)
        initGame()
    }, 1000)
}


const initGame = () =>{
    initTimer(30)
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("")
    for (let i = wordArray.length - 1; i > 0; i--) {
       let j = Math.floor(Math.random() * (i + 1));
       [wordArray[i], wordArray[j] ] = [wordArray[j], wordArray[i] ] 
    }
    wordHint.innerText = randomObj.hint;
    wordText.innerText = wordArray.join("");
    correctWord = randomObj.word.toLocaleLowerCase();
    inpField.value = "";
    inpField.setAttribute('maxlength', correctWord.length)
}


initGame()

const checkWord = () => {
    let userWord = inpField.value.toLocaleLowerCase();
    if(!userWord) return alert(`Please enter a word check`);
    if(userWord !== correctWord) return alert(`Oops! ${userWord} is not a correct word`);
    alert(`Congratulations! ${userWord.toLocaleUpperCase()} is a correct word`);
    initGame();
}

refreshBtn.addEventListener('click', initGame)
checkBtn.addEventListener('click', checkWord)


