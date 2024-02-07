const img = document.querySelector('#scroll_img')
const btns = document.querySelectorAll('#titan, #blue, #white, #black')


const images = {
    titan: "./img_or_Icons/titan.jpeg",
    blue: "./img_or_Icons/blue.jpeg",
    white: "./img_or_Icons/white.jpeg",
    black: "./img_or_Icons/black.jpeg",
}

btns.forEach(btn => {
    btn.onclick = () => {
        let color = btn.innerHTML
        img.setAttribute('src', images[color])
    }
})

let find = document.getElementsByClassName("accordion");

let k

for (k = 0; k < find.length; k++) {
  find[k].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

let count = document.querySelector('.span_first #cnt')
let sc_count = document.querySelector('.count')
let xcl = document.querySelector('.Xclass')

count.onclick = () => {
  sc_count.classList.add('is_open')
}

xcl.onclick = () => {
  sc_count.style.display = 'none'
}



// don't touch this part
// let boxes = document.querySelectorAll('.boxes')

// boxes.forEach(box => {
//     box.onmouseenter = () => {
//         box.classList.add('active')
//     }
// })