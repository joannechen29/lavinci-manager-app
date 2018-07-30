var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
    swipeNoFollow: true
  },
  // Add default routes
  routes: [
    {
      path: '/about/',
      url: 'pages/about.html',
    },
    {
      path: '/home/',
      url: 'index.html',
    },
  ],
  // ... other parameters
  theme: 'md'
});

var mainView = app.views.create('.view-main');
