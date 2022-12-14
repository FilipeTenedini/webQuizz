let progress = document.querySelector('.prog-bar');
let pts = 3;
progress.style.width = `${(pts/11)*100}%`


let currentQuestion = 0;

// por enquanto essa função só preenche os 3 espaços com as 3 opções de respostas + o espaço de pergunta

// => next features, o espaço de respostas precisa ser adicionado via js para que possa add quantas respostas tiver.

function showQuestion() {

    document.querySelector('.faq-question').innerHTML = questions[currentQuestion].question

    for (let i = 0; i < questions[currentQuestion].options.length; i++) {
        
        document.querySelectorAll('.answer-option')[i].innerHTML = questions[currentQuestion].options[i];
        
    }




}

// se tiver algum input clicado retorna o numero do input clicado, irei usar para confirmar se está de acordo com a resposta correta no json

function validateAnswer() {
    let inputs = document.querySelectorAll('input');

    for (let i = 0; i < inputs.length; i++){
        if(inputs[i].checked) {
            return console.log(i)
        } 
    } return false
}
showQuestion();


document.querySelector('button').addEventListener('click', validateAnswer)