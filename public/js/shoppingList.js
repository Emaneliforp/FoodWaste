let sl = document.getElementById("bottomNav");
let list = document.getElementById('list');

let RedChili = {
    name: "Red Chili",
    pic:"http://3.imimg.com/data3/PK/NP/GLADMIN-8066/red-chilli-500x500.jpg",
    quan: 1,
    exp: ">365",
}
let Butter = {
    name: "Butter",
    pic:"data:image/jpeg;base64,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",
    quan: "1 knob",
    exp: "273",
}
let Egg = {
    name: "Egg",
    pic:"https://static01.nyt.com/images/2019/02/05/world/05egg/15xp-egg-promo-articleLarge-v2.jpg?quality=75&auto=webp&disable=upscale",
    quan: "4",
    exp: "expiration date + 21",
}
let Milk = {
    name: "Milk",
    pic:"https://33q47o1cmnk34cvwth15pbvt120l-wpengine.netdna-ssl.com/wp-content/uploads/raw-milk-1-e1563894986431-755x1024.jpg",
    quan: "1 bottle",
    exp: "expiration date + 10",
}
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

let arr = [RedChili, Butter, Egg, Milk, Tomato, Lettuce, Banana];

sl.addEventListener('click',function(){shoppingList(), generateList(arr)});

function shoppingList(){
    sl.style.bottom = "60vh";
    sl.style.height = "6vh";
    sl.style.paddingTop = "1vh";
    sl.style.boxShadow= "0px -19px 29px 1px rgba(0,0,0,0.16)";
    sl.style.transition = "bottom 4s, height 4s, paddingTop 4s, boxShadow 4s";
    list.style.visibility = "visible";
    list.style.height = "75vh";
}

function generateList(arr){
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

        let but = document.createElement('i');
        but.classList.add('but');
        but.classList.add("material-icons");
        but.textContent="done";

        info.appendChild(title);
        info.appendChild(quan);
        info.appendChild(but);
        
        item.appendChild(pic);
        item.appendChild(info);
        
        
        list.appendChild(item);
    }
}
