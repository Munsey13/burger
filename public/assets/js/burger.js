$(function() {
    $(".change-burger").on("click", function(event) {

        let id = $(this).data("id");
        let letsEat = $(this).data("eaten");

        if (!letsEat) {
          letsEat = true
        } else (
          letsEat = false
        )

        let letsEatState = {
        eaten: letsEat
        };

        $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: letsEatState
        }).then(
        function() {
            location.reload();
        }
        );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();

      let burgerName = $("#burgerName").val().trim()

      if (burgerName === "") {

        let image = "assets/img/order.jpg"

        let modalImage = $("<img>")
        .attr("src", image)
        .addClass("img-fluid")
        .attr("alt", "Responsive image")
      
        $("#bonQuiQuiPhoto").html(modalImage)
        $("#complicatedOrder").modal('show')
        return
      } 

      var newBurger = {
        name: burgerName
      };

      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          bonQuiQuiPhoto()
          $("#complicatedOrder").modal('show')
        }
      );
  
      
    });
    
    $("#closeButton").on("click" , function(event){
      reloadPage()
    })
});

function reloadPage() {
  location.reload();
}