// 生成随机数动画
function showNumberWithAnimation(i, j, randNumber) {

    var numberCell = $('#number-cell-' + i + "-" + j);

    numberCell.css('background-color', getNumberBackgroundColor(randNumber));
    numberCell.css('color', getNumberColor(randNumber));
    numberCell.text(randNumber);

    numberCell.addClass('new-number-cell')
    numberCell.animate({
        width: cellSideLength,
        height: cellSideLength,
        top: getPosTop(i, j),
        left: getPosLeft(i, j),
    }, 100);
}
// 生成移动动画
function showMoveAnimation(fromx, fromy, tox, toy) {

    var numberCell = $('#number-cell-' + fromx + '-' + fromy);
    numberCell.animate({
        top: getPosTop(tox, toy),
        left: getPosLeft(tox, toy)
    }, 200);
}