const quizData = [
    {
        question: "Jakich języków używamy do tworzenia stron?",
        a: "HTML/PHP/JSON",
        b: "HTML/CSS/JS",
        c: "CSS/JSON/JAVA",
        d: "CSS/HTML/JSON",
        correct: "b",
    },
    {
        question: "W CSS aby zacząć edytować element o klasie icon musimy zacząć od?",
        a: "#icon",
        b: ".icon",
        c: "icon",
        d: "-",
        correct: "b",
    },
    {
        question: "Gdzie najczęściej dodajemy arkusze styli?",
        a: "JSON",
        b: "HTML",
        c: "CSS",
        d: "JS",
        correct: "c",
    },
    {
        question: "W jakim języku najczęściej nazywamy nazwy klas?",
        a: "Polskim",
        b: "Niemieckim",
        c: "Angielskim",
        d: "W żadnym z podanych",
        correct: "c",
    },
    {
        question: "Rozszerzeniem do HTML jest?",
        a: "AutoRenameTag",
        b: "ESLint",
        c: "FluentIcons",
        d: "Discord Presence",
        correct: "a",
    },
    {
        question: "Aby podpiąć JS używamy?",
        a: "<link rel='stylesheet' href='script.js'>",
        b: "<script src='script.js'>",
        c: "<img src='script.js'>",
        d: "Nie trzeba tego podpiąć!",
        correct: "b",
    },
    {
        question: "HTML oraz CSS nazywamy językami:",
        a: "Programowania",
        b: "Znaczników",
        c: "Kodowania",
        d: "Nie ma czegoś takiego jak HTML lub CSS!",
        correct: "b",
    },
    {
        question: "Najpopularniejszym edytorem kodu jest:",
        a: "Notatnik",
        b: "VisualStudioCode (VSC)",
        c: "Notepad++",
        d: "Brackets/Atom",
        correct: "c",
    },
    {
        question: "Aby zakończyć linijkę w CSS używamy?",
        a: ":",
        b: ";",
        c: ".",
        d: ",",
        correct: "b",
    },
    {
        question: "Margines w CSS określamy za pomocą:",
        a: "margin: 10px;",
        b: "padding: 10;",
        c: "display: flex;",
        d: "Nie ma czegoś takiego jak margines w CSS",
        correct: "a",
    },
    {
        question: "Stałe Zmienne w JS możemy zdefiniować jako",
        a: "var",
        b: "let",
        c: "function",
        d: "const",
        correct: "d",
    },
    {
        question: "Przyjeło się że nazwe pliku HTML nazywamy?",
        a: "index.htm",
        b: "home.html",
        c: "indeks.html",
        d: "Brak poprawnej odpowiedzi",
        correct: "d",
    },
    {
        question: "Aktualną wersją HTML jest:",
        a: "HTML3",
        b: "HTML4",
        c: "HTML5",
        d: "HTML6",
        correct: "c",
    },
    {
        question: "Aktualną wersją JS jest:",
        a: "ES6",
        b: "ES7",
        c: "ES5",
        d: "ES4",
        correct: "a",
    },
    {
        question: "Przyjeło się że nazwe pliku CSS nazywamy?",
        a: "style.scss",
        b: "style.css",
        c: "style.sass",
        d: "index.css",
        correct: "b",
    },


];

const startTime = new Date().getTime();

const quiz = document.getElementById('quiz')
const text = document.getElementById('score')
const quizLevel = document.getElementById('time')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const sumbitBtn = document.getElementById('sumbit')

let questionLevel = 1
let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    text.innerHTML = `<p>WYNIK: ${score}/${quizData.length}</p>`
    quizLevel.innerHTML = `<p>PYTANIE: ${questionLevel}/${quizData.length}</p>`
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


sumbitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

        currentQuiz++
        questionLevel++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           const endTime = new Date().getTime();

           const gameTime = (endTime - startTime) / 1000
           quiz.innerHTML = `
           <h2>Odpowiedziałeś ${score} poprawnie na ${quizData.length} zadań.
           <br>
           <br>
           Spędziłeś ${gameTime}sekund!</h2>

           <button onclick="location.reload()">Spróbuj Ponownie</button>
           `
       }
    }
})