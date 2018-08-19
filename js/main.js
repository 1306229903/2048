var board = new Array() // 所有格子的驱动数据
var score = 0 // 分数

newgame()

function newgame() {
    //初始化棋盘格
    init()
    //在随机两个格子生成数字
    generateOneNumber()
    generateOneNumber()
}

function init() {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            var gridCell = $("#grid-cell-" + i + "-" + j)
            gridCell.css('top', getPosTop(i, j))
            gridCell.css('left', getPosLeft(i, j))
        }
    }
    for (var i = 0; i < 4; i++) {
        board[i] = new Array();
        for (var j = 0; j < 4; j++) {
            board[i][j] = 0
        }
    }
    updateBoardView()
}

function updateBoardView() {

    $(".number-cell").remove();
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            $("#grid-container").append('<div class="number-cell" id="number-cell-' + i + '-' + j + '"</div>')
            var theNumberCell = $('#number-cell-' + i + '-' + j)

            if (board[i][j] == 0) {
                theNumberCell.css('width', '0px')
                theNumberCell.css('height', '0px')
                theNumberCell.css('top', getPosTop(i, j) + 50)
                theNumberCell.css('left', getPosLeft(i, j) + 50)
            } else {
                theNumberCell.css('width', '100px')
                theNumberCell.css('height', '100px')
                theNumberCell.css('top', getPosTop(i, j))
                theNumberCell.css('left', getPosLeft(i, j))
                theNumberCell.css('background-color', getNumberBackGroundColor(board[i][j]))
                theNumberCell.css('color', getNumberColor(board[i][j]))
                theNumberCell.text(board[i][j])
            }

        }
    }

}

function generateOneNumber() {
    // 判断是否还有空的格子
    if (nospace(board)) {
        return false
    }
    //随机一个位置,生成可用坐标
    var randX = parseInt(Math.floor(Math.random() * 4))
    var randY = parseInt(Math.floor(Math.random() * 4))
    while (true) {
        if (board[randX][randY] === 0) {
            break
        }
        randX = parseInt(Math.floor(Math.random() * 4))
        randY = parseInt(Math.floor(Math.random() * 4))
    }
    //随机一个数字
    var randNumber = Math.random() < 0.5 ? 2 : 4
    //在随机位置显示随机数字
    board[randX][randY] = randNumber
    showNumberWithAnimation(randX, randY, randNumber)
    return true
}

// 响应用户操作
$(document).keydown(function(event){
    switch (event.keyCode){
        case 37:
        if(moveLeft()){
            generateOneNumber()
            isgameover()
        }
        break
        case 38:
        if(moveUp()){
            generateOneNumber()
            isgameover()
        }
        break;
        case 39:
        if(moveRight()){
            generateOneNumber()
            isgameover()
        }
        break
        case 40:
        if(moveDown()){
            generateOneNumber()
            isgameover()
        }
        break
        default:
        break
    }
})