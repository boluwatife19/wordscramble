const words = [
    {
        word: 'vscode',
        hint: 'An environment used for coding'
    },
    {
        word: 'pocket',
        hint: 'A bag for carrying small items'
    },{
        word: 'treasure ',
        hint: 'Valuable or precious possessions hidden or lost'
    },{
        word: 'mysterious ',
        hint: 'Difficult to understand or explain'
    },{
        word: 'victory ',
        hint: 'Triumph or success in a competition or battle'
    },{
        word: 'telescope ',
        hint: ' Instrument for viewing distant objects in space'
    },{
        word: 'cathedral ',
        hint: ' Large and important Christian church'
    },{
        word: 'algorithm ',
        hint: 'Step-by-step procedure for solving a problem'
    },{
        word: 'symphony ',
        hint: 'Elaborate musical composition for an orchestra'
    },{
        word: 'diamond ',
        hint: ' Precious gemstone known for its brilliance'
    },{
        word: 'novel ',
        hint: ' Long fictional narrative book'
    },{
        word: 'galaxy ',
        hint: 'A bag for carrying small items'
    },{
        word: 'galaxy ',
        hint: 'System of stars, gas, and dust in outer space'
    },{
        word: 'oasis ',
        hint: 'A fertile spot in a desert with water'
    },{
        word: 'unicorn ',
        hint: 'Mythical creature with a single horn'
    },{
        word: 'recipe  ',
        hint: 'Set of instructions for preparing a dish'
    },{
        word: 'adventure ',
        hint: 'Exciting or daring experience'
    },{
        word: 'camera ',
        hint: 'Device for capturing photographs or videos'
    },{
        word: 'guitar ',
        hint: 'Musical instrument with strings'
    },{
        word: 'keyboard ',
        hint: 'Input device for typing characters'
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


