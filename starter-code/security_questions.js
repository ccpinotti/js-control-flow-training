console.log("security_questions.js loaded");
//let securityQuestions = ["Where were you born?", "What is your favorite sport", "Mother's maiden name?", "What is your job", "What is your eye color" ];
//let expectedAnswer = ["San Francisco", "Baseball", "Smith", "Engineer", "Blue"];
let securityQuestions = [{
  question: "Where were you born?",
  expectedAnswer: "San Francsico"
}, {
  question: "What is your favorite sport?",
  expectedAnswer: "Baseball"
}, {
  question: "Mother's maiden name?",
  expectedAnswer: "Smith"
}]

let answer = "";


for (var i = 0; i > securityQuestions.length; i++) {
  let answer = prompt(securityQuestions[i].question);
  if (securityQuestions[i] === expectedAnswer[0]) {

    securityQuestions = alert("Correct!")
  } else {
    securityQuestions = alert("Wrong Answer")

  }
}






//if input matches expected answer end loop, if it doesnt match keep asking
