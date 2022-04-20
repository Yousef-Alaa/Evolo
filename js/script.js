let animationDiv = document.querySelector('.load-animation'),

    lBShow1 = document.getElementById('show-light-box-1'),// LB = Light Box
    
    reqBtn1 = document.getElementsByClassName('req-btn'),
    
    lBHid1 = document.getElementsByClassName('back-btn'),// LB = Light Box

    lBShow2 = document.getElementById('show-light-box-2'),// LB = Light Box
    
    reqBtn2 = document.getElementsByClassName('req-btn-2'),
    
    lBHid2 = document.getElementsByClassName('back-btn-2'),// LB = Light Box
    
    topButton = document.getElementById('top-btn');


// Loading Animation
window.onload = function () {animationDiv.style.display = 'none';};


// Top Button & Fixed Nav
window.onscroll = function () {
    
    
    if (window.pageYOffset >= 600) {
        topButton.style.bottom = "20px";
    } else {
        topButton.style.bottom = "-40px";
    }
    
    if (window.pageYOffset >= 60) {
        document.getElementsByTagName('nav')[0].classList.add('fixed-nav');
    } else {
        document.getElementsByTagName('nav')[0].classList.remove('fixed-nav');
    }
};


// Light Box 1

lBShow1.onclick = function () {
    document.getElementById('light-box-1').style.display = 'block';
};

let lBHidFun = function () { document.getElementById('light-box-1').style.display = "none"; };

for (let i = 0;i < lBHid1.length;i++) {
    lBHid1[i].onclick = lBHidFun;
}

reqBtn1[0].onclick = function () {
    
    document.getElementById('light-box-1').style.display = 'none';
};

// Light Box 2

lBShow2.onclick = function () {
    document.getElementById('light-box-2').style.display = 'block';
};

let lBHidFun2 = function () { document.getElementById('light-box-2').style.display = "none"; };

for (let x = 0;x < lBHid2.length;x++) {
    lBHid2[x].onclick = lBHidFun2;
}

reqBtn2[0].onclick = function () {
    document.getElementById('light-box-2').style.display = 'none';
};