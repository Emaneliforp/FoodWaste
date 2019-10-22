let list = document.getElementById('list');

let Tomato = {
    name: "Tomato",
    pic: "https://media.istockphoto.com/photos/tomato-isolated-on-white-background-picture-id466175630?k=6&m=466175630&s=612x612&w=0&h=fu_mQBjGJZIliOWwCR0Vf2myRvKWyQDsymxEIi8tZ38=",
    quan: 4,
    exp:"14",
}
let Lettuce = {
    name: "Lettuce",
    pic: "https://i5.walmartimages.com/asr/58a2caaf-02de-468c-a1fe-e302bb5cbda4_1.5848bcf880f19d670a31ee8cd533f108.jpeg",
    quan: 2,
    exp:"10"
}
let Banana = {
    name: "Banana",
    pic: "https://i5.walmartimages.com/asr/209bb8a0-30ab-46be-b38d-58c2feb93e4a_1.1a15fb5bcbecbadd4a45822a11bf6257.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    quan: 7,
    exp: "7"
}

let arr = [Tomato, Lettuce, Banana];

generate(arr);

function generate(arr){
    for(let i=0; i<arr.length; i++){
        console.log(arr);
        let item = document.createElement('div');
        item.classList.add('item');
        
        let title = document.createElement('div');
        title.classList.add('itemName');
        title.textContent=arr[i].name;

        let pic = document.createElement('img');
        pic.classList.add('pic');
        pic.src = arr[i].pic;

        let info = document.createElement('div');
        info.classList.add('info');

        let quan = document.createElement('div');
        quan.classList.add('quan');
        quan.textContent="Quantity: "+arr[i].quan;

        let exp = document.createElement('div');
        exp.classList.add('exp');
        exp.textContent="Expiration date: " + arr[i].exp+" days";

        let but = document.createElement('div');
        but.classList.add('but');
        but.textContent="Edit";

        info.appendChild(quan);
        info.appendChild(exp);
        info.appendChild(but);

        item.appendChild(title);
        item.appendChild(pic);
        item.appendChild(info);
        
        
        list.appendChild(item);
    }
}

let but = document.getElementsByClassName('but');
for(let i = 0; i<but.length; i++){
    but[i].addEventListener('click', function(){edit(this.parentElement)});
}
let modal = document.getElementById("modal");
let save = document.getElementById('save');
function edit(obj){
    modal.style.display='block';
    save.addEventListener("click", function(){editSave(obj)});
}

function editSave(obj){
    let quan = obj.getElementsByClassName("quan")[0];
    let exp = obj.getElementsByClassName("exp")[0];
    let updatedQuan = modal.getElementsByTagName('input')[0].value;
    let updatedExp = modal.getElementsByTagName('input')[1].value;
    if(updatedQuan!=""){
        quan.textContent ="Quantity: "+updatedQuan;
    }
    if(updatedExp!=""){
        exp.textContent ="Expiration date: "+updatedExp+" days";
    }
    console.log(quan+"; "+ exp);
    modal.style.display="none";
}