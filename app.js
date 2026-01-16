//Color Generator
let text = document.getElementById("text")
let rgbCode = ""
function colorSwitch(btn) {
    btn.nextElementSibling.innerHTML = '<i class="fa-regular fa-copy"></i>'
    let g = Math.floor(Math.random() * 255)
    let r = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    rgbCode = `rgb(${r}, ${g}, ${b})`
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    text.innerText = `Rgb code of the color is : rgb(${r}, ${g}, ${b})`
}
function colorCode(btn) {
    btn.innerHTML = '<i class="fa-solid fa-check"></i>'
    navigator.clipboard.writeText(rgbCode)
}
