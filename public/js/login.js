// document.getElementById("login").style.display = "none";

let signUp = document.getElementById("signUpBtn");

signUp.addEventListener('click',function(){
  let email = document.getElementById("signUpEmail").value
  let pw = document.getElementById("signUpPw").value
  firebase.auth().createUserWithEmailAndPassword(email,pw).then(function(error){
      alert("success")
      console.log('success')
  }).catch(function(error){
      alert("failed")
      console.log(error)
      
  })
})


var onSignUp = false;
var s = document.getElementsByClassName("switch");
Array.from(s).forEach(function(element){
 element.addEventListener("click", () => {
  if(onSignUp === true){
    document.getElementById("signUp").style.display = "none";
     document.getElementById("login").style.display = "inline-block";
    document.getElementsByClassName("formFrame")[1].style.animationDuration = "3s";
    document.getElementsByClassName("formFrame")[1].style.animationName = "wobble";
    onSignUp = false;
  }else{
    document.getElementById("login").style.display = "none";
     document.getElementById("signUp").style.display = "inline-block";
    document.getElementsByClassName("formFrame")[0].style.animationDuration = "3s";
    document.getElementsByClassName("formFrame")[0].style.animationName = "wobble";
    onSignUp = true; 
  }
});
});


