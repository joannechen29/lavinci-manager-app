// sends info to the server

$$(document).on("page:init", '.page[data-name="daily_summary"]', function(e) {
  // Fill restaurants

  // loop over user.restaurants
  //   jQuery(user.restaurants).each(function() {
  jQuery("#restA").html(user.restaurants[0].name);
  jQuery("#restB").html(user.restaurants[1].name);
  jQuery("#restC").html(user.restaurants[2].name);
  //   });

  // Fill the date with today
  // todo
  $$(document).on("page:init", function(e) {
    var calendarModal = app.calendar.create({
      inputEl: "#demo-calendar-modal",
      openIn: "customModal",
      header: true,
      footer: true,
      dateFormat: "MM dd yyyy"
    });
  });

  // Call API
  getDailySummary();
});

getDailySummary = function() {
  jQuery.ajax({
    url: url_api + "daily_summary.php",
    dataType: "json",
    method: "POST",
    timeout: 5000,

    // params are put here
    data: {
      language: language,
      id_restaurant: jQuery("#filterRestaurant").val(),
      date: jQuery("#filterDate").val()
    },

    success: function(data, status) {
      if (data.status == true) {
     


        jQuery(".occupancy_percentage").html(data.occupancy_rate + "%");
        app.progressbar.set("span.progressbar", data.occupancy_rate);
        // jQuery(".bookings-value").html(data.bookings);
        jQuery(".item-bookings").html(data.bookings);
        jQuery(".item-people").html(data.people);
        jQuery(".item-canclled").html(data.cancelled);
        jQuery(".item-walkins").html(data.walkins);
        jQuery(".item-waitlist").html(data.waitlist);
      }
    }
  });
};
