var kits = {};
// 随机整数
kits.randomInt = function(m,n){
    return  Math.floor(Math.random()*(n-m+1)+m)
};
// rgb的随机颜色
kits.randomColor = function(){
    var r = kits.randomInt(0,255);
    var g = kits.randomInt(0,255);
    var b = kits.randomInt(0,255);
    return color = 'rgb('+r+','+g+','+b+')'
}
//  随机的一个十进制数转十六进制数
// kits.sixteenNum = function(m,n){
//     var num = kits.randomInt(m,n);
//     console.log(num);
//     var gewei = (num % 16).toString();
//     console.log(gewei);
//     switch(gewei){
//         case '10' :
//             gewei = 'A' ;
//             break;
//         case '11':
//             gewei = 'B';
//             break;
//         case '12':
//             gewei = 'C';
//             break;
//         case '13':
//             gewei = 'D';
//             break;
//         case '14':
//             gewei = 'E';
//             break;
//         case '15': 
//             gewei = 'F';
//             break;
//     }
//     var Num = Number(Math.floor(num / 16)   + gewei);
//     return Num;
// }





// 随机的十六进制颜色
// 方法1
// kits.sixteenColor = function(){
//     var arr = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
//     var a = Math.floor(Math.random()*arr.length);
//     var b = Math.floor(Math.random()*arr.length);
//     var c = Math.floor(Math.random()*arr.length);
//     var d = Math.floor(Math.random()*arr.length);
//     var e = Math.floor(Math.random()*arr.length);
//     var f = Math.floor(Math.random()*arr.length);
//     var color ="#" + arr[a]+arr[b]+arr[c]+arr[d]+arr[e]+arr[f];
//     return color;
// }
// 方法2
kits.sixteenColor = function(){
    var arr =['#'];
    for(let i = 0;i<6;i++){
       arr.push( Math.floor(Math.random()*16).toString(16));
    }
    var color = arr.join('');
    console.log(color);
    return color;
}
kits.sixteenColor();