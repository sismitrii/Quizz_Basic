const form = document.querySelector('.form-quizz');
let resultTable =[];
const answer = ['c','a','b','a','c'];
const emojis = ['✔️','✨','👀','😭','👎'];
const resultTitle = document.querySelector('.resultat-block h2');
const help = document.querySelector('.aide');
const mark = document.querySelector('.note');
const allQuestion = document.querySelectorAll('.question-block'); // pour ajouter couleur ou animation
let markTable = [];
let nbrTrueAnswer = 0;


form.addEventListener('submit', function(e){
	e.preventDefault();

	for (i = 1; i<6; i++ ){
		resultTable.push(document.querySelector(`input[name = "q${i}"]:checked`).value);
	}
	checkResult(resultTable);
	showResult();
	colorQuestionBlock();
	raz();
});

function checkResult(resultReceived) {
	for (let a = 0; a < 5;  a++){
		if (resultReceived[a] === answer[a]){
			markTable.push(true);
		} else {
			markTable.push(false);
		}
	}
	console.log(markTable);
}

function showResult() {
	for (let j = 0; j < 5; j++){
		if (markTable[j] == true) {
			nbrTrueAnswer += 1;
		}
	}

	switch (nbrTrueAnswer) {
		case 5: 
			resultTitle.innerText ="✔️ Bravo c'est un sans-faute ✔️"
			help.innerText =''
			mark.innerText = "5/5"
			break;

		case 4:
			resultTitle.innerText ="✨ Vous y êtes presque ! ✨"
			help.innerText ="Retentez une autre réponse dans la case rouge, puis re-validez !"
			mark.innerText = "4/5"
			break;

		case 3:
			resultTitle.innerText ="✨ Encore un effort ... 👀"
			help.innerText ="Retentez une autre réponse dans les cases rouges, puis re-validez !"
			mark.innerText = "3/5"
			break;

		case 2:
			resultTitle.innerText ="👀 Il reste quelques erreurs. 😭"
			help.innerText ="Retentez une autre réponse dans les cases rouges, puis re-validez !"
			mark.innerText = "2/5"
			break;

		case 1: 
			resultTitle.innerText ="😭 Peux mieux faire ! 😭"
			help.innerText ="Retentez une autre réponse dans les cases rouges, puis re-validez !"
			mark.innerText = "1/5"
			break;

		case 0:
			resultTitle.innerText ="😭 Nul à chier 😭"
			help.innerText = "Give up bro'"
			mark.innerText = "0/5"
			break;
		default :
			"Cas innatendu, appeler cet  abruti de developpeur"
	}
}

function colorQuestionBlock(){
	for (let k = 0; k < 5; k++){
		if (markTable[k] === true){
            allQuestion[k].style.background = 'lightgreen';
        } else {
            allQuestion[k].style.background = '#ffb8b8';
            allQuestion[k].classList.add('echec');

        setTimeout(function(){
        	allQuestion[k].classList.remove('echec');
        }, 500)
    	}
	}

	allQuestion.forEach( function(event){
		event.addEventListener('click', function(){
			event.style.background = "white";
		})
	})
}

function raz(){
	markTable = [];
	nbrTrueAnswer = 0;
	resultTable = [];
}


