var rand:number=0
var min:number=1
var max:number=100

rand= Math.floor(Math.random() * (max - min + 1)) + min; 

		function myFunction() {
			const btn = document.getElementById('btn-btn');
			btn.style.display='';
			}
		function hideFunction(){
			const input = document.getElementById('num') as HTMLInputElement | null;
			input?.setAttribute('disabled', '');
			}
		function btnFunction() {
			const btnInput = document.getElementById('btn');
			btnInput?.setAttribute('disabled', '');
			}
const button = document.getElementById('btn');
let count = 0;
button?.addEventListener('click', function handleClick(event) {
count += 1;
const input = document.getElementById('num') as HTMLInputElement | null;
const output=document.getElementById('res-el');
let inputValue;
inputValue = parseFloat(input.value);
const result=document.getElementById('count-el');
result.innerText+=inputValue+",";
	if(count>=10){
		output.innerText="Game Over!....Sorry,You have reached the attemt of Limits ";
			myFunction();
			hideFunction();
			btnFunction();
		}
	else{
		 if(inputValue > rand){
			output.innerText="The Number You have entered is Higher than the number";
		}
		else if(inputValue < rand){
			output.innerText="The Number You have entered is lower than the number";
		}
		else if(inputValue==rand){
			output.innerText="Congrats!You have entered the corret number";
			myFunction();
			hideFunction();
			btnFunction();
		}
		else{
			output.innerText="Plaese enter a number";
		}
	}
	});

