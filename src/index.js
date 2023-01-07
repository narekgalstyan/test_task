let burgarMenuChild = document.getElementById('burgarMenuChild')
let main = document.getElementById('main')
let search1 = document.getElementById('search1')

function show() {
    burgarMenuChild.style.marginLeft = '310px'
    main.style.opacity = "0.3"
    search1.style.opacity = "0.3"
}

function hide() {
    burgarMenuChild.style.marginLeft = '-310px'
    main.style.opacity = "0.9"
    search1.style.opacity = "0.9"
}