const questions = [
    {
    question: "What is the purpose of a solid white line on the road?",
    possibleAnswers: [{text:"Indicates lane changes are allowed", isCorrect : "false"},
                      {text:"Marks a pedestrian crossing", isCorrect : "false"}, 
                      {text:"Indicates lane changes are discouraged or prohibited", isCorrect : "true"}],
  },
  {
    question: "You are driving in heavy rain and your car begins to hydroplane. What should you do?",
    possibleAnswers: [{text:"Ease off the accelerator and steer gently", isCorrect : "true"},
                      {text:"Accelerate to regain traction", isCorrect : "false"}, 
                      {text:"Slam the brakes immediately", isCorrect : "false"}],
  },
    {
    question: "When is it appropriate to overtake a vehicle on the right?",
    possibleAnswers: [{text:"Only if the vehicle in front is turning left", isCorrect : "true"},
                      {text:"At any time", isCorrect : "false"}, 
                      {text:"Only on one way streets", isCorrect : "false"}],
  },
      {
    question: "What should you do if an emergency vehicle with flashing lights approaches from behind?",
    possibleAnswers: [{text:"Continue driving at the same speed", isCorrect : "false"},
                      {text:"Speed up to avoid getting in the way", isCorrect : "false"}, 
                      {text:"Pull over safely to allow it to pass", isCorrect : "true"}],
  },
  {
    question: "When driving at night, what should you do when another car is coming towards you with high beams on?",
    possibleAnswers: [{text:"Look directly at the lights to judge distance", isCorrect : "false"},
                      {text:"Turn on your high beams too", isCorrect : "false"}, 
                      {text:"Look to the edge of the road and use the road markings to guide you", isCorrect : "true"}],
  },

  {
    question: "When is it safe to cross a railway crossing without gates?",
    possibleAnswers: [{text:"Only if you look both ways and ensure no train is coming", isCorrect : "true"},
                      {text:"Always, because trains must stop for cars", isCorrect : "false"}, 
                      {text:"Only at night", isCorrect : "false"}],
  },
    {
    question: "What is the correct way to overtake another vehicle?",
    possibleAnswers: [{text:"There is no correct way;it is illegal to overtake", isCorrect : "false"},
                      {text:"From the left (or right if driving on the left side of the road)", isCorrect : "true"}, 
                      {text:"Either from the left or the right is possilbe", isCorrect : "false"}],
  },
      {
    question: "When is it safe to use a mobile phone while driving?",
    possibleAnswers: [{text:"When stopped at the traffic light", isCorrect : "false"},
                      {text:"Only when driving slowly", isCorrect : "false"}, 
                      {text:"Never while driving", isCorrect : "true"}],
  },
  {
    question: "What should you do if your vehicle starts to skid on a wet road?",
    possibleAnswers: [{text:"Accelerate quickly", isCorrect : "false"},
                      {text:"Turn the wheel opposite the skid", isCorrect : "false"}, 
                      {text:"Steer into the skid and don't slam brakes", isCorrect : "true"}],
  },






    {
    question: "Which of the following road signs indicate end of priority?",
    possibleAnswers: [
                    {image:"signs/priority-end.png", isCorrect:"true"} , 
                    {image:"signs/no-u-turn.png", isCorrect:"false"}, 
                    {image:"signs/no-left-turn.png", isCorrect:"false"}, 
                    {image:"signs/stop.png", isCorrect:"false"}],
  },
   {
    question: "Which of the following road signs indicate a slippery road?",
    possibleAnswers: [
                    {image:"signs/steep.png", isCorrect:"false"} , 
                    {image:"signs/no-walk.png", isCorrect:"false"}, 
                    {image:"signs/slippery.png", isCorrect:"true"}, 
                    {image:"signs/wind.png", isCorrect:"false"}],
  },
   {
    question: "Which of the following road signs indicate that parking is not allowed?",
    possibleAnswers: [
                    {image:"signs/no-left-turn.png", isCorrect:"false"} , 
                    {image:"signs/no-parking.png", isCorrect:"true"}, 
                    {image:"signs/roundabout.png", isCorrect:"false"}, 
                    {image:"signs/no-motor.png", isCorrect:"false"}],
  },





    {
    question: "What does this road sign indicate?",
    image:"signs/priority.png",
    possibleAnswers: [
      {text:"You are on a priority road and have the right of way", isCorrect : "true"},
      {text:"You have to give priority to the other vehicles", isCorrect : "false"}, 
      {text:"You can not exceed the speed limit", isCorrect : "false"}]// I used strings instead of booleans to make it easier when checking for correct answers

  },
    {
    question: "What does this road sign indicate?",
    image:"signs/no-entry.png",
    possibleAnswers: [
                    {text:"Vehicles are not allowed to be Parked", isCorrect : "false"},
                    {text:"Stop the vehicle", isCorrect : "false"}, 
                    {text:"Vehicles aren't allowed to enter from the direction they are travelling", isCorrect : "true"}],
  },
    {
    question: "What does this road sign indicate?",
    image:"signs/crisscross.png",
    possibleAnswers: [
                    {text:"You must stop and give way to traffic from the right", isCorrect : "false"},
                    {text:"Cross road or junction ahead", isCorrect : "true"}, 
                    {text:"You are on a priority road and have the right of way", isCorrect : "false"}],
  },
  {
    question: "What does this road sign indicate?",
    image:"signs/wind.png",
    possibleAnswers: [
                    {text:"You should slow down, but a complete stop is not necessary", isCorrect : "false"},
                    {text:"Warns drivers of strong crosswinds", isCorrect : "true"}, 
                    {text:"You are on a priority road and have the right of way", isCorrect : "false"}],
  },
    {
    question: "What does this road sign indicate?",
    image:"signs/no-u-turn.png",
    possibleAnswers: [
                    {text:"Turning right is prohibited", isCorrect : "false"},
                    {text:"Making a U-turn is prohibited", isCorrect : "true"}, 
                    {text:"One way only", isCorrect : "false"}],
  },
      {
    question: "What does this road sign indicate?",
    image:"signs/separation.png",
    possibleAnswers: [
                    {text:"Keep a minimum distance of 50 meters while driving", isCorrect : "true"},
                    {text:"Keep a maximum distance of 50 meters while driving", isCorrect : "false"}, 
                    {text:"Keep a maximum speed of 50 Km/h while driving", isCorrect : "false"}],
  },
  {
    question: "What does this road sign indicate?",
    image:"signs/3.5m.png",
    possibleAnswers: [
                    {text:"Vehicles with a height that exceeds 3.5 meters are not allowed to enter", isCorrect : "true"},
                    {text:"The minimum height of vehicles allowed is 3.5 meters", isCorrect : "false"}, 
                    {text:"Vehicles with a lenght that exceeds 3.5 meters are not allowed to enter ", isCorrect : "false"}],
  },
   {
    question: "What does this road sign indicate?",
    image:"signs/roadwork.png",
    possibleAnswers: [
                    {text:"There is an archaeological dig site ahead", isCorrect : "false"}, 
                    {text:"There is road work ahead", isCorrect : "true"},
                    {text:"Children are playing in the area", isCorrect : "false"}],
  },
   {
    question: "What does this road sign indicate?",
    image:"signs/river.png",
    possibleAnswers: [
                    {text:"There is a bridge ahead that is damaged and out of service", isCorrect : "false"}, 
                    {text:"There is Quayside river bank ahead", isCorrect : "true"},
                    {text:"There is a steep hill descent", isCorrect : "false"}],
  },
    {
    question: "What does this road sign indicate?",
    image:"signs/steep.png",
    possibleAnswers: [
                    {text:"Recommended speed of 10Km/h for an upcoming curve", isCorrect : "false"}, 
                    {text:"Distance to the next exit is 10 meters away", isCorrect : "false"},
                    {text:"There is a steep upward gradient ahead", isCorrect : "true"}],
  },
];



