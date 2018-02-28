var modalBtn = document.getElementById('modal-btn');
var modal = document.getElementById('modal');
var closeBtn = document.getElementById('close-btn');
var modalContent = document.getElementById('modal-content');

// modalBtn.addEventListener('click', function() {
//   modal.classList.add('modal-open');
//   creteModalContent();
// })
//
// closeBtn.addEventListener('click', function() {
//   modal.classList.remove('modal-open');
//   // removeModalContent();

// })
//
modal.addEventListener('click', function() {
  modal.classList.remove('modal-open');
  // removeModalContent();
})
//
modalContent.addEventListener('click', function(e) {
  // console.log(e);
  // console.dir(e);
  //イベントの伝搬を止める
  e.stopPropagation();
})

// function creteModalContent() {
//   var contentTtl = document.createElement('h2')
//   contentTtl.innerHTML = 'modal ウィンドウの作成';
//   var contentTxt = document.createElement('p')
//   contentTxt.innerHTML = 'JSでmodalウィンドウをつくってみました。';
//   modalContent.appendChild(contentTtl);
//   modalContent.appendChild(contentTxt);
// };
//
// function removeModalContent() {
//   console.dir(modalContent);
//   console.dir(modalContent.children);
//   modalContent.removeChild(modalContent.children[2]);
//   modalContent.removeChild(modalContent.children[1]);
//
// };


var images = [
  {
    url: './img/img01.jpg'
  },
  {
    url: './img/img02.jpg'
  },
  {
    url: './img/img03.jpg'
  },
];

var imageLists = document.getElementById('images');
var modalImg = document.getElementById('modal-img');

// for (var i = 0; i < imageLists.children.length; i++) {
//   imageLists.children[i].addEventListener('click',
//   (function(index) {
//     return function() {
//       modalImg.src = images[index].url;
//       modal.classList.add('modal-open')
//     }
//   })(i));
// }

// for (var i = 0; i < imageLists.children.length; i++) {
//   imageLists.children[i].addEventListener('click',function() {
//     console.log(i);
//       modalImg.src = images[i].url;
//       modal.classList.add('modal-open')
//   });
// }

for (var i = 0; i < imageLists.children.length; i++) {
  imageLists.children[i].addEventListener('click',
  (function(index) {
    return function() {
      var url = imageLists.children[index].children[0].src;
      console.log(url);
      var imageSrc = url.split('/');
      console.log(imageSrc);
      var imageSrcLastElem = imageSrc[imageSrc.length - 1];
      console.log(imageSrc[imageSrc.length - 1]);
      modalImg.src = './img/' + imageSrcLastElem;
      modal.classList.add('modal-open')
    }
  })(i));
}

for (var i = images.length -1; i < array.length; i++) {
  array[i]
}
