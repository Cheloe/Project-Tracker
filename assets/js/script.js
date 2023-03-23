var saveBtnEls = $('.saveBtn');
var currentDayEl = $('#currentDay');
var timeBlockEls = $('.time-block')
var now = dayjs().format("MMM DD YYYY h:mm a");
var hours = dayjs().format('HH');

  $(function () {
    //for every time block added to the html do the following: 
    for (let i = 0; i < timeBlockEls.length; i++) {
        //add event listeners to all save buttons
        saveBtnEls[i].addEventListener('click', function(){
            localStorage.setItem(this.parentNode.getAttribute('id'), this.parentNode.children[1].value)
        });
        //compare current hour to time-block id and set class name accordingly
        var timeCompare = 'hour-' + hours;
        if (timeBlockEls[i].getAttribute('id') === timeCompare){
            timeBlockEls[i].className ="row time-block present";
        } else if (timeBlockEls[i].getAttribute('id') < timeCompare){
            timeBlockEls[i].className ="row time-block past";
        } else {
            timeBlockEls[i].className ="row time-block future";
        }
        //render saved text        
        if (localStorage.getItem(timeBlockEls[i].getAttribute('id')) != null) {
            timeBlockEls[i].children[1].value = localStorage.getItem(timeBlockEls[i].getAttribute('id'));
        }
    }
  });

  function updateTime() {
    currentDayEl.text(now);
  }
  
  updateTime();
  setInterval(updateTime, 1000);

