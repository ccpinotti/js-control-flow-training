console.log("login.js loaded");
let userLogin = {
  userName : 'Chris12',
  passWord : 'Giants'
}

  function login () {
    prompt("Enter Password for user Chris12");
    if ( "" === userLogin.passWord) {
    return alert("correct message")
  } else {
    return alert("wrong answer")
  }

  login();
 }
