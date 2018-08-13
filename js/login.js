// checks if the fields in login are blank or not
login_success = function() {
  if (
    jQuery("#login__input__email").val() == "" &&
    jQuery("#login__input__pass").val() == ""
  ) {
    app.dialog.alert("Enter things in the fields above!");
    return;
  }

  //shows loading
  $$(".open-preloader-indicator").on("click", function() {
    app.preloader.show();
    setTimeout(function() {
      app.preloader.hide();
    }, 3000);
  });

  // sends info to the server

  jQuery.ajax({
    url: url_api + "login.php",
    dataType: "json",
    method: "POST",
    timeout: 5000,
    // put in the params
    data: {
      language: language,
      email: jQuery("#login__input__email").val(),
      password: jQuery("#login__input__pass").val()
    },
    statusCode: {
      500: function() {
        app.preloader.hide();
        app.dialog.alert("Something was wrong with the server!");
      }
    },

    success: function(data, status) {
      if (data.status == true) {
        //if (user.email == "t@test.com" && user.password == "123") {
        console.log("you were able to login!");
        user = data;
        mainView.router.navigate("/daily_summary/");
      } else {
        app.dialog.alert("Login is incorrect or account doesn't exist!");
      }
    },

    fail: function(jqXHR, exception) {
      app.preloader.hide();
      app.dialoge.alert("Error of some sort! Stop rn!");
    }
  });
};
