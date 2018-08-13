var app,
  language = "pt",
  user = null,
  url_api = "https://lab.vincitables.com/interns/api/managers/",
  id_restaurant = 0,
  $$ = Dom7;

app = new Framework7({
  // App root element
  root: "#app",
  // App Name
  name: "My App",
  // App id
  id: "com.myapp.test",
  // Enable swipe panel
  panel: {
    swipe: "left",
    swipeNoFollow: true
  },

  // Add default routes
  routes: [
    // {
    //   path: "/home/",
    //   url: "test.html"
    // },

    {
      path: "/daily_summary/",
      url: "pages/daily_summary.html"
    },

    {
      path: "/booking_source/",
      url: "pages/booking_source.html"
    },

    {
      path: "/login/",
      url: "pages/login.html"
    },
    {
      path: "/available_tables/",
      url: "pages/available_tables.html"
    },
    {
      path: "/booking_source/",
      url: "pages/booking_source.html"
    },
    {
      path: "/current_operations/",
      url: "pages/current_operations.html"
    },
    {
      path: "/top_nationalities/",
      url: "pages/top_nationalities.html"
    },
    {
      path: "/messages/",
      url: "pages/messages.html"
    },
    {
      path: "/logout/",
      content:
        '\
    <div class="page no-navbar no-toolbar no-swipeback">\
      <div class="page-content login-screen-content">\
        <div class="login">My App</div>\
        <form>\
        <div class="login__row">\
            <input type="text" class="login__input name" placeholder="Username" />\
        </div>\
        <div class="login__row">\
            <input type="password" class="login__input pass" placeholder="Password" />\
        </div>\
        <button class="col button button-fill button-round" class="login__submit">Sign in </button>\
        <p class="login__signup">Forgot your password? &nbsp;\
        <a>Retrieve it here</a>\
    </p>\
</form>\
</div>\
</div>'
    }
  ],
  // ... other parameters
  theme: "md"
});

// closes the side panel once button is clicked
var $$ = Dom7;

$$(".panel").on("click", function(e) {
  console.log("you were able to click on the side panel");
  app.panel.open("left");
});

$$(".list").on("click", function(e) {
  console.log("you were able to redirect to a page");
  app.panel.close("left");
});

// this is what Pedro gave us
var mainView = app.views.create(".view-main");
