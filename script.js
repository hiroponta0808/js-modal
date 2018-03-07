var modal = document.getElementById('modal');
var btn = document.getElementById('btn');
var modalContent = document.getElementById('modal-content');
var images = document.getElementById('images');
var modalImg = document.getElementById('modal-img');

// btn.addEventListener('click', function (){
//   modal.classList.add('modal-open');
// });

modal.addEventListener('click', function() {
  modal.classList.remove('modal-open');
  // modal.stopPrapagation(e);
});

modalContent.addEventListener('click', function(e) {
  e.stopPropagation();
});


// for (var i = 0; i < images.children.length; i++) {
//   images.children[i].children[0].addEventListener('click',
//   (function(index) {
//     console.log(images.children[0].children[0].src);
//     var url = images.children[index].children[0].src.split('/');
//
//
//     modal.classList.add('modal-open');
//   })(i));
// };
for (var i = 0; i < images.children.length; i++) {
  images.children[i].addEventListener('click',
  (function(index) {
    return function(e) {
      // var url = images.children[index].children[0].src.split('/');
      console.dir(e);
      var url = e.target.src.split('/');
      // console.log(url);
      var imgSrc = url[url.length -1];
      // console.log(imgSrc);
      modalImg.src = './img/' + imgSrc;
      modal.classList.add('modal-open');
    }
    // console.log(images.children[0].children[0].src);
  })(i),false);
}
