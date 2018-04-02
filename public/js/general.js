window.onload = function() {
  $(".fadein")
    .css("visibility", "visible")
    .hide()
    .fadeIn(3000);

  $(".slideup").animate(
    {
      bottom: "0%"
    },
    { duration: 2000, queue: false },
    function() {
      // Animation complete.
    }
  );
};
