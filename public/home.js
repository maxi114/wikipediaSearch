
$(document).ready(function () {
  //when search is clicked this code runs
  $("#search").click(function () {
    //gets the search input
    var searchTerm = $("#searchbox").val();
    //api url with search term
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
    $.ajax({
      type: "GET",
      url: url,
      async: false,
      dataType: "json",
      success: function (data) {
        $("#output").html("");
        for (var i = 0; i < data[1].length; i++) {
          $("#output").prepend("<a href=" + data[3][i] + ">" + data[1][i] + "</a>"+"<p>" + data[2][i] + "</p>");
        }
      },
      error: function (errorMessage) {
        alert("ERROR");
      },
    });
  });
});



