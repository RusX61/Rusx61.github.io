submitButton.onclick = function() {
    let weight = document.getElementById("userWeight").value;
    let height = document.getElementById('userHeight').value;
    let age = document.getElementById('userAge').value;
    let gender = document.querySelector('input[name = "gender"]:checked').value;
    let imt = weight/((height/100)**2);
    
    if (gender == 'male') {
        result = (height - 100)*1.15;;
    } else result = (height - 110)*1.15;

    if(age < 30){
        result=result-((result/100)*11);
    }else if (age > 50){
        result=result+((result/100)*6);
    }

    if(result>weight){
        recomendation = 'Ваш вес меньше нормы,стоит набрать массу.';
    } else recomendation = 'Ваш вес больше нормы,стоит сесть на диету и заняться спортом.'

    alert("Индекс Массы вашего тела = " + imt + "\x0A" + 
    'Ваш нормальный вес: '+ result + 'КГ' + '\x0A' + recomendation);
}

var img = document.querySelectorAll('.click'),
  backPop = document.getElementById('backPop'),
    popUp = document.getElementById('popUp'),
    bigImg= document.getElementById('bigImg');
[].forEach.call(img, function(elem) {
  var src = elem.getAttribute('src');
  elem.onclick = function() { 
    bigImg.setAttribute('src',src);
    backPop.style.display = "block";
  }
});
backPop.onclick = function(elem){
  if(!(elem.target.closest("#popUp"))){
      backPop.style.display = 'none';
     }    
}