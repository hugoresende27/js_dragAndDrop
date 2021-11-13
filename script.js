const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.vazio')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for (const x of empties) {
    x.addEventListener('dragover', dragOver)
    x.addEventListener('dragenter', dragEnter)
    x.addEventListener('dragleave', dragLeave)
    x.addEventListener('drop', dragDrop)
}

//https://developer.mozilla.org/en-US/docs/Web/API/Document/dragover_event
function dragStart() {
    console.log('Inicio')
    this.className += ' hold'
    setTimeout ( () => this.className = 'invisible',0)
}
function dragEnd() {
    this.className = 'fill'
    console.log('Fim')
}
function dragOver(e) {
    e.preventDefault()
    console.log('Over')
}
function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
    console.log('Enter')
}
function dragLeave() {
    this.className = 'vazio'
    console.log('Leave')
}
function dragDrop() {
    this.className = 'vazio'
    this.append(fill)
    console.log('Drop')
}
