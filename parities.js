function RMB(name) {
    this.name = name;
    this.waibi = [];
    this.init();
    this.bindEvent();
}
RMB.prototype.init = function () {
    let p = document.createElement('p');
    let inp = document.createElement('input');
    document.body.appendChild(p);
    p.innerHTML = this.name;
    p.appendChild(inp);
    this.inp = inp; 
}
RMB.prototype.bindEvent = function(){
    var self = this;
    this.inp.onkeyup = function () {
        self.txt = self.inp.value;
        for (let i = 0; i < self.waibi.length; i++) {
            self.waibi[i].txt = self.txt;
            self.waibi[i].listen();
        }
    }
}
RMB.prototype.regist = function(obj){
    this.waibi.push(obj);
}
function WAIBI(name,huilv) {
    this.name = name;
    this.huilv = huilv;
    rmb.regist(this);
    this.init();
}

WAIBI.prototype.init = function(){
    let p = document.createElement('p');
    let inp = document.createElement('input');
    inp.disabled = 'disabled'
    document.body.appendChild(p);
    p.innerHTML = this.name;
    p.appendChild(inp)
    this.inp = inp;     
}
WAIBI.prototype.listen = function(){
   this.inp.value = this.txt * this.huilv;
}
var rmb = new RMB('人民币');
var riyuan = new WAIBI('日元',5);
var meiyuan = new WAIBI('美元',0.2)
var ouyuan = new WAIBI('欧元',0.15)
var taibi  = new WAIBI('台币',1.2)