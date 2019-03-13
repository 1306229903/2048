documentWidth = window.screen.availWidth; // 获取屏幕宽度
gridContainerWidth = 0.92 * documentWidth; // 分别计算游戏界面结构每一块需要的宽度
cellSideLength = 0.18 * documentWidth;
cellSpace = 0.04 * documentWidth;

var onceTime = 0

var animationDiv = document.createElement('div') // 分数动画效果
var animationDiv2 = document.createElement('div')
animationDiv.id = 'score-animation'
animationDiv2.id = 'encourage-animation'

function getPosTop(i, j) {
    return cellSpace + i * (cellSpace + cellSideLength);
}

function getPosLeft(i, j) {
    return cellSpace + j * (cellSpace + cellSideLength);
}

function getNumberBackgroundColor(number) {
    switch (number) {
        case 2:
            return "#eee4da";
        case 4:
            return "#ede0c8";
        case 8:
            return "#f2b179";
        case 16:
            return "#f59563";
        case 32:
            return "#f67c5f";
        case 64:
            return "#f65e3b";
        case 128:
            return "#edcf72";
        case 256:
            return "#edcc61";
        case 512:
            return "#9c0";
        case 1024:
            return "#33b5e5";
        case 2048:
            return "#09c";
        case 4096:
            return "#a6c";
        case 8192:
            return "#93c";
    }

    return "black";
}


function getNumberText( number ){
    switch( number ){
        case 2:return "小白";
        case 4:return "实习生";
        case 8:return "程序猿";
        case 16:return "攻城狮";
        case 32:return "架构狮";
        case 64:return "技术经理";
        case 128:return "高级经理";
        case 256:return "技术总监";
        case 512:return "副总裁";
        case 1024:return "CTO";
        case 2048:return "总裁";
        case 4096:return "顶尖大牛";
        case 8192:return "神";
    }

    return "black";
}

function getNumberColor(number) {
    if (number <= 4)
        return "#776e65";

    return "white";
}

function nospace(board) {

    for (var i = 0; i < 4; i++)
        for (var j = 0; j < 4; j++)
            if (board[i][j] == 0)
                return false;

    return true;
}

function canMoveLeft(board) {

    // 判断左边是否没有数字
    // 判断左边数字是否和自己相等
    for (var i = 0; i < 4; i++)
        for (var j = 1; j < 4; j++)
            if (board[i][j] != 0)
                if (board[i][j - 1] == 0 || board[i][j - 1] == board[i][j])
                    return true;

    return false;
}

function canMoveRight(board) {

    for (var i = 0; i < 4; i++)
        for (var j = 2; j >= 0; j--)
            if (board[i][j] != 0)
                if (board[i][j + 1] == 0 || board[i][j + 1] == board[i][j])
                    return true;

    return false;
}

function canMoveUp(board) {

    for (var j = 0; j < 4; j++)
        for (var i = 1; i < 4; i++)
            if (board[i][j] != 0)
                if (board[i - 1][j] == 0 || board[i - 1][j] == board[i][j])
                    return true;

    return false;
}

function canMoveDown(board) {

    for (var j = 0; j < 4; j++)
        for (var i = 2; i >= 0; i--)
            if (board[i][j] != 0)
                if (board[i + 1][j] == 0 || board[i + 1][j] == board[i][j])
                    return true;

    return false;
}
// 判断水平方向上是否有障碍物
function noBlockHorizontal(row, col1, col2, board) {
    for (var i = col1 + 1; i < col2; i++)
        if (board[row][i] != 0)
            return false;
    return true;
}
// 判断垂直方向上是否有障碍物
function noBlockVertical(col, row1, row2, board) {
    for (var i = row1 + 1; i < row2; i++)
        if (board[i][col] != 0)
            return false;
    return true;
}

function nomove(board) {
    if (canMoveLeft(board) ||
        canMoveRight(board) ||
        canMoveUp(board) ||
        canMoveDown(board))
        return false;

    return true;
}

// 更新视图分数
function updateScore(score) {

    // 改变最高纪录
    if (sessionStorage.getItem('key') < score) {
        sessionStorage.setItem('key', score)
        $('#record').text(sessionStorage.getItem('key'))
    }

    $('#score').text(score);
    $('#game-over-scores').text(score);
    $('#game-over-record').text(sessionStorage.getItem('key'));
}

// 分数鼓励语
function getEncouragement(number) {

    if (number > 100 && onceTime===0) {
        onceTime++
        return "good!";
    } else if (number > 1000 && onceTime === 1) {
        onceTime++
        return "great!";
    } else if (number > 5000 && onceTime === 2) {
        onceTime++
        return "excellent!";
    } else if (number > 10000 && onceTime === 3) {
        onceTime++
        return "unbelievable!";
    } else {
        return '';
    }
}

function addScoreAnimation(tempValues, scores) {

    animationDiv.innerText = '+' + tempValues
    document.getElementById('score').appendChild(animationDiv)

    var encourageValue=getEncouragement(scores)
    if (encourageValue) {
        animationDiv2.innerText = encourageValue
        document.body.appendChild(animationDiv2)
    }
}