function setBatches(id) {
    $('.batches-wrapper').html('');
    $('.batches-wrapper').append(`<div class="batches-titleCol batches-col batches-titleCol batches-col--header">
                    <div  class="batches__layout-itemIcon">Name</div>
                    <div  class="batches__layout-id">ID</div>
                    <div  class="batches__layout-status">Status</div>
                    <div  class="batches__layout-processed">Processed</div>
                    <div  class="batches__layout-total">Total</div>
                </div>`);
    var data = dataSheetChart[id].batchesDataChart;
    console.log(data);
    $(data).each(function(index){
      var copyIcon = `<span class="chart-copy-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
</svg></span>`;
        var layout = `
        <div class="batches-titleCol batches-col">
            <div class="batches__layout-itemIcon"><span>`+data[index]['name']+'</span>'+copyIcon+`</div>
            <div  class="batches__layout-id"><span>`+data[index]['id']+'</span>'+copyIcon+`</div>
            <div  class="batches__layout-status"><span class="batches__layout-status--`+data[index]['status'].toLowerCase()+`">`+data[index]['status']+`</span></div>
            <div  class="batches__layout-processed">`+data[index]['processed']+`</div>
            <div  class="batches__layout-total batches__layout-total--`+index+`">`+data[index]['total']+`</div>            
        </div>`;
        $('.batches-wrapper').append(layout)     
        increaseNumberAnimation('.batches__layout-total--'+index, data[index]['total'], speed = 10);
        
    });
    $('body').on('click','.batches-titleCol.batches-col',function(){          
        console.log($(this).find('.batches__layout-itemIcon'));
        navigator.clipboard.writeText(
          ' NAME: '+ $(this).find('.batches__layout-itemIcon span').html()+
          ' ID: '+$(this).find('.batches__layout-id span').html()+
          ' STATUS: '+$(this).find('.batches__layout-status span').html()+
          ' PROCESSED: '+$(this).find('.batches__layout-processed').html()+
          ' TOTAL: '+$(this).find('.batches__layout-total').html()
        );
      });
}