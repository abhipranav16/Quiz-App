const quizData = [
    {
        question: "Who is the highest run-scorer in international cricket for India?",
        a: "Sachin Tendulkar",
        b: " Virat Kohli",
        c: "Rahul Dravid",
        d: "Sunil Gavaskar",
        correct: "b",
    },
    {
        question: "Which Indian cricketer has taken the most wickets in Test matches? ",
        a: "Anil Kumble",
        b: "Kapil Dev",
        c: "Ravichandran Ashwin",
        d: "Harbhajan Singh",
        correct: "a",
    },
    {
        question: "Who was the captain of the Indian cricket team when they won their first-ever ICC World Cup in 1983?",
        a: "Sunil Gavaskar ",
        b: " Kapil Dev",
        c: "Sachin Tendulkar",
        d: " Rahul Dravidr",
        correct: "b",
    },
    {
        question: "Which Indian batsman holds the record for the highest individual score in Test matches?",
        a: "Virender Sehwag",
        b: "Rahul Dravid",
        c: "Sachin Tendulkar",
        d: "Virat Kohli",
        correct: "a",
    },
    {
        question: "Who was the first Indian cricketer to score a triple century in Test matches?",
        a: "Sunil Gavaskar",
        b: "Rahul Dravid",
        c: "Virender Sehwag",
        d: "Sachin Tendulkar",
        correct: "c",
    },
    {
        question: "Who is the current head coach of the Indian cricket team?",
        a: "Ravi Shastri",
        b: "Rahul Dravid",
        c: "Anil Kumble",
        d: " Sourav Ganguly",
        correct: "b",
    },
    {
        question: "Who is the only Indian bowler to take all 10 wickets in a single Test innings?",
        a: "Harbhajan Singh",
        b: "Anil Kumble",
        c: "Ravichandran Ashwin",
        d: " Narendra Hirwani",
        correct: "b",
    },
    {
        question: "Who was the first Indian cricketer to reach 10,000 runs in One Day Internationals (ODIs)?",
        a: " Kapil Dev",
        b: " Sachin Tendulkar",
        c: " Virat Kohli",
        d: "Sourav Ganguly",
        correct: "b",
    },
    {
        question: "Which Indian bowler has the best bowling figures in an innings in Test matches?",
        a: " Kapil Dev",
        b: "Anil Kumble",
        c: " Harbhajan Singh",
        d: "Jasprit Bumrah",
        correct: "b",
    },
    {
        question: "Who was the captain of the Indian cricket team when they won their first-ever ICC T20 World Cup in 2007?",
        a: "Rahul Dravid",
        b: "Sourav Ganguly",
        c: "Mahendra Singh Dhoni",
        d: " Virender Sehwag",
        correct: "c",
    },

];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

const numberOfQuestion = document.getElementById("numberOfQuestion");
const numberOfAllQuestion = document.getElementById("numberOfAllQuestion");

let indexOfQuestion;
let indexOfPage = 0;

numberOfAllQuestion.innerHTML = quizData.length;

let currentQuiz = 0
let score = 0

let time = 300;
    const countDownEl = document.getElementById("countdown");   
    
    let counter = setInterval(updateCountdown, 1000);
    
    function updateCountdown(){
    
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
    
        seconds = seconds < 10 ? "0" + seconds: seconds;
    
        minutes = minutes < 10 ? "0" + minutes: minutes;
    
        countDownEl.innerHTML = `${minutes}:${seconds}`;
    
        time--;
    
        
    
        if(minutes <= 0 && seconds == 0) {
            const timeText = document.querySelector(".timer_text");
            timeText.textContent = "Time is over";
            //alert("Quiz over");
            Swal.fire({
                icon: 'error',
                title: 'Oops...time is up!',
                text: 'But you can restart the quiz',
                showConfirmButton: false,
                footer: '<a href="start.html" style="background-color:#44b927; padding: 1rem; text-decoration: none; color: white;">Restart the Quiz</a>'
              })
            clearInterval(counter);
        }
    
        
    }

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

    numberOfQuestion.innerHTML = indexOfPage + 1;
    indexOfPage++; 

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

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {

        quiz.innerHTML = `

       <div class="end_quiz">
       <img src="https://img.freepik.com/free-vector/winner-cup-with-gold-medal-concept_1284-13591.jpg?t=st=1649089096~exp=1649089696~hmac=f87786e709de78b968be4c3294279ab1fcbc23a8b4a452b0246e08d7665b3cec&w=826" alt="winner" class="img">
        <h3 class="end-title">You answered ${score}/${quizData.length} questions correctly</h3>
        <button onclick="location.reload()" class="reload">Reload</button></div>
         `
       }
    }
})

}