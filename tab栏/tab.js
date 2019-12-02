let box = document.querySelector('.box')
class Tab{
  constructor(options){
    options = options || {};
    this.itemClass = options.itemClass || '.item';
    this.eventType = options.eventType || 'mouseover';
    this.eventTypeNext = options.eventType || 'mouseleave';
    this.itemActiveClass = options.itemActiveClass || 'active';
    this.contentClass = options.contentClass || '.content';
    this.contentShowClass = options.contentShowClass || 'show';
    // 获取元素
    this.items = document.querySelectorAll(this.itemClass);
    this.contetns = document.querySelectorAll(this.contentClass);

    // 必然new了之后要有效果，需要调用addEvent方法实现
    this.addEvent();
  }
  // 封装方法
  // 注册事件
  addEvent(){
    // 注册事件
    this.items.forEach((e,i)=>{ 
      e.addEventListener(this.eventType,(e)=>{
        let target = e.target;
        this.changeItems(target);
        this.changeContent(i);
        this.currentIndex = i;
        console.log(this.currentIndex)       
        clearInterval(this.timer)
      
      })

    })
    box.addEventListener(this.eventTypeNext,(e)=>{
      clearInterval(this.timer);
      this.autoRun()
      
    })
  }

  // 切换分类
  changeItems(current){
    this.items.forEach(e=>{
      e.classList.remove(this.itemActiveClass);
    })
    current.classList.add(this.itemActiveClass);
  }
  // 切换内容
  changeContent(index){
    this.contetns.forEach(e=>{
      e.classList.remove(this.contentShowClass);
    })
    this.contetns[index].classList.add(this.contentShowClass);
  }
}