const content = document.getElementById("content");
const speed = 12

var pageIndex = 1;
var currentLeft = 0;

function move(right) {
  if (right){
    if (pageIndex < 10){
      pageIndex++
    }
  } else {
    if (pageIndex > 1){
      pageIndex--
    }
  }
}

setInterval(() => {
  let leftPercent = (-(pageIndex - 1) * 100)
  currentLeft += (leftPercent - currentLeft) / speed
  content.style.left = currentLeft + "%"
  content.style.right = currentLeft + 1000 + "%"
}, 10);