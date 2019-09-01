const AUTH = firebase.auth();
const DB = firebase.database();

let loaded = document.getElementById("loaded");
let loading = document.getElementById("loading");

let cal = document.getElementById("cal");
const currentDate = new Date();
let virtualDate = new Date();
let monthT = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let monthMode = true;

//command
setup();


function setup(){
  DB.ref("test").once('value').then(snapshot =>{
    loading.style.display = "none";
    loaded.style.display = "block";
    console.log(updateDate(virtualDate));
  });
}

function updateDate(d){
  let obj = { 
    year:d.getYear(),
    month: monthT[d.getMonth()],
    firstDay: ((d.getDay()+1-(d.getDate())%7)%7<0)?(d.getDay()+1-(d.getDate())%7)%7+6: (d.getDay()+1-(d.getDate())%7)%7-1,
    maxS: (this.firstDay>3)?42:35,
  }
  return obj;
}

function generateCal(obj){
  let month = obj.month;
  let year = obj.year;
  let firstDay = obj.firstDay;
  let maxS = (obj.firstDay>3)?42:35;
  let arr = [];
  for(var i = 0, n = 1; i<maxS; i++){
    if(i > firstDay){
      if(month<8&&month%2==1||month>=8&&month%2==0){
        if(n<32){
        arr.push([n,month,year]);
        n++;
        }
        else
          arr.push(["",""]);
      }
      else if(month!=2){
        if(n<31){
        arr.push([n,month,year]);
        n++;
        }
        else
          arr.push(["",""]);
      }
      else if(year%4==0&&year%100!=0||year%400==0){
        if(n<30){
        arr.push([n,month,year]);
        n++;
        }
        else
          arr.push(["",""]);
      }
      else{
        if(n<29){
        arr.push([n,month,year]);
        n++;
        }
        else
          arr.push(["",""]);
      }
    }
    else{
      arr.push(["",""]);
    }
  }
  return arr;
}
function updateEvent(arr){
  for(let i = 0; i < arr.length; i++){
    //((x % divisor) + divisor) % divisor
    DB.ref(`/events/${arr[i][2]-1900}/${(((arr[i][1])%12)+12)%12}/${arr[i][0]}`).once('value').then(snapshot => {
    let eventCache = snapshot.val();
    if(eventCache!=null){
      for(let a in eventCache){
        arr[i].push(eventCache[a].title);
      }
    }
      start();
    });
  }
  return arr;
}
function generateSpace(arr){
  let space = document.createElement('div');
    let dt = document.createElement('div');
    if(monthMode){
      space.classList.add('space');
    }
    else{
      space.classList.add('spaceList');
    }
    dt.classList.add('dt');
    
    if(arr[0] == currentDate.getDate()&&arr[1] == currentDate.getMonth()&&arr[2] == currentDate.getYear()){
      space.classList.add('curDate');
    }
    
    dt.textContent = arr[0];
    space.appendChild(dt);
    for(var a = 3; a < arr.length; a++){
      if(arr[a]!=""){
        let event = document.createElement('div');
        let title = document.createElement('span');
        let dot = document.createElement('span');
        let more = document.createElement('div');
  
        event.classList.add('event');
        dot.classList.add('dot');
        more.classList.add('more');
        more.classList.add('event');
        more.textContent="\u2022 \u2022 \u2022";
        
        if(a==5){
          space.appendChild(more);
          break;
        }
        
        dot.textContent="\u2022 ";
        title.textContent = arr[a];
        event.appendChild(dot);
        event.appendChild(title);
        space.appendChild(event);
      }
    }
    return space;
}

function generate(arr){
  calendar.removeChild(cal);
  cal = document.createElement('div');
  cal.id=(monthMode)?'cal':'calList';
  calendar.appendChild(cal);
    for(var i = 0; i<arr.length; i++){
    if(monthMode){
      cal.appendChild(generateSpace(arr[i]));
    }
    else{
      if(arr[i].length>3){
        cal.appendChild(generateSpace(arr[i]));
      }
    }
  }
}