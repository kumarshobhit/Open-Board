 let pencil = document.querySelector('#pencil')
    let eraser = document.querySelector('#eraser')
    let rect = document.querySelector('#rect')
    let line = document.querySelector('#line')
    let options = document.querySelectorAll('.size-box')
    // let cTool = 'pencil'

    // identify->click->click again   
    pencil.addEventListener("click", () => {
        if (cTool == 'pencil') {
            // second click 
            // options show
            options[0].style.display = 'flex';
        }
        else {
            cTool = 'pencil';
            for (let i = 0; i < options.length; i++) {
                options[i].style.display = 'none'
            }
        }
    })

    eraser.addEventListener("click", () => {
        if (cTool == 'eraser') {
            // second click 
            // options show
            options[1].style.display = 'flex';
        }
        else {
            cTool = 'eraser';
            for (let i = 0; i < options.length; i++) {
                options[i].style.display = 'none'
            }
        }
    })

    rect.addEventListener("click", () => {
        if (cTool == 'rect') {
            // second click 
            // options show
            options[2].style.display = 'flex';
        }
        else {
            cTool = 'rect';
            for (let i = 0; i < options.length; i++) {
                options[i].style.display = 'none'
            }
        }
    })

    line.addEventListener("click", () => {
        if (cTool == 'line') {
            // second click 
            // options show
            options[3].style.display = 'flex';
        }
        else {
            cTool = 'line';
            for (let i = 0; i < options.length; i++) {
                options[i].style.display = 'none'
            }
        }
    })


     // color change
    let redButton = document.querySelector('.red')
    let greenButton = document.querySelector('.green')
    let blueButton = document.querySelector('.blue')

    redButton.addEventListener('click', () => {
        tool.strokeStyle = "lightpink"
    })

    greenButton.addEventListener('click', () => {
        tool.strokeStyle = "green"
    })

    blueButton.addEventListener('click', () => {
        tool.strokeStyle = "lightblue"
    })


// size change logic
// pencil 
// eraser
// rect
// line
let pencilSize = 5;
let eraserSize = 5;
let lineSize = 5;
let rectSize = 5;

let sizeBoxArr=document.querySelectorAll(".size-box")
// currentTarget
sizeBoxArr[0].addEventListener('click',e=>{
    // actual event occur->target
    let elems=["size1","size2","size2","size4"]
    // class jisple click hua
    let allTheClasses=e.target.classList
    let firstClass=allTheClasses[0]
    let test=elems.includes(firstClass)
    if(test) {
        // size wala button click
        if(firstClass=='size1') {
            pencilSize=5
        }
        else if(firstClass=='size2'){
            pencilSize=10
        }
         else if(firstClass=='size3'){
            pencilSize=15
        }
        else pencilSize=20
    }

    tool.lineWidth=pencilSize
})

sizeBoxArr[1].addEventListener('click',e=>{
    // actual event occur->target
    let elems=["size1","size2","size2","size4"]
    // class jisple click hua
    let allTheClasses=e.target.classList
    let firstClass=allTheClasses[0]
    let test=elems.includes(firstClass)
    if(test) {
        // size wala button click
        if(firstClass=='size1') {
            eraserSize=5
        }
        else if(firstClass=='size2'){
            eraserSize=10
        }
         else if(firstClass=='size3'){
            eraserSize=15
        }
        else eraserSize=20
    }

    tool.lineWidth=eraserSize
})

sizeBoxArr[2].addEventListener('click',e=>{
    // actual event occur->target
    let elems=["size1","size2","size2","size4"]
    // class jisple click hua
    let allTheClasses=e.target.classList
    let firstClass=allTheClasses[0]
    let test=elems.includes(firstClass)
    if(test) {
        // size wala button click
        if(firstClass=='size1') {
            rectSize=5
        }
        else if(firstClass=='size2'){
            rectSize=10
        }
         else if(firstClass=='size3'){
            rectSize=15
        }
        else rectSize=20
    }

    tool.lineWidth=rectSize
})

sizeBoxArr[3].addEventListener('click',e=>{
    // actual event occur->target
    let elems=["size1","size2","size2","size4"]
    // class jisple click hua
    let allTheClasses=e.target.classList
    let firstClass=allTheClasses[0]
    let test=elems.includes(firstClass)
    if(test) {
        // size wala button click
        if(firstClass=='size1') {
            lineSize=5
        }
        else if(firstClass=='size2'){
            lineSize=10
        }
         else if(firstClass=='size3'){
            lineSize=15
        }
        else lineSize=20
    }

    tool.lineWidth=lineSize
})