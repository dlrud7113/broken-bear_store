const tabList = document.querySelectorAll('.modal-icons li');
const contents = document.querySelectorAll('.modal-content .tab-content');
let activeCont = ''; 

for(var i = 0; i < tabList.length; i++){
  tabList[i].querySelector('.tab-btn').addEventListener('click', function(e){
    e.preventDefault();
    for(var j = 0; j < tabList.length; j++){
      tabList[j].classList.remove('.active01');
      contents[j].style.display = 'none';
    }
    this.parentNode.classList.add('.active01');
    activeCont = this.getAttribute('href');
    document.querySelector(activeCont).style.display = 'block';
  });
}


let openModal = document.querySelector('.question-modal');
let ModalBtn = document.querySelector('.question-btn');
let toggle = document.getElementById('question-btn01');

function ToggleEvent () {
  if (toggle.classList.toggle('active')) {
    openModal.classList.add('fadeIn');
  } else {
    openModal.classList.remove('fadeIn');
  }
};

ModalBtn.addEventListener('click', ToggleEvent);  


let topBtn = document.querySelector('.top-btn');
console.log(topBtn);

topBtn.addEventListener("click", function () {
  window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth"
  })
})




