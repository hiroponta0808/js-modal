var modalBtn = document.getElementById('modal-btn');
var modal = document.getElementById('modal');
var closeBtn = document.getElementById('close-btn');
var modalContent = document.getElementById('modal-content');

modalBtn.addEventListener('click', function() {
  modal.classList.add('modal-open');
  creteModalContent();
})

closeBtn.addEventListener('click', function() {
  modal.classList.remove('modal-open');
  removeModalContent();

})

modal.addEventListener('click', function() {
  modal.classList.remove('modal-open');
  removeModalContent();
})

modalContent.addEventListener('click', function(e) {
  // console.log(e);
  // console.dir(e);
  //イベントの伝搬を止める
  e.stopPropagation();
})

function creteModalContent() {
  var contentTtl = document.createElement('h2')
  contentTtl.innerHTML = 'modal ウィンドウの作成';
  var contentTxt = document.createElement('p')
  contentTxt.innerHTML = 'JSでmodalウィンドウをつくってみました。';
  modalContent.appendChild(contentTtl);
  modalContent.appendChild(contentTxt);
};

function removeModalContent() {
  console.dir(modalContent);
  console.dir(modalContent.children);
  modalContent.removeChild(modalContent.children[2]);
  modalContent.removeChild(modalContent.children[1]);

};
