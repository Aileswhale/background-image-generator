// const background = document.querySelector('.image')
// const prevBtn = document.querySelector('#prevbtn')
// const nextBtn = document.querySelector('#nextbtn')

// let count = 0;

// const next = ()=>{
// if (count === 9) {
//     count = -1
// }
//  count ++;
//  background.style.backgroundImage = `url(img/bgd-${count}.jpg)`;

//  background.animate([{opacity: '0.2'},{opacity:'1.0'}], {duration: 1000, fill: 'forwards'})
// }

// nextBtn.addEventListener('click', next)

// const prev = ()=>{
// if (count === 0) {
//     count = 10
// }
//  count --;
//  background.style.backgroundImage = `url(img/bgd-${count}.jpg)`;
//  background.animate([{opacity: '0.2'},{opacity:'1.0'}], {duration: 1000, fill: 'forwards'})
// }

// prevBtn.addEventListener('click', prev)

//ANOTHER METHOD (ARRAR)

const background = document.querySelector('.image')
const prevBtn = document.querySelector('#prevbtn')
const nextBtn = document.querySelector('#nextbtn')
let image = [
    {
        name: 'url(img/bgd-0.jpg)',
    },
    {
        name: 'url(img/bgd-1.jpg)',
    },
    {
        name: 'url(img/bgd-2.jpg)',
    },
    {
        name: 'url(img/bgd-3.jpg)',
    },
    {
        name: 'url(img/bgd-4.jpg)',
    },
    {
        name: 'url(img/bgd-5.jpg)',
    },
    {
        name: 'url(img/bgd-6.jpg)',
    },
    {
        name: 'url(img/bgd-7.jpg)',
    },
    {
        name: 'url(img/bgd-8.jpg)',
    },
    {
        name: 'url(img/bgd-9.jpg)',
    }
]

const next = ()=>{
let random = Math.floor(Math.random()*image.length)
background.style.backgroundImage = image[random].name

 background.animate([{opacity: '0.2'},{opacity:'1.0'}], {duration: 1000, fill: 'forwards'})
}

nextBtn.addEventListener('click', next)

const prev = ()=>{
let random = Math.floor(Math.random()*image.length)
background.style.backgroundImage = image[random].name

 background.animate([{opacity: '0.2'},{opacity:'1.0'}], {duration: 1000, fill: 'forwards'})
}

prevBtn.addEventListener('click', prev)





