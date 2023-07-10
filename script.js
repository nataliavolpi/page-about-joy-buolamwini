//Seção do menu
//deixar o header aparecer apenas quando scroll up
let mainPosition = window.scrollY;
let header = document.querySelector('#header');

window.addEventListener('scroll', function() {
  let currentPosition = window.scrollY
  if (mainPosition >= currentPosition) {
    header.style.top = "0px"
    header.style.zIndex = "10" //garantir que nenhum elemento fique por cima do cabeçalho
  } else {
    header.style.top = "-80px"
  }
  mainPosition = currentPosition
})

function menuShow(){ //função para alterar o menu pra hamburguinho
  let menuMobile = document.querySelector('.mobile-menu')
  if (menuMobile.classList.contains('open')){
    menuMobile.classList.remove('open')
    document.querySelector('.icon-burguer').src = "assets/icons/menu2.svg";
  } else {
    menuMobile.classList.add('open')
    document.querySelector('.icon-burguer').src = "assets/icons/exit.svg";
  }
}

//Seção dos vídeos
const player = document.querySelectorAll('.slider');
const btnPrev = document.querySelector('#prev-btn');
const btnNext = document.querySelector('#next-btn');

let currentPlayer = 0;

//função pra esconder o player, removendo a classe Show
function hidePlayer(){
  player.forEach(item => item.classList.remove('show'))
}

//função de mostrar o player q corresp ao index do array, add a classe Show
function showPlayer(){
  player[currentPlayer].classList.add('show')
}

//função de próximo ou avançar
function nextPlayer() {
  hidePlayer() //tirar o show de todos os videos e add a classe apenas no video que corresponde ao index
  if(currentPlayer === player.length-1){
    currentPlayer = 0 //se for o último vid volta pro primeiro
  } else {
    currentPlayer++ //se não for o ultimo vid, então seleciona o prox
  }
  showPlayer()
}

//função voltar
function prevPlayer() {
  hidePlayer()
  if(currentPlayer === 0){
    currentPlayer = player.length -1
  } else {
    currentPlayer--
  }
  showPlayer()
}

btnNext.addEventListener('click', nextPlayer)
btnPrev.addEventListener('click', prevPlayer)

//Alterar dark ligth mode
let icon = document.querySelector('#mode-icon')

function theme(){
  document.body.classList.toggle("dark-theme")

  if(document.body.classList.contains("dark-theme")){
    icon.src = "assets/icons/sun.svg"
  } else {
    icon.src = "assets/icons/moon.svg"
  }
}

icon.addEventListener('click', theme)