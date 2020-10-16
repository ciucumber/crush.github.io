var total = document.getElementById('total');
var formHidden = document.getElementById('form');
var resulkq = document.getElementById('result');
var page1 = document.getElementById('page_1');
var name1 = document.getElementById('name');
var date = document.getElementById('date');
var year = document.getElementById('year');
var heightTall = document.getElementById('height');
var textContent = document.getElementById('text-content');
var textAge = document.getElementById('text-age');
var textHeight = document.getElementById('text-height');
var profile = [];

function clickhere(){
    profile.push(name1.value);
    profile.push(date.value);
    profile.push(year.value);
    profile.push(height.value);
    var age = 2020 - parseInt(profile[2]);
    formHidden.classList.add('hidden');
    page1.classList.add('show');
    textContent.innerHTML = "Xin chào bạn: " + profile[0];
    textAge.innerHTML = "Tuổi: " + age;
    if(parseInt(profile[3]) < 150){
        textHeight.innerHTML = profile[3] + "cm à! thấp nhỉ:))) nhưng yên tâm mình thích nấm:)))"
    }else if(parseInt(profile[3]) > 170){
        textHeight.innerHTML = profile[3] + "cm cơ à! cao hơn cả mình á. nhưng mà mình cũng thích:)))"
    }else if(150 < parseInt(profile[3]) && parseInt(profile[3]) < 170){
        textHeight.innerHTML = profile[3] + "cm đây! mình thích tầm này nè."
    }
}

var yes = document.getElementById('yes');
var no = document.getElementById('no');

yes.onmouseover = function(){
    
}

no.onmouseover = function(){
    no.innerHTML = "Có"
}

no.onmouseout = function(){
    no.innerHTML = "Không"
}


var girlName = document.getElementById('girl-name');
function no1(){
    resulkq.classList.add('show');
    page1.classList.add('hidden');
    page1.classList.remove('show');
    total.style.backgroundColor = "black";
    girlName.innerHTML = profile[0];

}

function yes1(){
    resulkq.classList.add('show');
    page1.classList.add('hidden');
    page1.classList.remove('show');
    total.style.backgroundColor = "black";
    girlName.innerHTML = profile[0];
}

