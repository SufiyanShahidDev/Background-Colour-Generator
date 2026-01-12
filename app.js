//Color Generator
let para = document.getElementById("para")
let rgb = ""
function bgColor(btn) {
    btn.nextElementSibling.innerHTML = '<i class="fa-regular fa-copy"></i>'
    let r = Math.floor(Math.random() * 257)
    let g = Math.floor(Math.random() * 257)
    let b = Math.floor(Math.random() * 257)
    rgb = `rgb(${r}, ${g}, ${b})`
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    para.innerText = `Rgb code of the color is : rgb(${r}, ${g}, ${b})`
}
function copyRgbCode(btn) {
    btn.innerHTML = '<i class="fa-solid fa-check"></i>'
    navigator.clipboard.writeText(rgb)

}
