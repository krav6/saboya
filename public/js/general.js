$(document).on("click", 'a[href^="#"]', function(event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
});

window.onload = function() {
  $(".effect__fade-in")
    .css("visibility", "visible")
    .hide()
    .fadeIn(3000);

  $(".effect__slide-up").animate(
    {
      bottom: "0%"
    },
    { duration: 2000, queue: false }
  );
};

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
