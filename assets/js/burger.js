$(function() {
    $(".change-burger").on("click", function(event) {
        var id = $(this).data("id");
        var newBurger = $(this).data("newburger");

        var newBurgerState = {
            burgers: newBurger
        };

        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: newBurgerState
        }) .then (
            function() {
                console.log(newBurger);
                
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var addBurger = {
            name: $("#name").val().trim(),
            burger: $("[name=burger]:checked").val().trim()
        };

        $.ajax("/api/burger", {
            type: "POST",
            data: addBurger
        }).then(
            function() {
                console.log("created new burger");

                location.reload();
            }
        );
    });
});