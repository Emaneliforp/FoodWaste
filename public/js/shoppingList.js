let sl = document.getElementById("bottomNav");

sl.addEventListener('click',function(){shoppingList()});

function shoppingList(){
    sl.style.bottom = "60vh";
    sl.style.height = "6vh";
    sl.style.paddingTop = "1vh";
    sl.style.boxShadow= "0px -19px 29px 1px rgba(0,0,0,0.16)";
    sl.style.transition = "bottom 4s, height 4s, paddingTop 4s, boxShadow 4s";
}