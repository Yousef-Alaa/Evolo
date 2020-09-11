/*global document, window*/

var
    i = 0,
    
    x = 0,

    lBShow1 = document.getElementById('show-light-box-1'),// LB = Light Box
    
    reqBtn1 = document.getElementsByClassName('req-btn'),
    
    lBHid1 = document.getElementsByClassName('back-btn'),// LB = Light Box

    lBShow2 = document.getElementById('show-light-box-2'),// LB = Light Box
    
    reqBtn2 = document.getElementsByClassName('req-btn-2'),
    
    lBHid2 = document.getElementsByClassName('back-btn-2'),// LB = Light Box
    
    topButton = document.getElementById('top-btn'),
    
    videoDiv = document.getElementById('video'),
    
    videoShow = document.getElementsByClassName('show-video'),
    
    videoHid = document.getElementsByClassName('back-btn-3');


// Top Button & Fixed Nav

window.onscroll = function () {
    'use strict';
    
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
    'use strict';
    
    document.getElementById('light-box-1').style.display = 'block';
};

var lBHidFun = function () {'use strict'; document.getElementById('light-box-1').style.display = "none"; };

while (i < lBHid1.length) {
    lBHid1[i].onclick = lBHidFun;
    
    i = i + 1;
}

reqBtn1[0].onclick = function () {
    'use strict';
    document.getElementById('light-box-1').style.display = 'none';
};

// Light Box 2

lBShow2.onclick = function () {
    'use strict';
    
    document.getElementById('light-box-2').style.display = 'block';
};

var lBHidFun2 = function () {'use strict'; document.getElementById('light-box-2').style.display = "none"; };

while (x < lBHid2.length) {
    lBHid2[x].onclick = lBHidFun2;
    
    x = x + 1;
}

reqBtn2[0].onclick = function () {
    'use strict';
    document.getElementById('light-box-2').style.display = 'none';
};


// Video
videoShow[0].onclick = function () {
    'use strict';
    videoDiv.style.display = "block";
};

videoHid[0].onclick = function () {
    'use strict';
    videoDiv.style.display = "none";
};