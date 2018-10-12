
var dogs = ["German Shepherd", "Labrador Retriever", "Schnauzer"];

function displayDogInfo() {
    var dog = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q= + dog + api_key=SwA3d1i26PVpc3LKmwuGOXar64zMN5uE&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var dogDiv = $("<div class='dog'>");
        var rating = response.Rated;
        var p = $("<p>").text("Rating: " + rating);
        dogDiv.append(p);
        var imgURL = response.Poster;
        var image = $("<img>").attr("src", imgURL);
        dogDiv.append(image);
        $("#dogs-view").append(dogDiv);
    });
}

function renderButtons() {
    $("#dogs-view").empty();
    for (var i = 0; i < dogs.length; i++) {
        var a = $("<button>");
        a.attr("data-name", dogs[i]);
        a.text(dogs[i]);
        $("#gifs-appear-here").append(a);
    }
}

$("#add-dog").on("click", function (event) {
    event.preventDefault();
    var dog = $("#dog-input").val().trim();
    dogs.push(dog);
    renderButtons();
});

$(document).on("click", ".dog-btn", displayDogInfo);
renderButtons();



