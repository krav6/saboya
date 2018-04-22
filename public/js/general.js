$(document).on("click", 'a[href^="#"]', function(event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
});

function appearCenter() {
  $("#" + this.element.id).animate(
    {
      opacity: 1,
    },
    { duration: 2000, queue: false }
  );

  this.destroy();
}

const appearCenterWaypoints = $(".effect__appear").map(function() {
  new Waypoint({
    element: document.getElementById(this.id),
    handler: appearCenter,
    offset: "90%"
  });
});
