
//fullpage.js-layout
  //try ~cath구문 예외처리

//요소선택
const docEle = document.documentElement;
const sec = document.querySelectorAll('.sec');
const wh= window.innerHeight;


for(let i=0; i<sec.length; i++)
sec[i].onwheel =(e)=>{

    //기본이벤트 방지
    e.preventDefault()
     
    if(e.deltaY > 0) {
        //마우스휠 내림
        if(docEle.scrollTop > wh* (sec.length -2) +100) return;
        let next = e.currentTarget.nextElementSibling.offsetTop;
        docEle.scrollTop= next;
    } else {
        //마우스휠 올림
        //html의 스크롤양이 wh(창높이)보다 작으면 휠이벤트를 빠져나간다
        if(docEle.scrollTop < wh) return;
        let prev = e.currentTarget.previousElementSibling.offsetTop;
        docEle.scrollTop = prev;
    }
};


