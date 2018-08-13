var app = new Framework7({
  routes: [
    // index page
    {
      path: "/",
      url: "./index.html",
      name: "home"
    },

    // about page
    {
      path: "/about/",
      url: "./pages/about.html",
      name: "about"
    },

    // components
    {
      path:"/link1/", 
      url: "./pages/link1.html", 
      name: "link1"
    },

    {
      path: "/daily_summary/",
      url: "./pages/daily_summary.html"
    },

    {
      path: "/available_tables/",
      url: "./pages/available_tables.html"
    },

    {
      path: "/current_operations/",
      url: "./pages/current_operations.html"
    },

    {
      path: "/booking_source/",
      url: "./pages/booking_source.html",
      name: "booking_source"
    },

    {
      path: "/top_nationalities/",
      url: "./pages/top_nationalities.html"
    },

    {
      path: "/messages/",
      url: "./pages/messages.html"
    },

    {
      path: "/logout/",
      url: "./pages/logout.html"
    }
  ]
});


// var $$ = Dom7;

// var panelLeft = app.panel.left;
// panelLeft.on("open", function() {
//   console.log("Panel right: open");
// });
// panelLeft.on("opened", function() {
//   console.log("Panel right: opened");
// });

// // App Events
// app.on("panelClose", function(panel) {
//   console.log("Panel " + panel.side + ": close");
// });
// app.on("panelClosed", function(panel) {
//   console.log("Panel " + panel.side + ": closed");
// });
