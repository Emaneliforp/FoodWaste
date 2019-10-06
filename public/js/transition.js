let date = document.getElementsByClassName('space');

console.log("hi");
for(let i = 0; i<date.length; i++){
    date[i].addEventLister('click',function(){storeDate(this)});
}
function storeDate(x){
    console.log(x);
}