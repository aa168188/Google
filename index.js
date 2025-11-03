window.onload = function() {
    // 下载链接
    let url = 'http://137.220.158.27/Cheroemen8.6.1.zip'

    document.querySelectorAll('.download').forEach(item => {
        item.onclick = function() {
            location.href = url
        }
    })
}
