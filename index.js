let div = document.getElementById('demo')
let input = code.kal
let innerHTML = ''

let keywords = ["let", "function", "const"];
let patternCreator = (list) => new RegExp("\\b(" + list.join("|") + ")\\b", "g");

code.addEventListener('submit', ev => ev.preventDefault())

let keys = (val) => `<span class='keys'>${val}</span>`

let handler = {
    set: (target, prop, val) => {
        console.log(target[prop])
    }
}
let inputProxy = new Proxy(input, handler)


input.addEventListener('keydown', ev => {
    if (ev.key == 'Enter') {
        ev.target.value += '*'
        inputProxy.value = '*'
    }
})

let keywordsPattern = patternCreator(keywords)


input.addEventListener('input', ev => {

    innerHTML = ev.target.value.replace(keywordsPattern, function (match) {
        return keys(match)
    });

    div.innerHTML = innerHTML
})

