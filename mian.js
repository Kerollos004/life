//================>add class list
let links = document.querySelectorAll(".link")
links.forEach(link => {
    link.addEventListener("click", changLinks)
    link.addEventListener("click", untoggle)
})
function changLinks() {

    links.forEach(link => {
        link.classList.remove('actlink')
        this.classList.add("actlink")
    })
}
function untoggle() {
    menu.classList.remove("actmenu")
}
//================>toggle menu
let menu = document.querySelector(".menu")
let bar = document.querySelector(".menu-bar")

bar.onclick = () => {
    menu.classList.toggle("actmenu")
}
//====================>add class list
let balls = document.querySelectorAll(".ball")
balls.forEach(ball => {
    ball.addEventListener("click", changBall)
    ball.addEventListener("click", imgs)
})
function changBall() {
    balls.forEach(ball => {
        ball.classList.remove('actli')
        this.classList.add("actli")
    })
} 
//*=============================>change home bg
let home = document.querySelector(".home")
function imgs(url) {
    home.style.background = url
    home.style.backgroundRepeat = "no-repeat"
    home.style.backgroundSize = "cover"
    home.style.backgroundPosition = "center"
}
//=============================> scorll header , up 
let header = document.querySelector("header")
let up = document.querySelector(".up")
window.onscroll = () => {
    if (window.scrollY > 50) {
        header.classList.add("scroll-header")
        up.classList.add("actup")
    }
    else {
        header.classList.remove("scroll-header")
        up.classList.remove("actup")
    }
}
//==============================>change src
let clickImgs = document.querySelectorAll(".owner img")
let mainImg = document.querySelector(".about-img img")
clickImgs.forEach(img => {
    img.addEventListener("click", () => {
        mainImg.src = img.src
    })
})
//==============================>change and filter
let proLinks = document.querySelectorAll(".prolink")
let products = document.querySelectorAll(".product")
proLinks.forEach(link => {
    link.addEventListener("click", changProLinks)
    link.addEventListener("click", filter)
})
function changProLinks() {
    proLinks.forEach(link => {
        link.classList.remove('actprolink')
        this.classList.add('actprolink')
    })
}
function filter() {
    products.forEach(product => {
        product.classList.add("hide")
        document.querySelectorAll(this.dataset.filter).forEach(pro => {
            pro.classList.remove("hide")
        })
    })
}
//======================================>clear inputs
let inps = document.querySelectorAll('.input')
let submitLinks = document.querySelectorAll(".submit")
submitLinks.forEach(link => {
    link.addEventListener('click', () => {
        inps.forEach(inp => {
            inp.value = ""
        })
    })
})
//================================> setting box
let icon = document.querySelector(".icon")
let setting = document.querySelector(".setting")
let texts = document.querySelectorAll("h3")
let actsetlinks = document.querySelectorAll(".actsetlinks")
icon.onclick = () => {
    setting.classList.toggle("actsetting")
}
function fts(font) {
    texts.forEach((text) => {
        text.style.fontSize = font
    })
}
function bgs(color) {
    texts.forEach((text) => {
        text.style.color = color
    })
}
//=============================>shifting
let forms = document.querySelectorAll(".form")
let btns = document.querySelectorAll(".btn")
btns.forEach(btn => {
    btn.addEventListener("click" , shift)
})
function shift() {
    forms.forEach(form => {
        form.classList.remove("active")
        document.querySelectorAll(this.dataset.shift).forEach(form => {
            form.classList.add("active")
        })
    })
}
//===================================>up
up.onclick = () => {
    window.scrollTo(
        top = 0, 
        behaviour = "smooth"
    )
}