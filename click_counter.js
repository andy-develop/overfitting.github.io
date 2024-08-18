let clickCount = 0;

function handleClick() {
    clickCount++;
    document.getElementById('clickCountDisplay').innerText = '点击次数: ' + clickCount;
}