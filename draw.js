 let boardTop = canvasBoard.getBoundingClientRect().top
    let boardLeft = canvasBoard.getBoundingClientRect().left
    let iX, iY, fX, fY
    let drawingMode = false

    body.addEventListener("mousedown", function (e) {
        // console.log(e)
        iX = e.clientX
        iY = e.clientY - boardTop
        if (cTool == "pencil") {
            drawingMode = true;
            tool.beginPath();
            tool.moveTo(iX, iY);
        }
    })

    body.addEventListener("mouseup", function (e) {

        if (cTool == "pencil") {
            drawingMode = false
        }

        else if (cTool == "rect" || cTool == "line") {
            fX = e.clientX
            fY = e.clientY
            let width = fX - iX
            let height = fY - iY
            if (cTool == 'rect') {
                tool.strokeRect(iX, iY, width, height)
            }
            else if (cTool == 'line') {
                tool.beginPath()
                tool.moveTo(iX, iY)
                tool.lineTo(fX, fY)
                tool.stroke()
                console.log("line tool")
            }
        }

    })

    body.addEventListener("mousemove", function (e) {
        if (drawingMode == false) return
        fX = e.clientX
        fY = e.clientY - boardTop
        tool.lineTo(fX, fY)
        tool.stroke()
        iX = fX
        iY = fY
    })