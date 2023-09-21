let myText = document.getElementById('my-text')
let result = document.getElementById('result')
let limit = 60
result.textContent = 0 + "/" + limit

myText.addEventListener('input', () => {
    let textLength = myText.value.length
    result.textContent = textLength + "/" + limit

    if (textLength > limit) {
        myText.style.borderColor = "red"
        result.style.color = "red"
    }else {
        myText.style.borderColor = "#b2b2b2"
        result.style.color = "#b2b2b2"

    }
})