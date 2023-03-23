// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var saveBtnEls = $('.saveBtn');
var currentDayEl = $('#currentDay');
var hoursParentEl = $('#hoursParent')
var now = dayjs().format("MMM DD YYYY h:mm a");
//var savedHours = ["","","","","","","","",""]

var hoursToRender = {
  hour9: hour9.value,
  hour10: hour10.value,
  hour11: hour11.value,
  hour12: hour12.value,
  hour13: hour1.value,
  hour14: hour2.value,
  hour15: hour3.value,
  hour16: hour4.value,
  hour17: hour5.value,
}

for (i=0; i< savedHours.length; i++) {
  //var renderCurrentHour
  // var currentHour = document.setAttribute("id", localStorage(hour[i+1]).value);
  //set div id as index +1
  var currentHour = document.setAttribute("id", "hour-" + [i+1]);
}

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  
  hoursParentEl.on('click', function (event) {
      //this is here because if you click the icon, the parentNode is the button instead of the time block. I feel like there's probably a more elegant solution to this, but this feels decent.
      var buttonSelector;
      if (event.target.matches('i')) {
        var buttonSelector = event.target.parentNode;
      } else {
        var buttonSelector = event.target;
      }
      var selectedBlock = buttonSelector.parentNode;
      var hourLabel = (selectedBlock.getAttribute("id"));
      console.log(hourLabel);
      var hourText = (selectedBlock.children[1].value);
      savedHours.splice(1, 1, hourText);
      function saveHour() {
        //localStorage.setItem(hourLabel, JSON.stringify(hourText));
        localStorage.setItem("saved hours", [savedHours])
      }
      saveHour();
    // 
  });

  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  //when user presses save do something like this. 
  //localStorage.setItem("hour",'this.something');
  //Reload the page

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  hoursParentEl.children().addClass()



  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
 

});


function updateTime() {
  currentDayEl.text(now);
}

updateTime();
setInterval(updateTime, 6000);

