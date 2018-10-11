
$(function () {
    console.log("page loaded");
})

var breeds = ["German Shepherd", "Labrador Retriever", "Schnauzer", "Pug", "Golden Retriever"];

// function displayBreedInfo(){
//     var breedName = $(this).attr("data-name");
//     alert(breedName);
// }

function renderButtons() {
    $("#buttons").empty();
    for (var i = 0; i < breeds.length; i++) {
        var a = $("<button>");
        a.addClass("breed");
        a.attr("data-name", breeds[i]);
        a.text(breeds[i]);
        $("#buttons-view").append(a);

    }
}
//Add dog breed function
$("add-breed").on("click", function(event){
    event.preventDefault();
    var breed = $("#breed-input").val().trim();
    breeds.push(breed);

  renderButtons();
});


$(document).on("click", ".breed", alertBreedName);

// Calling renderButtons which handles the processing of array
renderButtons()






// function displayBreedName() {
//     var breed = $(this).attr("data-name");
//     var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=SwA3d1i26PVpc3LKmwuGOXar64zMN5uE=dogs";




