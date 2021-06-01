player1_name = localStorage.getItem("player1_name")
player2_name = localStorage.getItem("player2_name")

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML =  player1_name;
document.getElementById("player_answer").innerHTML =   player2_name;


question_turn = document.getElementById("player_question").innerHTML;
answer_turn = document.getElementById("player_answer").innerHTML;
console.log("questionturn:" + question_turn);
console.log("anser_turn:"+answer_turn);

function send(){
get_number1 = document.getElementById("Number1").value;
get_number2 = document.getElementById("Number2").value;
ans=get_number1*get_number2;
console.log("No1= " + get_number1);
console.log("No1= " + get_number2);


question_word = "<h4 id='word_display'> Q.  "+get_number1+"  X "+get_number2+" </h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn_info' onclick='check()'>Check</button>";
row = question_word +  input_box + check_button  ;
document.getElementById("output").innerHTML = row;
document.getElementById("Number1").value = "";
document.getElementById("Number2").value = "";
}  



function check() 
{
get_answer = document.getElementById("input_check_box").value;
answer = get_answer;
console.log("answer - " + answer);
if(answer == ans)
{
    console.log("anserturn:"+answer_turn);
   if(answer_turn == player1_name)
   {
       player1_score = player1_score +1;
       document.getElementById("player1_score").innerHtml = player1_score;
   }
  
   if(answer_turn == player2_name)
   {
       player2_score = player2_score +1;
       document.getElementById("player2_score").innerHTML = player2_score;  
   }    
}    
   
if(question_turn == player1_name)
{
   
   document.getElementById("player_question").innerHTML =  player2_name;
   question_turn = player2_name;
}

else
{
   
   document.getElementById("player_question").innerHTML =  player1_name;
   question_turn = player1_name;
}

if(answer_turn == player1_name)
{
   
   document.getElementById("player_answer").innerHTML =  player2_name;
   answer_turn = player2_name;
}

else
{
   
   document.getElementById("player_answer").innerHTML =  player1_name;
   answer_turn = player1_name;
}

document.getElementById("output").innerHTML = "";

console.log(question_turn);



}