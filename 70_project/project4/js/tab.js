
        // 탭버튼의 on
        const tabBtn =document.querySelectorAll('#tabs li');
        // 컨텐츠의 on
        const tabCont =document.querySelectorAll('#tabs div')

        for(let i=0; i<tabBtn.length; i++){
            //클릭이벤트로 4가지중에 1가지만 
            tabBtn[i].onclick =(e)=>{
              // a태그 땜에 올라가는걸 방지.
               e.preventDefault();

              //tabs div의 on클래스를 모두제거(for문 4번전부 다실행)
              for(let j=0; j<tabBtn.length; j++){
                tabCont[j].classList.remove('on');
              }
              //tabs div의 on클래스를 버튼 누를 것만 추가
              tabCont[i].classList.add('on');
            }
            
        };
