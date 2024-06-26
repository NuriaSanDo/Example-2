smsChart = {
    "date1":[
        {"name":"Running", "qty":"3229"},
        {"name":"Success", "qty":"456"},
        {"name":"Scheduled", "qty":"32"},
        {"name":"Error", "qty":"3"}
    ],
    "date2":[
        {"name":"Running", "qty":"3000"},
        {"name":"Success", "qty":"2024"},
        {"name":"Scheduled", "qty":"500"},
        {"name":"hold", "qty":"32"},
        {"name":"Error", "qty":"80"}
    ]
}
var totalSms = 0;
function sliceSize(dataNum, dataTotal) {
    return (dataNum / dataTotal) * 360;
  }
  
  function addSlice(id, sliceSize, pieElement, offset, sliceID, color) {
    $(pieElement).append("<div class='slice "+ sliceID + "'><span></span></div>");
    var offset = offset - 1;
    var sizeRotation = -179 + sliceSize;
  
    $(id + " ." + sliceID).css({
      "transform": "rotate(" + offset + "deg) translate3d(0,0,0)"
    });
  
    $(id + " ." + sliceID + " span").css({
      "transform"       : "rotate(" + sizeRotation + "deg) translate3d(0,0,0)",
      "background-color": color
    });
  }
  
  function iterateSlices(id, sliceSize, pieElement, offset, dataCount, sliceCount, color) {
    var
      maxSize = 179,
      sliceID = "s" + dataCount + "-" + sliceCount;
  
    if( sliceSize <= maxSize ) {
      addSlice(id, sliceSize, pieElement, offset, sliceID, color);
    } else {
      addSlice(id, maxSize, pieElement, offset, sliceID, color);
      iterateSlices(id, sliceSize-maxSize, pieElement, offset+maxSize, dataCount, sliceCount+1, color);
    }
  }
  
  function createPie(id,selectedData) {
    var
      listData      = [],
      listTotal     = 0,
      offset        = 0,
      i             = 0,
      pieElement    = id + " .pie-chart__pie",
      dataHTMLElement   = id + " .pie-chart__legend"
      dataElement   = smsChart[selectedData];      
      color         = [
        "#03A9F4",
        "#22C55E",
        "#FF7B1C",
        "#D32F2F",
        "#FF55"
      ];
  
    //color = [0,1,2,3,4,5];
  
    $(dataElement).each(function(index) {
        //listData.push(Number($(this).html()));      
        console.log(dataElement[index]["qty"])
        listData.push(Number(dataElement[index]["qty"]));
      });
    
      for(i = 0; i < listData.length; i++) {
        listTotal += listData[i];
      }    
      try {
        increaseNumberAnimation('.pie-chart-results', listTotal, speed = 1);
      }catch{}
      
      for(i=0; i < listData.length; i++) {
        var size = sliceSize(listData[i], listTotal);
        var percent = ((listData[i]/listTotal)*100).toFixed(2);
        iterateSlices(id, size, pieElement, offset, i, 0, color[i]);      
        var name = dataElement[i]["name"];
        var qty = dataElement[i]["qty"];

        var items = `            <li class="pie-chart__item">
              <i class="pie-chart__icon"></i>
              <span class="pie-chart__itemItle"></span>
              <span class="pie-chart__itemQty"></span>
              <span class="pie-chart__percentage"></span>
            </li> `;
        $('ul.pie-chart__legend').append(items);
        $(dataHTMLElement + " li:nth-child(" + (i + 1) + ") span.pie-chart__itemQty").addClass('pie-chart__itemQty--'+i);
        $(dataHTMLElement + " li:nth-child(" + (i + 1) + ") span.pie-chart__itemQty").html(qty);
        $(dataHTMLElement + " li:nth-child(" + (i + 1) + ") span.pie-chart__itemItle").html(name);
        $(dataHTMLElement + " li:nth-child(" + (i + 1) + ") i").css("background-color", color[i]);        
        $(dataHTMLElement + " li:nth-child(" + (i + 1) + ") span.pie-chart__percentage").html(percent+'%');
        increaseNumberAnimation('.pie-chart__itemQty--'+i, qty, speed = 1);
        offset += size;
      }
  }

  
  function createPieCharts(selectedData) {
    //createPie('.pieID--micro-skills' );
    //createPie('.pieID--categories' );
    $('.pie-chart__pie').html('');
    $('.pie-chart__legend').html('');
    createPie('.pieID--status',selectedData);
  }
  
  createPieCharts();
  