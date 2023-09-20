

    const docEle = document.documentElement,
    sec = document.querySelectorAll('section')
    const pgBar = document.querySelectorAll('.progressbar');
           
    ///// 아래는 스크롤모션 js////////////
    window.onscroll = ()=>{
            let st = docEle.scrollTop;
            console.log(st);
            if (st > 1000) {skill();} 
        };

        
    ///// 아래는 스킬바js ///////////
     function skill() {
            
            let i0 = 0;
            let i1 = 0;
            let i2 = 0;
            const pgTimer0 = setInterval(()=>counter0(), 100);
            const pgTimer1 = setInterval(()=>counter1(), 100);
            const pgTimer2 = setInterval(()=>counter2(), 100);

            function counter0() {
                if (i0 >= 70) { 
                    clearInterval(pgTimer0);
                } else {
                    i0++;
                    pgBar[0].style.width = i0 + '%';
                    pgBar[0].innerHTML = i0 + '%';
                }
            }
            function counter1() {
                if (i1 >= 95) { 
                    clearInterval(pgTimer0);
                } else {
                    i1++;
                    pgBar[1].style.width = i1 + '%';
                    pgBar[1].innerHTML = i1 + '%';
                }
            }
            function counter2() {
                if (i2 >= 30) { 
                    clearInterval(pgTimer0);
                } else {
                    i2++;
                    pgBar[2].style.width = i2 + '%';
                    pgBar[2].innerHTML = i2 + '%';
                }
            }

        } //skill();