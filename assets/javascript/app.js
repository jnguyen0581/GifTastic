
$(document).ready(function(){
   

var dogs = ["German Shepherd", "Labrador Retriever", "Schnauzer"];
renderButtons();

$(document).on("click", ".dog-btn", function() {

    var dog = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + dog + "&api_key=SwA3d1i26PVpc3LKmwuGOXar64zMN5uE&limit=5";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            var results = response.data;
            $("#gifs-appear-here").empty();
            console.log (results);


            for (var i = 0; i < results.length; i++) {
                var dogDiv = $("<div>");
                dogDiv.addClass("gifs");
                var rating = response.Rated;
                var p = $("<p>").text("Rating: " + results[i].rating);
                $("#dogs-view").append(dogDiv);
                var dogImage = $("<img>");
                dogImage.addClass("movement");
                dogImage.attr("src", results[i].images.fixed_height_still.url);
                dogImage.attr("data-animate", results[i].images.fixed_height.url);
                dogImage.attr("data-still", results[i].images.fixed_height_still.url);
                dogImage.attr("data-state", "still");
                // dogImage.attr("alt", "dog image");
                dogDiv.append(p);
                dogDiv.append(dogImage);
                $("#gifs-appear-here").prepend(dogDiv);
            }
        });



$(".movement").on("click", function () {
    // console.log("button works");
    // var dog = $("dog-input").val();
    // dogs.push(dog);
    var state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});
});

function renderButtons() {
    $("#buttons-view").empty();
    for (var i = 0; i < dogs.length; i++) {
        var a = $("<button>");
        a.addClass("dog-btn");
        a.attr("data-name", dogs[i]);
        a.text(dogs[i]);
        $("#buttons-view").append(a);
    }
}

$("#add-dog").on("click", function (event) {
    event.preventDefault();
    var dog = $("#dog-input").val().trim();
    dogs.push(dog);
    renderButtons();
});
});
