
var dogs = ["German Shepherd", "Labrador Retriever", "Schnauzer"];

function displayDogInfo() {

    var dog = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + dog + "api_key=SwA3d1i26PVpc3LKmwuGOXar64zMN5uE&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            var results = response.data;
            $("#gifs-appear-here").empty;
            var imgURL = response.data.image_original_url;
            var dogImage = $("<img>");
            dogImage.attr("src", imageURL);
            dogImage.attr("alt", "dog image");
            $("#images").prepend(dogImage);
        });


    for (var i = 0; i < results.length; i++) {
        var dogDiv = $("<div class='dog'>");
        var rating = response.Rated;
        var p = $("<p>").text("Rating: " + rating);
        dogDiv.append(p);
        dogDiv.append(image);
        $("#dogs-view").append(dogDiv);
    }

    $(document).on("click", "searchImage", function () {
        var state = $(this).attr("data-state");
        if (state == still) {
            $(this).attr("src", $(this).data("animated"));
            $(this).attr("data-state", "animated");
        } else {
            $(this).attr("src", $(this).data("still"));
            $(this).attr("data-state", "still");
        }
    });


    function renderButtons() {
        $("#dogs-view").empty();
        for (var i = 0; i < dogs.length; i++) {
            var a = $("<button>");
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

    $(document).on("click", ".dog-btn", displayDogInfo);
    renderButtons();



