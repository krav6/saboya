$(document).on("click", 'a[href^="#"]', function(event) {
  event.preventDefault();

  if($.attr(this, "href").indexOf("carousel") !== -1){
    return;
  }

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
});

function appearCenter() {
  $("#" + this.element.id).css({ opacity: "1" });

  this.destroy();
}

window.onload = function() {
  $("body").css({ "background-position": "-100% 0%" });
  $(".section--main").css({ left: "0%" });
  $(".section--main__image").css({ opacity: "1" });

  setTimeout(function() {
    $(".section--content__photo-container").css({ visibility: "visible" });

    $(".effect__appear--center").map(
      function() {
        new Waypoint({
          element: document.getElementById(this.id),
          handler: appearCenter,
          offset: "90%"
        });
      }
    );
  }, 2500);
};

function initMap() {
  var styledMapType = new google.maps.StyledMapType([
    {
      featureType: "all",
      elementType: "geometry.stroke",
      stylers: [
        {
          visibility: "simplified"
        }
      ]
    },
    {
      featureType: "administrative",
      elementType: "all",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "administrative",
      elementType: "labels",
      stylers: [
        {
          visibility: "simplified"
        },
        {
          color: "#a31645"
        }
      ]
    },
    {
      featureType: "landscape",
      elementType: "all",
      stylers: [
        {
          weight: "3.79"
        },
        {
          visibility: "on"
        },
        {
          color: "#ffecf0"
        }
      ]
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [
        {
          visibility: "on"
        }
      ]
    },
    {
      featureType: "landscape",
      elementType: "geometry.stroke",
      stylers: [
        {
          visibility: "on"
        }
      ]
    },
    {
      featureType: "poi",
      elementType: "all",
      stylers: [
        {
          visibility: "simplified"
        },
        {
          color: "#a31645"
        }
      ]
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          saturation: "0"
        },
        {
          lightness: "0"
        },
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "poi",
      elementType: "geometry.stroke",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "poi.business",
      elementType: "all",
      stylers: [
        {
          visibility: "simplified"
        },
        {
          color: "#d89ca8"
        }
      ]
    },
    {
      featureType: "poi.business",
      elementType: "geometry",
      stylers: [
        {
          visibility: "on"
        }
      ]
    },
    {
      featureType: "poi.business",
      elementType: "geometry.fill",
      stylers: [
        {
          visibility: "on"
        },
        {
          saturation: "0"
        }
      ]
    },
    {
      featureType: "poi.business",
      elementType: "labels",
      stylers: [
        {
          color: "#a31645"
        }
      ]
    },
    {
      featureType: "poi.business",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "simplified"
        },
        {
          lightness: "84"
        }
      ]
    },
    {
      featureType: "road",
      elementType: "all",
      stylers: [
        {
          saturation: -100
        },
        {
          lightness: 45
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "all",
      stylers: [
        {
          visibility: "simplified"
        }
      ]
    },
    {
      featureType: "road.arterial",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "transit",
      elementType: "all",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "water",
      elementType: "all",
      stylers: [
        {
          color: "#5E8C61"
        },
        {
          visibility: "on"
        }
      ]
    },
    {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [
        {
          visibility: "on"
        },
        {
          color: "#fedce3"
        }
      ]
    },
    {
      featureType: "water",
      elementType: "labels",
      stylers: [
        {
          visibility: "off"
        }
      ]
    }
  ]);

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  var map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 48.859785,
      lng: 2.294117
    },
    zoom: 11,
    mapTypeControlOptions: {
      mapTypeIds: ["roadmap", "satellite", "hybrid", "terrain", "styled_map"]
    }
  });

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set("styled_map", styledMapType);
  map.setMapTypeId("styled_map");
}