questions.forEach(q => {
  q.answered = false;
  q.selectedIndex = null;
});





function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}




const questionContainer = document.getElementById("questionContainer");
const answerContainer = document.getElementById("answerContainer");
const textanswerContainer = document.getElementById("textanswerContainer");
const imganswerContainer = document.getElementById("imganswerContainer");
const nxtContainer = document.getElementById("nxtContainer");
const imgqContainer = document.getElementById("imgqContainer");
const scoreansCont = document.getElementById("scoreansCont");
const scoreDisplay = document.getElementById("scoreDisplay");
const finishAttempt = document.getElementById("finishAttempt");
//const midRv = document.getElementById("midRv");


const finalPage = document.getElementById("finalPage");



      

let currentQuestionIndex = 0;
let scoreCounter = 0;




let scoretxt = document.createElement("p");
scoretxt.classList.add("scoreCountertext");
scoretxt.textContent = "Score: ";
scoreansCont.appendChild(scoretxt);


let scoreCountertext = document.createElement("p");
scoreCountertext.classList.add("scoreCountertext");
scoreCountertext.textContent = scoreCounter;
scoreansCont.appendChild(scoreCountertext);




let prvbtn = document.createElement("button");
      prvbtn.textContent = "Previous Question";
      prvbtn.classList.add("prvbtn");
      nxtContainer.appendChild(prvbtn);



 let nxtbtn = document.createElement("button");
      nxtbtn.classList.add("nxtbtn");
      nxtbtn.textContent = "Next";
      nxtContainer.appendChild(nxtbtn);
      nxtbtn.style.display = "none";
      


