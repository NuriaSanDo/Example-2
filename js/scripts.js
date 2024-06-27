/** This functions is to show an animation in which the result quantiy is showing as ascendent count */
function increaseNumberAnimation(elementId, endNumber, speed = 1000) {
    const element = document.querySelector(elementId)
    
    if(!element) return
    
    /* A dataset variable that is added to the animated element*/
    const animationRunning = JSON.parse(element.dataset.animationRunning ?? false)
    
    if(animationRunning) return
    
    element.dataset.animationRunning = true
    var beginNumber = 0;
    if(endNumber>400) {
        beginNumber = endNumber - 300;
    }
    incNbrRec(beginNumber, endNumber, element, speed)
  }
  
  /*A recursive function to increase the number.*/
  function incNbrRec(currentNumber, endNumber, element, speed) {
    if (currentNumber <= endNumber) {
      element.innerHTML = currentNumber
      setTimeout(function() {
        incNbrRec(currentNumber + 1, endNumber, element, speed)
      }, speed) //Delay a bit before calling the function again.
    } else {
      element.dataset.animationRunning = false
    }
  }
/** This functions removes all data from the spreadsheet */
  function clearStats() {
    $('.filter').removeAttr('disabled');
    $('.batches-wrapper').html('');
    $('.pie-chart__pie').html('');
    $('.pie-chart__percentage').html('');    
    $('.overView__layout-qtyPercent').html('');
    $('.pie-chart__itemQty').html('');
    $('.pie-chart-date').html('');
    $('.pie-chart-results').html('');
  }

  /**We create the input object according our stored data **/
  var data = Object.keys(dataSheetChart);
  $(data).each(function(index,key){
    var inputTemplate = `<option value="`+dataSheetChart[key].value+`">`+dataSheetChart[key].name+`</option>`;
    $('.custom-select.selectFilter').append(inputTemplate);
    console.log(dataSheetChart[key].value);
  })

/** Add event to filter button */
$('button.btn.btn-outline-secondary.filter').on('click',function(){
    var val = document.querySelector(".selectFilter").value;
    $('.filter').attr('disabled','disabled');
    if(val!=0) {
        createPieCharts(val); 
        setOverview(val);
        setBatches(val);
    }
    ;
});

/** Add event to clear button */
$('.clear').on('click',function(){
  clearStats();
});
/** Add event to input apply button */
$('.selectFilter').on('change',function(){ 
  $('.filter').removeAttr('disabled');

})




$('.filter').attr('disabled','disabled');
createPieCharts('date1');
setOverview('date1');
setBatches('date1');

