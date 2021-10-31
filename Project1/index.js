
/* When a checkbox is clicked take in str day and int choice of lot or little time as params
- set variables to match correct day
- call lotClick() or littleClick() depending on int choice
 */ 
function chooseTime(day, choice){
  if(day == 'S'){
    let lotCheck = document.getElementById("lotCheckS");
    let lotList = document.getElementById("lotListS");
    let litCheck = document.getElementById("litCheckS");
    let litList = document.getElementById("litListS");

    if(choice == 1){
      lotClick(lotCheck, lotList, litCheck, litList);
    }
    else if(choice == 2){
      littleClick(lotCheck, lotList, litCheck, litList);
    }
  }

  if(day == 'M'){
    let lotCheck = document.getElementById("lotCheckM");
    let lotList = document.getElementById("lotListM");
    let litCheck = document.getElementById("litCheckM");
    let litList = document.getElementById("litListM");

    if(choice == 1){
      lotClick(lotCheck, lotList, litCheck, litList);
    }
    else if(choice == 2){
      littleClick(lotCheck, lotList, litCheck, litList);
    }
  }

  if(day == 'T'){
    let lotCheck = document.getElementById("lotCheckT");
    let lotList = document.getElementById("lotListT");
    let litCheck = document.getElementById("litCheckT");
    let litList = document.getElementById("litListT");

    if(choice == 1){
      lotClick(lotCheck, lotList, litCheck, litList);
    }
    else if(choice == 2){
      littleClick(lotCheck, lotList, litCheck, litList);
    }
  }

  if(day == 'W'){
    let lotCheck = document.getElementById("lotCheckW");
    let lotList = document.getElementById("lotListW");
    let litCheck = document.getElementById("litCheckW");
    let litList = document.getElementById("litListW");

    if(choice == 1){
      lotClick(lotCheck, lotList, litCheck, litList);
    }
    else if(choice == 2){
      littleClick(lotCheck, lotList, litCheck, litList);
    }
  }

  if(day == 'Th'){
    let lotCheck = document.getElementById("lotCheckTh");
    let lotList = document.getElementById("lotListTh");
    let litCheck = document.getElementById("litCheckTh");
    let litList = document.getElementById("litListTh");

    if(choice == 1){
      lotClick(lotCheck, lotList, litCheck, litList);
    }
    else if(choice == 2){
      littleClick(lotCheck, lotList, litCheck, litList);
    }
  }

  if(day == 'F'){
    let lotCheck = document.getElementById("lotCheckF");
    let lotList = document.getElementById("lotListF");
    let litCheck = document.getElementById("litCheckF");
    let litList = document.getElementById("litListF");

    if(choice == 1){
      lotClick(lotCheck, lotList, litCheck, litList);
    }
    else if(choice == 2){
      littleClick(lotCheck, lotList, litCheck, litList);
    }
  }

  if(day == 'Sat'){
    let lotCheck = document.getElementById("lotCheckSat");
    let lotList = document.getElementById("lotListSat");
    let litCheck = document.getElementById("litCheckSat");
    let litList = document.getElementById("litListSat");

    if(choice == 1){
      lotClick(lotCheck, lotList, litCheck, litList);
    }
    else if(choice == 2){
      littleClick(lotCheck, lotList, litCheck, litList);
    }
  }
}

/* Take in lot and little checkboxes and their lists as params
- Display lot list if checkbox is checked
- Make sure only one box is checked and one list is displayed at a time
- If little box is checked call littleClick()
*/
function lotClick(lotCheck, lotList, litCheck, litList){
  if(lotCheck.checked == true){
    litCheck.checked = false;
    litList.style.display = "none";

    lotList.style.display = "block";

    if(litCheck.checked == true){
      littleClick();
    }
  }
  else{
    lotList.style.display = "none";
  }
}

/* Take in lot and little checkboxes and their lists as params
- Display little list if checkbox is checked
- Make sure only one box is checked and one list is displayed at a time
- If lot box is checked call lotClick()
*/
function littleClick(lotCheck, lotList, litCheck, litList){
  if(litCheck.checked == true){
    lotCheck.checked = false;
    lotList.style.display = "none";

    litList.style.display = "block";

    if(lotCheck.checked == true){
      lotClick();
    }
  }
  else{
    litList.style.display = "none";
  }
}


function openTab(tabName, tab, color) {
  // Hide all content in activities class by default
  let activities;
  
  activities = document.getElementsByClassName("activities");
  for(i = 0; i < activities.length; i++) {
    activities[i].style.display = "none";
  }

  // Revert button color if not clicked
  let buttColor;
  
  buttColor = document.getElementsByClassName("butt");
  for (i = 0; i < buttColor.length; i++) {
    buttColor[i].style.backgroundColor = "";
  }

  /* 
  - Display choosen tab content
  - With correct button color
  */
  document.getElementById(tabName).style.display = "block";
  tab.style.backgroundColor = color;
}

//Default opening page
document.getElementById("default").click();