var modal = document.getElementById('modal');
console.dir(modal);
var btn = document.getElementById('btn');
var modalContent = document.getElementById('modal-content');


btn.addEventListener('click', function (){
  modal.classList.add('modal-open');
});

modal.addEventListener('click', function() {
  modal.classList.remove('modal-open');
  // modal.stopPrapagation(e);
});

modalContent.addEventListener('click', function(e) {
  e.stopPropagation();
});