let headText = document.createElement("p");
      headText.textContent = "RoadMaster";
      headText.classList.add("headText");
      finishAttempt.appendChild(headText);


let rmcar = document.createElement("img");
rmcar.src = "images/3d-Car.png";
rmcar.classList.add("rmcar");
finishAttempt.appendChild(rmcar);



let finishAt = document.createElement("button");
      finishAt.textContent = "Finish Attempt";
      finishAt.classList.add("finishAt");
      finishAttempt.appendChild(finishAt);




function handleQuestion(index) {

  
  nxtbtn.style.display = "none";
  if(questions[index].answered){nxtbtn.style.display = "block";};
  if (currentQuestionIndex === 0){ prvbtn.style.display = "none";};

scoretxt.textContent = "Score: ";
finishAt.style.display = "block";  
finalPage.innerHTML = "";
scoreDisplay.innerHTML="";

  // topic/question
   questionContainer.innerHTML = "";
   if(questions[index].question){
   let q = document.createElement("p");
   q.classList.add("qs");
    q.textContent=questions[index].question;
    questionContainer.appendChild(q);
   }
    //images
   imgqContainer.innerHTML = "";
  if(questions[index].image){
    let imgq = document.createElement("img");
    imgq.src=questions[index].image;
    imgq.classList.add("imgq");
    imgqContainer.appendChild(imgq);
  }

  // answers
  textanswerContainer.innerHTML = "";
  imganswerContainer.innerHTML = "";

   
  questions[index].possibleAnswers.forEach((answer) => {
     let ansbtn = document.createElement("button");
      ansbtn.dataset.correct = answer.isCorrect;

     if(answer.text){
     ansbtn.classList.add("ansbtntext");
     ansbtn.textContent = answer.text;
     textanswerContainer.appendChild(ansbtn);
    }else if(answer.image){
         let ansimg = document.createElement("img");
         ansimg.src =  answer.image;
         ansimg.classList.add("ansimg");
         ansbtn.classList.add("ansbtnimg")
         ansbtn.appendChild(ansimg);
         imganswerContainer.appendChild(ansbtn);
  }
    
    
     
  }); 


  

let answers = answerContainer.querySelectorAll("button");

  answers.forEach((answer, Index) => {



    answer.addEventListener("click", (e) => {
     nxtbtn.style.display = "block";
   if(questions[index].answered)return;
   


       questions[index].answered = true;
       questions[index].selectedIndex = Index;
       prvbtn.style.display = "block";

       
       
       let tellAns = document.createElement("p");
       scoreDisplay.appendChild(tellAns);


       // 1. always show the correct answer
    answers.forEach((ans) => {
      if (ans.dataset.correct === "true") {
        ans.classList.add("ansbtn-correct");
      }
      ans.disabled = true;
    });


    if( e.target.dataset.correct === "true") {
        nxtbtn.style.display = "none";
        scoreCounter++;
        scoreCountertext.textContent = scoreCounter;
        tellAns.textContent = "You got it!!";
        tellAns.classList.add("tellAnsr");

        setTimeout(() => {
          if (currentQuestionIndex === questions.length - 1) {
           qend();
          }else {
            currentQuestionIndex++;
            handleQuestion(currentQuestionIndex);
          }
         
        }, 1000); // 1 second delay
      

    }else{
        e.target.classList.add("ansbtn-wrong");;
         nxtbtn.style.display = "block";
         tellAns.textContent = "Wrong!";
         tellAns.classList.add("tellAnsw");
      }

})


if(questions[index].answered){
     answers.forEach((ans,i)=>{
      ans.disabled = true;
    if(ans.dataset.correct === "true" && i === questions[index].selectedIndex){
        ans.classList.add("ansbtn-correct");
    } else if(ans.dataset.correct === "false" && i === questions[index].selectedIndex){
       ans.classList.add("ansbtn-wrong");
}})
}
});
   
}
shuffleArray(questions);
handleQuestion(currentQuestionIndex);









