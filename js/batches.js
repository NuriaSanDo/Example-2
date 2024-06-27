function setBatches(id) {
    $('.batches-wrapper').html('');
    $('.batches-wrapper').append(`<div class="batches-titleCol batches-col batches-titleCol batches-col--header">
                    <div  class="bactches__layout-itemIcon">Name</div>
                    <div  class="bactches__layout-id">ID</div>
                    <div  class="bactches__layout-status">Status</div>
                    <div  class="bactches__layout-processed">Processed</div>
                    <div  class="bactches__layout-total">Total</div>
                </div>`);
    var data = dataSheetChart[id].batchesDataChart;
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
        $('.batches-wrapper').append(layout)     
        increaseNumberAnimation('.bactches__layout-total--'+index, data[index]['total'], speed = 10);
        
    });
}