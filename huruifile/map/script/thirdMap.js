const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const fourth = document.getElementById('fourth');
const fifth = document.getElementById('fifth');
const sixth = document.getElementById('sixth');

const monster = third.children[0];

const crown = sixth.children[0];


let player = document.createElement('div');
player.style.width = '50px';
player.style.height = '50px';
player.style.border = '1px solid white';
player.style.backgroundColor = 'black'

first.appendChild(player);

let nextStage;

let percent = 200;

document.addEventListener('keydown', (e)=>{
  const key = e.key
  console.log(key);
  let player = document.createElement('div');
  player.style.width = '50px';
  player.style.height = '50px';
  player.style.border = '1px solid white';
  player.style.backgroundColor = 'black'
  if(key === 'ArrowLeft'){
    if(second.children.length === 1){
      second.textContent = '';
      first.appendChild(player);  
    } else {
      alert('움직일 수 없는 타일입니다!');
    }
  } else if (key === 'ArrowUp') {
    if(fourth.children.length === 1) {
      fourth.textContent = '';
      second.appendChild(player);
    } else if (fifth.children.length === 1) {
      fifth.textContent = '';
      fourth.appendChild(player);
    }  else {
      alert("움직일 수 없는 타일입니다!");
    }
  } else if (key === 'ArrowDown') {
    if(second.children.length === 1) {
      second.textContent = '';
      fourth.appendChild(player);
    } else if (fourth.children.length === 1) {
      fourth.textContent = '';
      fifth.appendChild(player);
    } else if (fifth.children.length === 1) {
      fifth.textContent = '';
      crown.style.visibility = 'visible';
      let sizeUp = setInterval(()=>{
        percent++;
        crown.style.width = percent + 'px';
        crown.style.height = percent + 'px';
          if (percent > 350) {
            clearInterval(sizeUp)
            percent = 200;
            setTimeout(()=>{
              alert('thank you for playing test mode');
            },1000);
          }
        },16);
    } else {
      alert("움직일 수 없는 타일입니다!");
    }
  } else if (key === 'ArrowRight'){
    if(first.children.length === 1){
      first.textContent = '';
      second.appendChild(player);  
    } else if (second.children.length === 1) {
      second.textContent = '';
      monster.style.visibility = 'visible';
      let sizeUp = setInterval(()=>{
        percent++;
        monster.style.width = percent + 'px';
        monster.style.height = percent + 'px';
        if (percent > 300) {
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
    }else {
      alert('움직일 수 없는 타일입니다!');
    }
  }
});