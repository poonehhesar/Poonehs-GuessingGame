      var qAndA = [["We have selected a random number between 1 - 10. See if you can guess it.",""],
      ["We have selected a random number between 1 - 20, see if you can guess it.","13"],
      ["What color is the sky?","blue"],
      ["Who is the main character in Harry Potter?","Harry Potter"]]
      qAndA[0][1] = Math.floor(Math.random() * 10 + 1); 
    
   // question 1
   // counting number of guesses 
   // made for correct Guess 
   var guess = 1; 
   var counter = 0;

    document.getElementById("submitguess").onclick = function(){ 
      
   if (document.getElementById("guessField").value == qAndA[0][1])
   {     
      document.getElementById("answerField").value="You guessed right in "
          + guess + " guess "; 
          document.getElementById("question2").className="show";
          document.getElementById("question1").className="hidden";
          counter++;
          document.getElementById("counter1").innerHTML="Total point is: "+ counter;
         } 
      else if(document.getElementById("guessField").value >  qAndA[0][1]) /* if guessed number is greater han actual number*/ 
         {     
          guess++; 
          document.getElementById("answerField").value="Try a smaller number"; 
         } 
         else
         { 
          guess++; 
         document.getElementById("answerField").value="Try a higher number" 
         } 
      } 

      
// question 2      
      var guess = 1;
  
      document.getElementById("submitguess2").onclick = function(){ 
      
         if(document.getElementById("guessField2").value  == qAndA[1][1]) 
     {     
        document.getElementById("answerField2").value="You guessed right in "
            + guess + " guess "; 
            document.getElementById("question3").className="show";
            document.getElementById("question2").className="hidden";
            counter++;
            document.getElementById("counter1").innerHTML="Total point is: "+ counter;
           } 
        else if(document.getElementById("guessField2").value > qAndA[1][1]) /* if guessed number is greater han actual number*/ 
           {     
            guess++; 
            document.getElementById("answerField").value="Try a smaller number"; 
           } 
           else
           { 
            guess++; 
           document.getElementById("answerField").value="Try a higher number" 
           } 
        }

// question 3     
document.getElementById("yellow").onclick = function(){

   document.getElementById("answerField3").value="Wrong "

}
   document.getElementById("green").onclick = function(){

   document.getElementById("answerField3").value="Wrong "

    }
    
   document.getElementById("blue").onclick = function(){ 
   document.getElementById("blue").value="You guessed right in "
   + guess + " guess ";
   counter++;
   document.getElementById("counter1").innerHTML="Total point is: "+ counter;

   document.getElementById("question3").className="hidden";
   document.getElementById("question4").className="show";
} 


// question 4
// answer
var a = "Harry Potter";
var guess = 1; 
      
document.getElementById("Hermione Granger").onclick = function(){

   document.getElementById("answerField4").value="Wrong "

}
   document.getElementById("Ron Weasley").onclick = function(){

   document.getElementById("answerField4").value="Wrong "

    }

   document.getElementById("Harry Potter").onclick = function(){ 
   document.getElementById("Harry Potter").value="You guessed right in "
   + guess + " guess ";
   counter++;
   document.getElementById("counter1").innerHTML="Total point is: "+ counter;
   document.getElementById("question4").className="hidden";
   
   function refreshPage(){
      window.location.reload();
  } 
 
}
