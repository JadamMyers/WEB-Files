const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let prevday;


for(i=0;i<days.length;i++){
  document.getElementsByClassName("day")[i].innerHTML = "<h3>" + days[i] + "</h3>";
  document.getElementsByClassName("day")[i].addEventListener("click", setActive, false);
  document.getElementsByClassName("day")[i].id = days[i];
    // document.getElementById("sunday").addEventListener('click', setActiveButton, false);
    // document.getElementById("monday").addEventListener('click', setActiveButton, false);
  }

  // init first tab open to be sunday
  document.getElementById('Sunday').classList.toggle('active');
//   document.getElementById("image").innerHTML = "<img src= 'assets/" + images[0] + "' >";

function setActive(e){

    prevday = document.getElementsByClassName("active")[0].id;
    if(prevday != undefined){
      document.getElementById(prevday).classList.toggle("active");
      document.getElementById(prevday +"menu").style.display = "none";
  
    }
    // console.log("previous meal: " + prevmeal);
    // prevmeal.classList.toggle('active');
  
  
    if(e.target.tagName == "H2"){
      e.target.parentNode.classList.toggle("active");
    }else{
      e.target.classList.toggle("active");
    }
  
    day = document.getElementsByClassName('active')[0].id;
    console.log(day);
    document.getElementById(day +"menu").style.display = "block";
    // document.getElementById('image').innerHTML = "<img src='assets/" + meal + ".jpg' >";
  
  }

// function setActiveButton(e){
//   e.target.classList.toggle("active");
// }