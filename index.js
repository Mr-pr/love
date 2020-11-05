var arr = ['我承认异地恋比其他的要难很多', '所以熬过异地恋 就是一辈子💕', '我相信总有一天', '可以过上一翻身就能偷亲你的日子😙']
var leftBtn = document.getElementById('leftButton');
var rightBtn = document.getElementById('rightButton');
var hidWord = document.getElementById('hidWord');
var btn = document.getElementById('btn');
var falseImg = document.getElementById('falseImg');
var cha = document.getElementById('cha');


leftBtn.onclick = function () {
    rightBtn.style.display = 'none'
    leftBtn.style.display = 'none'
    var liImg = document.createElement('img')
    liImg.className = 'liImage'
    liImg.src = './img/true.jpg'
    liImg.style.width = '300px'

    btn.appendChild(liImg)

    setTimeout(() => {
        location.href = './location.html'
    }, 2000);
}
var i = 0
rightBtn.onclick = function () {

    if (i < 4) {
        var liText = arr[i]
        var li = document.createElement('li')
        li.innerText = liText
        li.className = 'liText'
        li.style.fontSize = '25px'
        li.style.marginTop = '10px'
        hidWord.appendChild(li)
    } else if (i >= 4) {
        rightBtn.style.display = 'none'
        leftBtn.style.display = 'none'
        falseImg.style.display = 'block'
        cha.style.display = 'block'


    }
    i++
}
falseImg.onclick = function () {
    rightBtn.style.display = 'block'
    leftBtn.style.display = 'block'
    falseImg.style.display = 'none'
    cha.style.display = 'none'

}
cha.onclick = function () {
    rightBtn.style.display = 'block'
    leftBtn.style.display = 'block'
    falseImg.style.display = 'none'
    cha.style.display = 'none'
}