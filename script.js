let progress = document.querySelectorAll('.prog-bar');
let pts = 0;
let divisor = questions.length;
let currentQuestion = 0;

function showQuestion() {

    if (currentQuestion < questions.length){
        let qttAnswers = questions[currentQuestion].options.length

        for (let i = 0; i < qttAnswers; i++) {
            document.querySelector('.faq-question').innerHTML = questions[currentQuestion].question
    
            let optionItem = document.querySelector('.model .answ').cloneNode(true);
            optionItem.querySelector('input').classList.add('response');
            optionItem.querySelector('.answer-option').innerHTML = questions[currentQuestion].options[i];
    
            document.querySelector('.faq-answers').append(optionItem);
        }
    } else {
        showProgress();
    }
}

function validateAnswer() {
    let inputs = document.querySelectorAll('.response');
    let correctAnswers = document.querySelectorAll('.answ');

    for (let i = 0; i < inputs.length; i++){

        if(inputs[i].checked) {
            if( i == questions[currentQuestion].answer) {
                correctAnswers[i+1].style.backgroundColor = 'green';
                pts++;
                progress[0].style.width = `${(pts/divisor)*100}%`
            } else {
                correctAnswers[i+1].style.backgroundColor = 'red';
            }
            currentQuestion++;

            setTimeout(()=>{
                cleanAll();
            }, 1500)

            setTimeout(() => {
                showQuestion();
            }, 1502)
        } 
    } 
}

const cleanAll = () => document.querySelector('.faq-answers').innerHTML = '';
document.querySelector('button').addEventListener('click', validateAnswer);


function showProgress(){

    document.querySelector('.faq-question').style.display = 'none';
    document.querySelector('button').style.display = 'none';
    document.querySelector('.result').style.display = 'block';
    
    progress[1].style.width = `${(pts/divisor)*100}%`
    document.querySelector('.msg').innerHTML = `Você acertou ${(pts/divisor)*100}%`

    setTimeout(() => {
        setTimeout(location.reload())
    }, 5000)
}

showQuestion();