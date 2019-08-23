$(function () {
    $(".change-burger").on("click", function (event) {
        var id = $(this).data("id");
        var newBurger = $(this).data("newburger");

        var newBurgerState = {
            burgers: newBurger
        };

        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: newBurgerState
        }).then(
            function () {
                console.log(newBurger);

                location.reload();
            }
        );
    });

    $("#create-form").on("click", function (event) {
        event.preventDefault();

        var addBurger = {
            name: $("#name").val().trim(),
            devoured: false
        };

        $.ajax("/api/burger", {
            type: "POST",
            data: addBurger
        }).then(
            function () {
                console.log("created new burger");

                location.reload();
            }
        );
    });

    $(".delete-burger").on("click", function (event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/burger" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted burger", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});