const quizData = [
    {
        question: "Aktualnie najwyżwszą wersją WINDOWS jest?",
        a: "WINDOWS 7",
        b: "WINDOWS XP",
        c: "WINDOWS 10",
        d: "WINDOWS 11",
        correct: "d",
    },
    {
        question: "Aby wyciąć zdjęcie ekranu bez korzystania z programo, użyjemy?",
        a: "CTRL + PrtSc",
        b: "WINDOWS + CTRL + B",
        c: "WINDOWS + SHIFT + S",
        d: "Brak poprawnej odpowiedzi",
        correct: "c",
    },
    {
        question: "Aby w szymbi sposób zacząć drukować użyjemy?",
        a: "CTRL + K",
        b: "CTRL + P",
        c: "WINDOWS + K",
        d: "WINDOWS + P",
        correct: "b",
    },
    {
        question: "Aby otworzyć menu START klikamy przycisk?",
        a: "WINDOWS",
        b: "CTRL",
        c: "ALT + F4",
        d: "SHIFT",
        correct: "b",
    },
    {
        question: "Aby szybko włączyć eksplorator plików używamy?",
        a: "WINDOWS",
        b: "Brak poprawnych odpowiedzi",
        c: "WINDOWS + E",
        d: "CTRL + E",
        correct: "d",
    },
    {
        question: "Co jakiś czas w komputerze musimy wymieniać?",
        a: "System Operacyjny",
        b: "Pastę termoprzewodzącą",
        c: "Taśme izolacyjną",
        d: "Procesor",
        correct: "b",
    },
    {
        question: "Czy najlepiej aby złożyć komputer od zera?",
        a: "Tak",
        b: "Nie",
        c: "Z allegro gotowca kupić!",
        d: "Brak poprawnej odpowiedzi!",
        correct: "a",
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