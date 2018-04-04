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

function appearLeft() {
  $("#" + this.element.id).animate(
    {
      opacity: 1,
      left: "0%"
    },
    { duration: 2000, queue: false }
  );

  this.destroy();
}

function appearRight() {
  $("#" + this.element.id).animate(
    {
      opacity: 1,
      right: "0%"
    },
    { duration: 2000, queue: false }
  );

  this.destroy();
}

const appearRightWaypoints = $(".effect__appear--right").map(function() {
  new Waypoint({
    element: document.getElementById(this.id),
    handler: appearRight,
    offset: "90%"
  });
});

const appearLeftWaypoints = $(".effect__appear--left").map(function() {
  new Waypoint({
    element: document.getElementById(this.id),
    handler: appearLeft,
    offset: "90%"
  });
});
