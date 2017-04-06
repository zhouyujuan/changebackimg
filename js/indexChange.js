window.onload = function() {

    if (localStorage.imageUrl) {

        var s = localStorage.imageUrl;
        document.getElementById("changeBody").style.backgroundImage = "url(" + s + ")";
    }

    if (localStorage.wordColor) {

        var colorS =  localStorage.wordColor
        var array = document.getElementsByClassName('wordcolor');

        for (var i = 0; i < array.length; i++) {
            array[i].style.color = colorS;
        }
    }
}

//更换背景点击
function changeback() {

    judgeChangeDisplay("");
}

// 图片的点击更换背景
function clickImage(s) {

    //存储图片的路径
    localStorage.imageUrl = s;
    //这里注意换背景图片的路径的写法，显示在html界面，所以这要的路径是在html中使用的
    document.getElementById("changeBody").style.backgroundImage = "url(" + s + ")";
}

//换字体颜色点击
function changeColor() {
    judgeChangeDisplay("换字体颜色");

}

// 颜色的点击
function changeChooseColor(s) {


    localStorage.wordColor = s;
    var array = document.getElementsByClassName('wordcolor');
    for (var i = 0; i < array.length; i++) {
        array[i].style.color = s;
    }
}

function judgeChangeDisplay(s) {

    if (s != "换字体颜色") {

        if (document.getElementById("changeImage").style.display == '' &&
            document.getElementById("changeColordiv").style.display == '') {

            changeDisplayAndTop('block', '', '100px');



        } else if (document.getElementById("changeImage").style.display == '' &&
            document.getElementById("changeColordiv").style.display == 'block') {

            changeDisplayAndTop('block', '', '100px');

        } else if (document.getElementById("changeImage").style.display == 'block' &&
            document.getElementById("changeColordiv").style.display == '') {

            changeDisplayAndTop('', '', '0');

        }
    } else {

        if (document.getElementById("changeImage").style.display == '' &&
            document.getElementById("changeColordiv").style.display == '') {

            changeDisplayAndTop('', 'block', '100px');

        } else if (document.getElementById("changeImage").style.display == '' &&
            document.getElementById("changeColordiv").style.display == 'block') {

            changeDisplayAndTop('', '', '0');

        } else if (document.getElementById("changeImage").style.display == 'block' &&
            document.getElementById("changeColordiv").style.display == '') {

            changeDisplayAndTop('', 'block', '100px');
        }
    }

}

// 点击显示隐藏的控制
function changeDisplayAndTop(changeImage, changeColor, changeMargin) {

    document.getElementById("changeImage").style.display = changeImage;
    document.getElementById("changeColordiv").style.display = changeColor;
    changeMarginTop(changeMargin);
}

//调整页面主题的位置在出现更换主题的下拉框时

function changeMarginTop(s) {

    var array = document.getElementsByClassName("container");
    array[0].style.marginTop = s;
}
