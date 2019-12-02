function ajax(obj){
    let url = obj.url;
    let type = obj.type.toLowerCase();
    let success = obj.success;
    let data = obj.data || {};
    let xhr = new XMLHttpRequest();
    let arr = [];
    for(let key in data){
        arr.push(`${key}=${data[key]}`);
    }
    data = arr.join('&')
    console.log(data)
    if(type == 'get'){
      url = url + '?' +data;
    }{
        xhr.open(type,url);
    }
    if(type == 'post'){
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        xhr.send(data)
    }else{
        xhr.send()
    }
    xhr.onreadystatechange = function(){
        let reponse = xhr.responseText;
        if(reponse.indexOf('json') !== -1){
            reponse = JSON.parse(reponse);
        }
        if(xhr.readyState === 4 && xhr.status === 200){
            success && success(reponse)
        }
    }

}