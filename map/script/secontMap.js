const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const fourth = document.getElementById('fourth');
const fifth = document.getElementById('fifth');
const sixth = document.getElementById('sixth');

let player = document.createElement('div');
player.style.width = '50px';
player.style.height = '50px';
player.style.border = '1px solid white';
player.style.backgroundColor = 'black'

first.appendChild(player);

let nextStage

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
  if(key === 'ArrowLeft'){
    if(third.children.length === 1){
      third.textContent = '';
      fourth.appendChild(player);  
    } else if (fifth.children.length ===1) {
      fifth.textContent = '';
      third.appendChild(player);
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
      sixth.appendChild(player);
      openWindow();
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
      fifth.appendChild(player);
    } else {
      alert('움직일 수 없는 타일입니다!');
    }
  }
});