var runningRoute = L.map('runningRoute').setView([29.7604, -95.3698], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/davflo-16/ciwvhkb9s00ff2pnx7nix4bx8/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGF2ZmxvLTE2IiwiYSI6ImNpd3ZoZG43aDAwcnYydHNhbHNsc2FyOG8ifQ.dNmw9UwoMTPzkUCNhwh2RA', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(runningRoute);

L.Routing.control({
    waypoints: [
        L.latLng(57.74, 11.94),
        L.latLng(57.6792, 11.949)
    ],
    routeWhileDragging: true
}).addTo(runningRoute);