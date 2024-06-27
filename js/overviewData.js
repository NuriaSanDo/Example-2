function setOverview(id) {
    $('.overView__layout').html('');
    var data = dataSheetChart[id].overviewDataChart;
    console.log(data);
    $(data).each(function(index){
      
        var layout = `<div class="overView__layoutItem">
            <div class="overView__layout-itemIcon"><img src="images/`+data[index]['name']+`.svg"></div>
            <div class="overView__layout-qty">
                <div  class="overView__layout-name">`+data[index]['name']+`</div>
                <div  class="overView__layout-qtyPercent">
                    <div  class="overView__layout-qty overView__layout-qty--`+index+`">0</div>
                    <div  class="overView__layout-percent `+data[index]['status']+`">`+data[index]['percent']+`</div>
                </div>                
            </div>
        </div>`;   
        $('.overView__layout').append(layout);
        increaseNumberAnimation('.overView__layout-qty--'+index, data[index]['qty'], speed = 1);     
    });
}