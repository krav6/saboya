window.onload = function() {
  $(".fade-in")
    .css("visibility", "visible")
    .hide()
    .fadeIn(3000);

  $(".slide-up").animate(
    {
      bottom: "0%"
    },
    { duration: 2000, queue: false }
  );
};

function appearLeft() {
    $("#" + this.element.id)
      .animate(
        {
          opacity: 1,
          left: "0%"
        },
        { duration: 2000, queue: false }
      );

    this.destroy();
};

function appearRight() {
    $("#" + this.element.id)
      .animate(
        {
          opacity: 1,
          right: "0%"
        },
        { duration: 2000, queue: false }
      );

    this.destroy();
};

const appearRightWaypoints = $(".appear-right").map(
  function() {
    new Waypoint({
      element: document.getElementById(this.id),
      handler: appearRight,
      offset: "75%"
    }); }

);

const appearLeftWaypoints = $(".appear-left").map(function() {
  new Waypoint({
    element: document.getElementById(this.id),
    handler: appearLeft,
    offset: "75%"
  });
});
