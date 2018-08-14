// sends info to the server
$$(document).on("page:init", '.page[data-name="top_nationalities"]', function(
  e
) {
  jQuery("#restANation").html(user.restaurants[0].name);
  jQuery("#restBNation").html(user.restaurants[1].name);
  jQuery("#restCNation").html(user.restaurants[2].name);

  // $$(".panel").on("click", function(e) {
  //   console.log("you were able to click on the side panel");
  //   app.panel.open("left");
  // });

  // $$(".list").on("click", function(e) {
  //   console.log("you were able to redirect to a page");
  //   app.panel.close("left");
  // });
});

getTopNationalities = function() {
  jQuery.ajax({
    url: url_api + "top_nationalities.php",
    dataType: "json",
    method: "POST",
    timeout: 5000,

    data: {
      language: language,
      // account: user.account,
      // email: user.email,
      // password: user.password,
      id_restaurant: jQuery("#filterRestaurantNationality")
      // date_start: 2018 - 09 - 28,
      // date_end: 2018 - 09 - 29
    },

    success: function(data, status) {
      console.log(data);
      if (data.status == true) {
        jQuery("#co1").html(data.countries[0].value);
        jQuery("#country2").html(data.countries[1].name);
        jQuery("#country3").html(data.countries[2].name);
        jQuery("#country4").html(data.countries[3].name);
        jQuery("#country5").html(data.countries[4].name);
        jQuery("#country6").html(data.countries[5].name);
        jQuery("#country7").html(data.countries[6].name);
        jQuery("#country8").html(data.countries[7].name);
        jQuery("#country9").html(data.countries[8].name);
        jQuery("#country10").html(data.countries[9].name);
      }
    }
  });
  // Calls API
  getTopNationalities();
};
