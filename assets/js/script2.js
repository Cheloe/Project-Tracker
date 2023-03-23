var saveBtnEls = $('.saveBtn');
var currentDayEl = $('#currentDay');
var timeBlockEls = $('.time-block')
var now = dayjs().format("MMM DD YYYY h:mm a");


var hours = dayjs().format('HH');
console.log(hours);

  $(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //

    for (let i = 0; i < timeBlockEls.length; i++) {
        saveBtnEls[i].addEventListener('click', function(){
            localStorage.setItem(this.parentNode.getAttribute('id'), this.parentNode.children[1].value)
        });
        var timeCompare = 'hour-' + hours;
        if (timeBlockEls[i].getAttribute('id') === timeCompare){
            timeBlockEls[i].className ="row time-block present";
            console.log(timeBlockEls[i].getAttribute('id'))
            } else if (timeBlockEls[i].getAttribute('id') < timeCompare){
                    timeBlockEls[i].className ="row time-block past";
                    console.log(timeBlockEls[i].getAttribute('id'))
                } else {
                    timeBlockEls[i].className ="row time-block future";
                }
        timeBlockEls[i].children[1].value = "blurb" + i;
    }



    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
  });



  function updateTime() {
    currentDayEl.text(now);
  }
  
  updateTime();
  setInterval(updateTime, 6000);





// var hoursToRender = {
//     hour9: 'hour9.value',
//     hour10: 'hour10.value',
//     hour11: 'hour11.value',
//     hour12: 'hour12.value',
//     hour1: 'hour1.value',
//     hour2: 'hour2.value',
//     hour3: 'hour3.value',
//     hour4: 'hour4.value',
//     hour5: 'hour5.value',
//   }