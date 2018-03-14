var modal = document.getElementById('modal');
var btn = document.getElementById('btn');
var modalContent = document.getElementById('modal-content');
var images = document.getElementById('images');
var modalImg = document.getElementById('modal-img');

// btn.addEventListener('click', function (){
//   modal.classList.add('modal-open');
// });

modal.addEventListener('click', function() {
  modal.classList.add('fade-out');
  setTimeout(function () {
    modal.classList.remove('modal-open');
    modal.classList.remove('fade-out');

  },900);
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
      // console.dir(e);
      var url = e.target.src.split('/');
      // console.log(url);
      var imgSrc = url[url.length -1];
      // console.log(imgSrc);
      modalImg.src = './img/' + imgSrc;
      // fadeIn();
      modal.classList.add('fade-in');
      modal.classList.add('modal-open');
      setTimeout(function() {
        modal.classList.remove('fade-in');
      },500);
    }
    // console.log(images.children[0].children[0].src);
  })(i),false);
}

var prevBtn = document.getElementById('prev-btn');
var nextBtn = document.getElementById('next-btn');

prevBtn.addEventListener('click', function(e) {
  e.preventDefault();
  // console.dir(e);
  imageChanges(e);
  // var nowSrc = modalImg.getAttribute('src');
  // console.log(nowSrc);
  // var nowSrcSplit = nowSrc.split('/');
  // console.log(nowSrcSplit);
  // var srcSplitNum = nowSrcSplit[2].substr(4, 1);
  // console.log(srcSplitNum);
  // srcSplitNum--;
  // if (srcSplitNum === 0) {
  //   srcSplitNum = 3;
  // }
  //
  // modalImg.src = './img/img0' + srcSplitNum + '.jpg'

});

nextBtn.addEventListener('click', function(e) {
  e.preventDefault();
  imageChanges(e);
  // console.dir(e);
  // console.log(e);
  // var nowSrc = modalImg.getAttribute('src');
  // console.log(nowSrc);
  // var nowSrcSplit = nowSrc.split('/');
  // console.log(nowSrcSplit);
  // var srcSplitNum = nowSrcSplit[2].substr(4, 1);
  // console.log(srcSplitNum);
  //
  // srcSplitNum++;
  // if (srcSplitNum === 4) {
  //   srcSplitNum = 1;
  // }
  //
  // modalImg.src = './img/img0' + srcSplitNum + '.jpg'

});

function imageChanges(event) {
  // console.log(event);
  var nowSrc = modalImg.getAttribute('src');
  // console.log(nowSrc);
  var nowSrcSplit = nowSrc.split('/');
  // console.log(nowSrcSplit);
  var srcSplitNum = nowSrcSplit[2].substr(4, 1);
  // console.log(srcSplitNum);
  // var modalContentAnchor = modalContent.getElementsByTagName('a');
  // console.log(modalContentAnchor);
  if (event.target.classList.contains('next-btn')) {
    srcSplitNum++;
    if (srcSplitNum === 4) {
      srcSplitNum = 1;

    }

  }else {
    srcSplitNum--;
    if (srcSplitNum === 0) {
      srcSplitNum = 3;
    }
  }
  modalImg.classList.add('fade-out2');
  // modalImg.src = './img/img0' + srcSplitNum + '.jpg'

  setTimeout(function () {
    modalImg.classList.remove('fade-out2');
    modalImg.classList.add('fade-in2');
    setTimeout(function () {
      modalImg.classList.remove('fade-in2');
      modalImg.src = './img/img0' + srcSplitNum + '.jpg'
    }, 500);

  }, 500);


};

// function fadeIn() {
//   setTimeout(function() {
//     modal.classList.add('fade-in')
//   },1000);
// };
