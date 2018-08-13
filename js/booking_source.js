// var $$ = Dom7;

  // //  doughnut Chart
  // $$(document).on("page:init", '.page[data-name="booking_source"]', function(e) {
  //   var ctx = document.getElementById("myDoughnutChart");
  //   // var Chart = require('chart.js');
  //   var myDoughnutChart = new Chart(ctx, {
  //     type: "doughnut",
  //     data: {
  //       datasets: [
  //         {
  //           data: [10, 15, 25],
  //           backgroundColor: [
  //             "rgba(160, 106, 235, 1)",
  //             "rgba(255, 196, 51, 1)",
  //             "rgba(255, 133, 133, 1)"
  //           ]
  //         }
  //       ],
  
  //       // These labels appear in the legend and in the tooltips when hovering different arcs
  //       labels: ["Internal", "Online", "Operation"]
  //     }
  //     // options: options
  //   });
  // });
// calendarpick for booking_source
$$(document).on("page:init", function(e) {
  // calendarpick for booking_source

  var calendarRange = app.calendar.create({
    inputEl: "#demo-calendar-range",
    dateFormat: "M dd yyyy",
    rangePicker: true
  });

  //  doughnut Chart
  var ctx = document.getElementById("myDoughnutChart");
  
  // var Chart = require('chart.js');
  var myDoughnutChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [10, 15, 25],
          backgroundColor: [
            "rgba(160, 106, 235, 1)",
            "rgba(255, 196, 51, 1)",
            "rgba(255, 133, 133, 1)"
          ]
        }
      ],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: ["Internal", "Online", "Operation"]
    }
    // options: options
  });

  var getBookingSource = function() {
    jQuery.ajax({
      url: url_api + "booking_source.php",
      dataType: "json",
      method: "POST",
      timeout: 5000,

      data: {
        date: jQuery("#demo-calendar-range").val(),

        language: language
      },

      success: function(data, status) {
        console.log(data);
        if (data.status == true) {
          var sourceOnline = data.sources[0].value;
          var sourceOperation = data.sources[1].value;
          var sourceInternal = data.sources[2].value;

          var total = sourceInternal + sourceOnline + sourceInternal;

          var dataSet = data.sources.map(function(item) {
            return item.value;
          });
          console.log(dataSet);
          myDoughnutChart.data.datasets[0].data = dataSet;
          myDoughnutChart.update();

          //TABLE DATA
          jQuery(".numeric-cell-internal").html(sourceInternal);
          jQuery(".numeric-cell-online").html(sourceOnline);
          jQuery(".numeric-cell-operation").html(sourceOperation);
          jQuery(".numeric-cell-total").html(total);

          // app.myDoughnutChart.set("canvas.myDoughnutChart", data.myDoughnutChart);
        } // end of if statement
      } // end of success
    });
  };

  getBookingSource();
});