// 섹션4: 비디오 플레이어

const vidBtn = document.querySelector('.vid .btn'),
    vidBtnSpan = vidBtn.querySelector('span'),
    vidWrap = document.querySelector('.vid'),
    vid = vidWrap.querySelector('video');
let vidState = 0;

//  비디오 영역 위에 마우스를 올리면
vidWrap.onmouseenter = () => {
    // play 버튼(삼각형)이 보인다.
    vidBtn.style.display = 'block';
};

// 비디오 영역 밖으로 벗어나면
vidWrap.onmouseleave = () => {
    // play 버튼을 숨긴다
    vidBtn.style.display = 'none';
};


// paly / pasuse 버튼을 클릭하면
vidBtn.onclick = () => {
    if (vidState === 0) {
        // 비디오가 플레이 된다
        vid.play();
        vidState = 1;
    } else {
        // 비디오가 일시 정지된다
        vid.pause();
        vidState = 0;
    }
    // toggle은 add와 remove를 번갈아 적용시킨다.
    vidBtnSpan.classList.toggle('on');

    // 비디오 플레이 버튼의 모양이 일시 정지 버튼으로 바뀐다.
    // vidBtnSpan.classList.remove('on');

    // 버튼 모양이 삼각형으로 바뀐다.
    // vidBtnSpan.classList.add('on');
};

        