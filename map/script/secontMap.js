const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const fourth = document.getElementById('fourth');
const fifth = document.getElementById('fifth');
const sixth = document.getElementById('sixth');


let monster = fifth.children[0];
monster.style.position = 'relative';
monster.style.zIndex = '2';

let crown = sixth.children[0];

let player = document.createElement('div');
player.style.width = '50px';
player.style.height = '50px';
player.style.border = '1px solid white';
player.style.backgroundColor = 'black'

first.appendChild(player);

let nextStage

let percent = 200;

function openWindow(){
  nextStage = window.open("../map/thirdMap.html",'_self');
}

document.addEventListener('keydown', (e)=>{
  const key = e.key
  console.log(key);
  let player = document.createElement('div');
  player.style.width = '50px';
  player.style.height = '50px';
  player.style.border = '1px solid white';
  player.style.backgroundColor = 'black'
  player.style.position = 'absolute';
  if(key === 'ArrowLeft'){
    if(third.children.length === 1){
      third.textContent = '';
      fourth.appendChild(player);  
    } else {
      alert('움직일 수 없는 타일입니다!');
    }
  } else if (key === 'ArrowUp') {
    if(first.children.length === 1) {
      first.textContent = '';
      second.appendChild(player);
    } else if (second.children.length === 1) {
      second.textContent = '';
      third.appendChild(player);
    } else if (third.children.length === 1) {
      third.textContent = '';
      crown.style.visibility = 'visible';
      // setinterval을 걸고. 사이즈를 올리고 줄였다가 원래크기로 돌아오면, 
      let sizeUp = setInterval(()=>{
        percent++;
        crown.style.width = percent + 'px';
        crown.style.height = percent + 'px';
        if (percent > 350) {
          clearInterval(sizeUp)
          percent = 200;
          setTimeout(()=>{
            openWindow();
          },2000);
        }
    },16);
    } else {
      alert("움직일 수 없는 타일입니다!");
    }
  } else if (key === 'ArrowDown') {
    if(third.children.length === 1) {
      third.textContent = '';
      second.appendChild(player);
    } else if (second.children.length === 1) {
      second.textContent = '';
      first.appendChild(player);
    } else {
      alert("움직일 수 없는 타일입니다!");
    }
  } else if (key === 'ArrowRight'){
    if(fourth.children.length === 1){
      fourth.textContent = '';
      third.appendChild(player);  
    } else if (third.children.length === 1) {
      third.textContent = '';
      monster.style.visibility = 'visible';
      // setinterval을 걸고. 사이즈를 올리고 줄였다가 원래크기로 돌아오면, 
      let sizeUp = setInterval(()=>{
        percent++;
        monster.style.width = percent + 'px';
        monster.style.height = percent + 'px';
        if (percent > 350) {
          clearInterval(sizeUp)
          percent = 200;
          setTimeout(()=>{
            monster.style.visibility = 'hidden';
            monster.style.width = '200px';
            monster.style.height = '200px';
            first.appendChild(player);
          },1000);
        }
    },16);
    } else {
      alert('움직일 수 없는 타일입니다!');
    }
  }
});