let list = document.getElementById('list');

function generate(arr){
    for(let i=0; i<arr.length; i++){
        console.log(arr);
        let item = document.createElement('div');
        item.classList.add('tag');
        
        let title = document.createElement('div');
        title.classList.add('title');
        title.textContent=arr[i][0];
        let pic = document.createElement('img');
        pic.classList.add('pic');
        pic.src = arr[i][1];
        let quan = document.createElement('div');
        quan.classList.add('quan');
        quan.textContent=arr[i][2];

        item.appendChild(title);
        item.appendChild(pic);
        item.appendChild(quan);
        
        console.log(item);
        list.appendChild(item);
    }
}