$(document).ready(function() {
  $("#btn").click(function(event) {

  var groceries = ["itemOne", "itemTwo", "itemThree", "itemFour", "itemFive"];
  var groceries2 = [];
  var groceries3 = [];

  var groceries2 = groceries.map(function(item) {
    return $("#" + item).val();
  });

  $("#items").hide();

  groceries2 = groceries2.sort();

  groceries3 = groceries2.map(function(item2) {
    return item2.toUpperCase();
  });

  var counter = 0;
  groceries3.forEach(function(item2) {
    $("#result").append("<li>" + groceries3[counter] + "</li>"); counter++;
  });

  $("#result").show();

  event.preventDefault();

  });
});
