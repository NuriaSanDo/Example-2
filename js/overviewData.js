var overviewDataChart = {
    "date1":[
        {'name':'Emails', 'icon':'email.svg','qty':'50', 'status':'positive', 'percent':'13%'},
        {'name':'SMS', 'icon':'sms.svg','qty':'256', 'status':'negative', 'percent':'13%'},
        {'name':'Prints', 'icon':'printer.svg','qty':'396', 'status':'positive', 'percent':'13%'}
    ],
    "date2":[
        {'name':'Emails', 'icon':'email.svg','qty':'30', 'status':'negative', 'percent':'14%'},
        {'name':'SMS', 'icon':'sms.svg','qty':'124', 'status':'negative', 'percent':'13%'},
        {'name':'Prints', 'icon':'printer.svg','qty':'6472', 'status':'positive', 'percent':'13%'}
    ]
}

function setOverview(id) {
    $('.overView__layout').html('');
    var data = overviewDataChart[id];
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