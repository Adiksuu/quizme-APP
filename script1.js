const quizData = [
    {
        question: "Jaka firma stworzyła VSC?",
        a: "Microsoft",
        b: "Sony",
        c: "Intel",
        d: "Inna...",
        correct: "a",
    },
    {
        question: "Czy rozszerzenie EMMET jest wbudowane w VSC?",
        a: "Nie ma takiego rozszerzenia",
        b: "Nie",
        c: "Tak",
        d: "Chyba",
        correct: "c",
    },
    {
        question: "Jaki skrót klawiszowy odpowiada za przywrócenie zmian w VSC?",
        a: "CTRL + Z",
        b: "CTRL + Y",
        c: "CTRL + R",
        d: "CTRL + SHIFT + Z",
        correct: "d",
    },
    {
        question: "Czy VSC jest darmowym programem?",
        a: "Nie",
        b: "Tak",
        c: "Jest w promocji -100%",
        d: "Chyba",
        correct: "b",
    },
    {
        question: "Skąd pobieramy rozszerzenia do VSC?",
        a: "Z internetu",
        b: "Z ich strony www",
        c: "Z innej aplikacji",
        d: "Z VSC",
        correct: "d",
    },
    {
        question: "W którym roku powstał VSC?",
        a: "29 Listopada 2015r",
        b: "17 Kwietnia 2016r",
        c: "29 Kwietnia 2015r",
        d: "17 Stycznia 2014r!",
        correct: "c",
    },
    {
        question: "Którego z podanych systemów VSC nie wspiera",
        a: "Windows",
        b: "Linux",
        c: "MacOS",
        d: "Nie podano powyżej!",
        correct: "d",
    },
    {
        question: "Jaki skrót klawiszowy odpowiada za wyszukanie pliku w VSC?",
        a: "CTRL + L",
        b: "CTRL + B",
        c: "CTRL + P",
        d: "CTRL + X",
        correct: "c",
    },
    {
        question: "Powiązane z VSC strony to:",
        a: "VS/Electron/Brackets",
        b: "Atom/Brackets;",
        c: "Electron/Brackets/Atom",
        d: "Nie ma powiązanych stron...",
        correct: "a",
    },
    {
        question: "Czy w VSC istnieje AutoZapis?",
        a: "Tak",
        b: "Nie",
        c: "Tak ale sam musisz go włączyć",
        d: "Nie dopuki nie włączysz Strony",
        correct: "c",
    },
    {
        question: "Jaki skrót klawiszowy odpowiada za rozpoczęcie debugowania w VSC?",
        a: "F11",
        b: "F5",
        c: "F6",
        d: "F4",
        correct: "b",
    },
    {
        question: "Aby odświeżać swoją stronę localhost w czasie rzeczywistym, potrzebujesz rozszerzenia:",
        a: "LiveShare",
        b: "Auto Rename TAG",
        c: "LiveServer",
        d: "Prettier",
        correct: "c",
    },
    {
        question: "Jaki skrót klawiszowy odpowiada za otworzenie terminala w VSC?",
        a: "CTRL + O",
        b: "CTRL + Y",
        c: "CTRL + J",
        d: "SHIFT + Y",
        correct: "c",
    },
    {
        question: "Czy VisualStudio (VS) Powstało wcześniej niż VisualStudioCode (VSC)?",
        a: "Tak",
        b: "W tym samym czasie",
        c: "Nie",
        d: "Brak poprawnej Odpowiedzi",
        correct: "a",
    },
    {
        question: "Jaki skrót klawiszowy odpowiada za włączanie/wyłączanie pasku pobocznego w VSC?",
        a: "CTRL + K, CTRL + T",
        b: "CTRL + B",
        c: "CTRL + R",
        d: "CTRL + SHIFT + X",
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