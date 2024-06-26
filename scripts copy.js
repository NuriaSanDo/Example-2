smsChart = {
    "date1":[
        {"name":"Running", "qty":"3229"},
        {"name":"Success", "qty":"456"},
        {"name":"Scheduled", "qty":"32"},
        {"name":"Error", "qty":"3"}
    ],
    "date2":[
        {"name":"Running", "qty":"3229"},
        {"name":"Success", "qty":"456"},
        {"name":"Scheduled", "qty":"32"},
        {"name":"Error", "qty":"3"}
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
  
  function createPie() {
    var
      listData      = [],
      listTotal     = 0,
      offset        = 0,
      i             = 0,
      pieElement    = " .pie-chart__pie",
      dataHTMLElement   = " .pie-chart__legend"
      dataElement   = smsChart['date1'];      
      color         = [
        "#03A9F4",
        "#22C55E",
        "#FF7B1C",
        "#D32F2F"
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
  
    for(i=0; i < listData.length; i++) {
      var size = sliceSize(listData[i], listTotal);
      var percent = ((listData[i]/listTotal)*100).toFixed(2);
      iterateSlices(id, size, pieElement, offset, i, 0, color[i]);      
      $(dataHTMLElement + " li:nth-child(" + (i + 1) + ") i").css("background-color", color[i]);
      
      $(dataHTMLElement + " li:nth-child(" + (i + 1) + ") span.pie-chart__percentage").html(percent);
      offset += size;
    }
  }

  
  function createPieCharts() {
    createPie();
  }
  
  createPieCharts();
  