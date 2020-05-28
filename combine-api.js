var resultContainer = document.querySelector('#result');

var queryTerm = '';

var newURL = '';

var queryURLBase = "https://data.usajobs.gov/api/Search?Organization=AF"


$('#map-canvas').on('click', function() {
  $('#result').remove();
  $('#searchName').val('');
})


var host = 'data.usajobs.gov';
var userAgent = 'XXXXXXX@gmail.com';
var authKey = 'XXXXXXX=';
var apiUrl = "https://data.usajobs.gov/api/Search?ResultsPerPage=500&Organization=AF"
var content = "";
$.ajax({
  type: 'GET',
  url: apiUrl,
  headers: {
    "Host": host,
    "User-Agent": userAgent,
    "Authorization-Key": authKey
  },
  success: function (response) {

    var results = response.SearchResult.SearchResultItems;

    var locations = [];

    results.forEach(function (result) {
      var jobInfo = result.MatchedObjectDescriptor;
      var jobLocations = jobInfo.PositionLocation;

      jobLocations.forEach(function (location) {
        var key = location.LocationName;

        if (locations[key] == undefined) {
          var position = new google.maps.LatLng(location.Latitude, location.Longitude);

          locations[key] = {
            position: position,
            title: location.LocationName,
            jobs: [],
          };
        }

        var job = {
          PositionURI: jobInfo.PositionURI,
          PositionTitle: jobInfo.PositionTitle,
        };

        locations[key].jobs.push(job);
      });

    });

    function initialize(locations) {

      var icon = {
        url: "http://elizabethrodricks.com/images5/blue-marker.png",
        scaledSize: new google.maps.Size(30, 46)
      };

      var coordinates = [{lat: 40.8005877, lng: -96.7609396}, {lat: 40.8005877, lng: -96.7609396}];

      var map = new google.maps.Map(document.getElementById('map-canvas'), {
        center: coordinates[0],
        zoom: 5,
        styles: [
          {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
          {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
          {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
          {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{color: '#263c3f'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{color: '#6b9a76'}]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#38414e'}]
          },
          {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{color: '#212a37'}]
          },
          {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9ca5b3'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: '#746855'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{color: '#1f2835'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{color: '#f3d19c'}]
          },
          {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{color: '#2f3948'}]
          },
          {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{color: '#17263c'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{color: '#515c6d'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{color: '#17263c'}]
          }
        ]
      });

      var infowindow = new google.maps.InfoWindow();

      for (var key in locations) {
        var location = locations[key];
        var marker = new google.maps.Marker({
          position: location.position,
          map: map,
          icon: icon,
          title: location.title,
          animation: google.maps.Animation.DROP,
          jobs: location.jobs,
        });

        google.maps.event.addListener(marker, 'click', (function (marker, content, infowindow) {
          return function () {
            var content = `<div class="topList">Jobs In ${marker.title}</div>`;
            marker.jobs.forEach(function (job) {
              content = `${content} <div class="center2"><a href="${job.PositionURI}" target="_blank">${job.PositionTitle}</a>`

            });

            infowindow.setContent(content);
            infowindow.open(map, marker);
          };
        })(marker, content, infowindow));
      }
    }

    initialize(locations);
  }


});
