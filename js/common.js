// window.onload = function () {
// 	let getJson = function (url, callback) {
// 		let xhr = new XMLHttpRequest();
// 		xhr.open('GET', url, true);
// 		xhr.responseType = 'json';
// 		xhr.onload = function () {
// 			let status = xhr.status;
// 			if (status == 200) {
// 				callback(null, xhr.response)
// 			}
// 			else {
// 				callback(status, xhr.response);
// 			}
// 		}
// 	}
// }

// $(document).ready(function() {
//   $.getJSON(
//     "https://spreadsheets.google.com/feeds/list/1UfJ6W1a3P3VcgW-jZxIs2ZAsYDxjEX4lsKEJkeFnTgg/od6/public/values?alt=json",
//     function(data) {
//       console.log(data);
//       showGoods(data);
//     }
//   );

//   function showGoods(data) {
//     var out = "";
//     for (var i = 0; i < data.length; i++) {
//       out += `<h5>${data[i]["gsx$name"]["$t"]}</h5>`;
//     }

//     $(".shows").html(out);
//   }
// });

// ID of the Google Spreadsheet
var spreadsheetID = "1UfJ6W1a3P3VcgW-jZxIs2ZAsYDxjEX4lsKEJkeFnTgg";

// Make sure it is public or set to Anyone with link can view
var url =
  "https://spreadsheets.google.com/feeds/list/" +
  spreadsheetID +
  "/od6/public/values?alt=json";

$.getJSON(url, function(data) {
  var entry = data.feed.entry;

  $(entry).each(function() {
    // Column names are name, age, etc.
    $(".results").prepend(
      "<div class='col-lg-3 col-6'><div class='img-wrapper'><div class='img-bg' style='background-image: url(" +
        this.gsx$foto.$t +
        ");'></div><div class='card-title'><h5>" +
        this.gsx$name.$t +
        "</h5></div></div>"
    );
  });
});
// var folder =
//   "https://drive.google.com/drive/folders/12qRDQpUb_DBe87sVnx1fZmUeeGtTda-g"; //TODO: change this to the path to your folder with the images.
// $.ajax({
//   url: folder,
//   success: function(data) {
//     $(data)
//       .find("a")
//       .attr("href", function(i, val) {
//         $(".ddd").append("<img src='" + folder + "/" + val + "'>");
//       });
//   }
// });
$(document).ready(function() {
  $("#down").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#aboutUs").offset().top
      },
      1100
    );
  });
});

$(document).ready(function() {
  $("#up").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#down").offset().top
      },
      1000
    );
  });
});

$(window).on("load", function() {
  $(".preloader")
    .fadeOut()
    .end()
    .delay(400)
    .fadeOut("slow");
});
