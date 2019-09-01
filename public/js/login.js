document.getElementById("login").style.display = "none";
var onSignUp = true;
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
