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

$('button.btn.btn-outline-secondary.filter').on('click',function(){
    var val = document.querySelector(".selectFilter").value;
    if(val!=0) {
        createPieCharts(val);
        setOverview(val);
        setBatches(val);
    }
});

createPieCharts('date1');
setOverview('date1');
setBatches('date1');