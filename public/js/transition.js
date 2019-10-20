let date = document.getElementsByClassName('space');

function ready(d){
console.log("hiIIIIIIIIIIIIII");
for(let i = 0; i<date.length; i++){
    console.log('Troll');
    date[i].addEventListener('click',function(){storeDate(this,d)});
}
}
function storeDate(x,d){
    console.log(x.textContent+" "+d.getMonth()+" "+d.getYear());
}