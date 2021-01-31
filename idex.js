const body = document.body;
const btn = document.querySelectorAll('span');
const menu = document.getElementById('js-line')
const contents = document.getElementById('js-menu')
const li = document.querySelectorAll('li')

//イベント
const clickEvent = ()=>{
  for(let i = 0; i < btn.length; i++){
    btn[i].classList.toggle(`line${i+1}`);
    contents.classList.toggle("contents")
    body.classList.toggle('scroll')
  }
}

menu.addEventListener('click',clickEvent);

for(let i = 0 ; i < li.length ; i++){
  li[i].addEventListener('click',clickEvent);
}