function nxtfn(){
  nxtbtn.addEventListener("click", (e)=>{

       prvbtn.style.display = "block";
      if(currentQuestionIndex === questions.length-1){
    qend();
      } else{
    currentQuestionIndex++;
    handleQuestion(currentQuestionIndex);
}
})


 prvbtn.addEventListener("click", (e)=>{

   if(currentQuestionIndex >0){
    currentQuestionIndex--;
    handleQuestion(currentQuestionIndex);
    nxtbtn.style.display = "block";
  }})
};
nxtfn();









let finishb = document.createElement("button");
finishb.classList.add("finishb")
finishb.textContent = "Start over";

function qend(){

nxtbtn.style.display = "none";
prvbtn.style.display = "none";
finishAt.style.display = "none";
scoreCountertext.textContent = "";
scoretxt.textContent = "";
scoreDisplay.innerHTML="";
imgqContainer.innerHTML = "";
questionContainer.innerHTML = "";
textanswerContainer.innerHTML = "";
imganswerContainer.innerHTML = "";



  let finishp1 = document.createElement("p");
  textanswerContainer.appendChild(finishp1);

  
  let finishp2 = document.createElement("p");
  finishp2.classList.add("finishp2");
  textanswerContainer.appendChild(finishp2);

    textanswerContainer.appendChild(finishb);

  finishb.addEventListener("click", ()=>{
    scoreCounter = 0;
    scoreCountertext.textContent = scoreCounter;
    currentQuestionIndex = 0;
    questions.forEach((question)=>{
      question.answered = false;
      question.selectedIndex = null;
    });
    
    shuffleArray(questions);
    handleQuestion(currentQuestionIndex);
  })

  if(scoreCounter>= (questions.length+1)/2){
  finishp1.textContent = "You scored"+scoreCounter+"/"+questions.length+".";
  finishp1.classList.add("finishp1w");
  finishp2.textContent = "Congradulations! You have finished the quiz with a satisfactory result.";
} else if (scoreCounter < (questions.length+1)/2){
  finishp1.textContent = "You scored"+scoreCounter+"/"+questions.length+".";
  finishp1.classList.add("finishp1l");
  finishp2.textContent = "Don't worry! Just Practice a little more and you will be right there.";
}
};



finishAt.addEventListener("click", function fin(){

finishAt.style.display = "none";

nxtbtn.style.display = "none";
prvbtn.style.display = "none";
scoreCountertext.textContent = "";
scoretxt.textContent = "";
scoreDisplay.innerHTML="";
imgqContainer.innerHTML = "";
questionContainer.innerHTML = "";
textanswerContainer.innerHTML = "";
imganswerContainer.innerHTML = "";

let atp = document.createElement("p");
atp.classList.add("atp");
atp.textContent = "You scored "+scoreCounter+" out of "+ currentQuestionIndex+".";
textanswerContainer.appendChild(atp);

let atp2 = document.createElement("p");
textanswerContainer.appendChild(atp2);
if((currentQuestionIndex/2)<scoreCounter){
  atp2.textContent = "Congradulations, you did excellent.";
  atp2.classList.add("atp2w");
}
else if((currentQuestionIndex/2)>=scoreCounter){
  atp2.textContent = "Dont Worry! You can always try again.";
  atp2.classList.add("atp2l");
}

textanswerContainer.appendChild(finishb);
  finishb.addEventListener("click", ()=>{
    scoreCounter = 0;
    scoreCountertext.textContent = scoreCounter;
    currentQuestionIndex = 0;
    questions.forEach((question)=>{
      question.answered = false;
      question.selectedIndex = null;
    });
    
    shuffleArray(questions);
    handleQuestion(currentQuestionIndex);
  })

});


