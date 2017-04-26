    var gameChoice = 5;
    var wins = 0;
    var losses = 0;
    var userAnswers = {};

var questionsAnswersArray = [   
   {
      question: "What your school name?",
      options: [" CSUN ", " NYIT ", " NJIT "],
      answerINdex: 1
    },
    {
      question: "What your fav city?",
      options: [" NJ ", " LA ", " NY "],
      answerINdex: 1
    },
    {
      question: "What fav movie?",
      options: [" Fifth Element ", " Starwars ", " Clerks "],
      answerINdex: 2
    }

  ];


//when user clicks on Start button, button function executes.
function createForm() {
$("#start").remove();
console.log("Mirita is createing form now....")
var questionsForm = $("<form id='trivia-game-form'>")


//for loop to display questions and its options
  for (var i = 0; i < questionsAnswersArray.length; i++) {
    var questionToAsk = questionsAnswersArray[i].question;
    var currentQuestion = $("<h3>");
    currentQuestion.text(questionToAsk)
    questionsForm.append(currentQuestion);
    var currentQuestionOptions = questionsAnswersArray[i].options
  


//for loop to display radio button next to option
    for (var j = 0; j < currentQuestionOptions.length; j++) {
      currentQuestionOptions[j]
      var optionLabel = $("<label>");
      var optionInput = $("<input type='radio'>");
      optionLabel.html( currentQuestionOptions[j] );
      //optionLabel.attr("for", j)
      //optionInput.attr("id", j)
      //optionInput.attr("value", currentQuestionOptions[j])
     
      //only one option can be selected
      var nameToAdd = "question"+(i+1);
      optionInput.attr("name", nameToAdd)

      questionsForm.append(optionLabel);
      questionsForm.append(optionInput);  
//timer here
    }

  }

 // creating button via Javascript ; not used html
  var submitBtn = $("<button>");
  submitBtn.attr("id", "done")
  submitBtn.text("Submit")


  //append submit btn to questionForm
  questionsForm.append(submitBtn);
  //append questionForm to div id = questions
  $("#questions").append(questionsForm);
}

function createResultsForm() {
	console.log("form for display result now")
	
}

///////////////Timer//////

var i=60;

function startCounter() {
  document.getElementById('counter').innerHTML = i;
  i--;
  if (i < 0) {
    alert('You lose!');
  }
  else {
    setTimeout(startCounter, 1000);
  }
}


  ///////////////

$("#start").on("click",function(){
	createForm();
	startCounter();
	});



//without this, by clicking start -->I am not able to go to next page 
$("#questions").on("click", "#done", function(){
  $( "#trivia-game-form" ).submit(function( event ) {
  console.log(event);
  alert( "Handler for .submit() called." );
  // event.preventDefault();
  // var values = $(this).serialize();
  //validation 
  console.log(values); 


$.each($('#trivia-game-form').serializeArray(), function(i, question) {
    console.log(question);
      userAnswers[question.name] = question.value;
  });
  console.log(userAnswers);
}); 


})