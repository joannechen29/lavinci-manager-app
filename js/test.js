var app = new Framework7({
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
    {
      path: "/about/",
      url: "pages/about.html"
    },

    {
      path: "/link1/",
      url: "pages/link1.html"
    },
    {
      path: "/daily_summary/",
      url: "pages/daily_summary.html"
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
    

  ],
  // ... other parameters
  theme: "md"
});

var mainView = app.views.create(".view-main");
