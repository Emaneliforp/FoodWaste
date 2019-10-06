let list = document.getElementById('list');

let Tomato = {
    name: "Tomato",
    pic: "https://media.istockphoto.com/photos/tomato-isolated-on-white-background-picture-id466175630?k=6&m=466175630&s=612x612&w=0&h=fu_mQBjGJZIliOWwCR0Vf2myRvKWyQDsymxEIi8tZ38=",
    quan: 4,
}
let Lettuce = {
    name: "Lettuce",
    pic: "https://i5.walmartimages.com/asr/58a2caaf-02de-468c-a1fe-e302bb5cbda4_1.5848bcf880f19d670a31ee8cd533f108.jpeg",
    quan: 2,
}
let Banana = {
    name: "Banana",
    pic: "https://i5.walmartimages.com/asr/209bb8a0-30ab-46be-b38d-58c2feb93e4a_1.1a15fb5bcbecbadd4a45822a11bf6257.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    quan: 5,
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
        let quan = document.createElement('div');
        quan.classList.add('quan');
        quan.textContent="Quantity: "+arr[i].quan;

        item.appendChild(title);
        item.appendChild(pic);
        item.appendChild(quan);
        
        list.appendChild(item);
    }
}