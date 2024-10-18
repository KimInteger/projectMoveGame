const root = document.getElementById('root');

root.style.width = '100vw';
root.style.height = '100vh';
root.style.display = 'flex';
root.style.flexDirection = 'column';
root.style.alignItems = 'center';
root.style.justifyContent = 'cetner';

const start = document.getElementById('start');

const exit = document.getElementById('exit');

const test = document.getElementById('test');

let windowOpen;

function openWindow(){
  windowOpen = window.open("./map/firstMap.html");
}

function closeOpenWindow(){
  windowOpen.close();
} 

start.addEventListener('click', openWindow);

exit.addEventListener('click', closeOpenWindow);