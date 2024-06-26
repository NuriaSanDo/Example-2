var batchesDataChart = {
    "date1":[
        {'name':'Alpha_Genesis', 'id':'37291856','status':'PROCESSING', 'processed':'103', 'total':'9500'},
        {'name':'Prime_Apex', 'id':'48562739','status':'FINISHED', 'processed':'485', 'total':'9340'},
        {'name':'Genesis_Zenith', 'id':'92743108','status':'PROCESSING', 'processed':'372', 'total':'6800'}
    ],
    "date2":[
        {'name':'Apex_Stellar', 'id':'56829314','status':'FINISHED', 'processed':'514', 'total':'4340'},
        {'name':'Summit_Vanguard', 'id':'75913285','status':'PROCESSING', 'processed':'13', 'total':'9502'},
        {'name':'Vanguard_Quantum', 'id':'19457682','status':'FINISHED', 'processed':'123', 'total':'3247'},
        {'name':'Zenith_Infinity', 'id':'67245390','status':'FINISHED', 'processed':'421', 'total':'1340'}
    ]
}

function setBatches(id) {
    $('.bactches-wrapper').html('');
    $('.bactches-wrapper').append(`                <div class="batches-titleCol batches-col batches-titleCol batches-col--header">
                    <div  class="bactches__layout-itemIcon">Name</div>
                    <div  class="bactches__layout-id">ID</div>
                    <div  class="bactches__layout-status">Status</div>
                    <div  class="bactches__layout-processed">Processed</div>
                    <div  class="bactches__layout-total">Total</div>
                </div>`);
    var data = batchesDataChart[id];
    console.log(data);
    $(data).each(function(index){
      
        var layout = `
        <div class="batches-titleCol batches-col">
            <div class="bactches__layout-itemIcon">`+data[index]['name']+`</div>
            <div  class="bactches__layout-id">`+data[index]['id']+`</div>
            <div  class="bactches__layout-status"><span class="bactches__layout-status--`+data[index]['status'].toLowerCase()+`">`+data[index]['status']+`</span></div>
            <div  class="bactches__layout-processed">`+data[index]['processed']+`</div>
            <div  class="bactches__layout-total bactches__layout-total--`+index+`">`+data[index]['total']+`</div>            
        </div>`;
        $('.bactches-wrapper').append(layout)     
        increaseNumberAnimation('.bactches__layout-total--'+index, data[index]['total'], speed = 10);
        
    });
}