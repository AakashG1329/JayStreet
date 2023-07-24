function inputDesign(){
   
const labels = document.querySelectorAll('.inputs label')
console.log(labels)
labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})
}