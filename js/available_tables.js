var $$ = Dom7;

// time picker
$$(document).on("page:init", '.page[data-name="available_tables"]', function(
  e
) {
  // initialize input widgets first
  jQuery("#timepairExample").timepicker({
    minTime: "8:00",
    showDuration: true,
    timeFormat: "g:ia"
  });
  // jQuery("#timepairExample").on("change", function(e) {
  //   format: "g:ia";
  // });
});

// calendarpick for available tables
$$(document).on("page:init", function(e) {
  var calendarModal = app.calendar.create({
    inputEl: "#demo-calendar-modal",
    openIn: "customModal",
    header: true,
    footer: true,
    dateFormat: "MM dd yyyy"
  });
});

$$(document).on("page:init", function(e) {

var calendarModal = app.calendar.create({
  inputEl: "#filter_button",
  openIn: 'customModal',
  // header: true,
  // footer: true,
  // dateFormat: 'MM dd yyyy',
});
