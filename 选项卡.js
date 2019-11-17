/**
 * @param node1 导航标签集合
 * @param node2 内容部分集合
 */ 


function tab(node1,node2){
    node1.forEach(function (e,i) {
    e.onmouseover = function () {
        node1.forEach(function (e) {
            e.classList.remove('active');
        })
        this.classList.add('active');
        node2.forEach(function (e) {
            e.classList.remove('selected')
        })
        node2[i].classList.add('selected');
    }
})
}