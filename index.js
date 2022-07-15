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

function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();