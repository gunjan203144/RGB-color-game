 var sqNum=6;
var colors=generateRandomColor(sqNum);
var squares=document.querySelectorAll(".square");
var cd= document.getElementById("cd");
var message=document.getElementById("message");
var h1=document.querySelector("h1");
var rb=document.querySelector("#reset");
var easyb=document.querySelector("#easy");
var hardb=document.querySelector("#hard");
var pickedColor=pickColor();
easyb.addEventListener("click",function(){
	hardb.classList.remove("selected");
	easyb.classList.add("selected");
	sqNum=3;
	colors=generateRandomColor(sqNum);
	pickedColor=pickColor();
	cd.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.background=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
	h1.style.background="steelblue";
	message.textContent="";
});

hardb.addEventListener("click", function(){
	hardb.classList.add("selected");
	easyb.classList.remove("selected");
	sqNum=6;
	colors=generateRandomColor(sqNum);
	pickedColor=pickColor();
	cd.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=colors[i];
		squares[i].style.display="block";
	}
	h1.style.background="steelblue";
	message.textContent="";
});

rb.addEventListener("click", function(){
	colors=generateRandomColor(sqNum);
	pickedColor=pickColor();
	cd.textContent=pickedColor;
	for(var i=0; i<squares.length; i++){
		squares[i].style.background=colors[i];
	}
	h1.style.background="steelblue";
	message.textContent="";
	rb.textContent="New Colors"
});

cd.textContent = pickedColor;
cd.style.color = "#660b0b";
for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click",function(){
		var clicked=this.style.backgroundColor;
		if(clicked===pickedColor){
			message.style.color="green";
			message.textContent="Correct!";
			rb.textContent="Play Again?";
			changeColor(clicked);
			h1.style.background=clicked;
		}
		else{
			this.style.backgroundColor="#232323";
			message.style.color="red";
			message.textContent="TryAgain!";
		}
	});
}

function changeColor(color){
		for(var i=0;i<squares.length;i++){
			squares[i].style.background=color;
		}
}

function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generateRandomColor(num){
	var arr=[];
	for(var i=0;i<num;i++){
		var r=Math.floor(Math.random()*256);
		var g=Math.floor(Math.random()*256);
		var b=Math.floor(Math.random()*256);
		var c="rgb("+r+", "+g+", "+b+")";
		arr.push(c);	
	}
	return arr;
}