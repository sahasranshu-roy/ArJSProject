var route = [{
	latitude: 18.5789795,
	longitude: 73.7393534
}
];
var checkpointNumber = 0
var stopTracking = false;
var gpsTimer;
AFRAME.registerComponent('gps-camera-debug', {
	init: function () {
		var camera = this.el;

		//renderCheckPoint(route[checkpointNumber].latitude, route[checkpointNumber].longitude);
		//getLocation();
		//////////////////////////////////////////////////////////////////////////////
		//		Create html
		//////////////////////////////////////////////////////////////////////////////
		var domElement = document.createElement('div');
		domElement.innerHTML = `
		<div style="position: fixed; top: 10px; width: 136%; text-align: center; z-index: 1; text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;">
		
		<section class="ui-menu">
			<button type="button" class="btn btn-primary btn-block col-sm-12 btn-lg" onclick="toogleMenu()">OPEN MENU</button>
		</section>
		<section class="ui-panel">
		<div class="container">
        <div class="row">
            <div class="col-sm-12 head page-header">
                <h1>SELECT YOUR DESTINATION</h1>
            </div>
        </div>
        <div class="row">
            <button type="button" class="btn btn-primary btn-lg col-sm-6" onclick="toggle(4)">4TH FLOOR</button>
            <button type="button" class="btn btn-primary btn-lg col-sm-6" onclick="toggle(5)">5TH FLOOR</button>
        </div>
        <div class="row meeting-4-rooms">
            <div class="col-sm-6 meeting-room" onclick="navigateTo(41)">SPHINX</div>
            <div class="col-sm-6 meeting-room" onclick="navigateTo(42)">SANCHISTUPA</div>
            <div class="col-sm-6 meeting-room" onclick="navigateTo(43)">TAJ MAHAL</div>
            <div class="col-sm-6 meeting-room" onclick="navigateTo(44)">CHAR MINAR</div>
            <div class="col-sm-6 meeting-room" onclick="navigateTo(45)">QUTUB MINAR</div>
            <div class="col-sm-6 meeting-room" onclick="navigateTo(46)">LOTUS TEMPLE</div>

            <button type="button" class="total-view btn btn-primary btn-block col-sm-12 btn-lg" onclick="create3Dview(4)">360 VIEW</button>
        </div>
        <!--<div class="row meeting-5-rooms">
            <div class="col-sm-6 meeting-room" onclick="navigateTo(51)">LOHAGAD</div>
            <div class="col-sm-6 meeting-room" onclick="navigateTo(52)">SINHAGAD</div>
            <div class="col-sm-6 meeting-room" onclick="navigateTo(53)">QUTUB MINAR</div>
            <div class="col-sm-6 meeting-room" onclick="navigateTo(54)">MEETING-ROOM-4</div>
            <div class="col-sm-6 meeting-room" onclick="navigateTo(55)">MEETING-ROOM-5</div>
            <div class="col-sm-6 meeting-room" onclick="navigateTo(56)">MEETING-ROOM-6</div>

            <button type="button" class="total-view btn btn-primary btn-block col-sm-12 btn-lg">360 VIEW</button>
		</div>-->
		</div>
		<section>
		</div>
		
		 `
		document.body.appendChild(domElement.children[0]);
		// distanceFromOrigin = document.getElementById('distanceFromOrigin');
		// currentLocation = document.getElementById('currentLocation');
		// checkPointReached = document.getElementById('checkPointReached');
		//entities = document.querySelector('#entity-0');
		// originEntities = document.querySelector('#entity-2');
		// secondAnimation = document.querySelector('#animation-last');
		// firstAnimation = document.querySelector('#animation-0');
		// destination = document.querySelector('a-text');

		// GPS TRACKING (NOT IN USE)
		// camera.addEventListener('componentchanged', function (event) {
		// 	switch (event.detail.name) {
		// 		case 'position':
		// 			var gpsPosition = camera.components['gps-camera-position'];
		// 			if (gpsPosition) {
		// 				var distance = getDistance(route[checkpointNumber].latitude, route[checkpointNumber].longitude, gpsPosition.currentCoords.latitude, gpsPosition.currentCoords.longitude);
		// 				distanceFromOrigin.innerHTML = distance + "m";
		// if (distance >= 3) {
		// 	checkPointReached.innerHTML = 'CHECKPOINT REACHED';
		// 	entities.setAttribute('visible', 'true');
		// 	originEntities.emit('done-1');
		// 	originEntities.setAttribute('visible', 'false');
		// }
		// 			}
		// 			break;
		// 	}
		// });
		// if (firstAnimation) {
		// 	firstAnimation.addEventListener('animationend', function () {
		// 		entities.emit('done-1');
		// 	});
		// }

		// secondAnimation = document.addEventListener('animationend', function () {
		// 	destination.setAttribute('visible', 'true');
		// });
	}
})


// gps tracking (NOT IN USE) //
function positionChanged(latitude, longitude) {
	var distance = getDistance(route[checkpointNumber].latitude, route[checkpointNumber].longitude, latitude, longitude);
	distanceFromOrigin.innerHTML = distance + "m";
	if (distance <= 4) {
		checkPointReached.innerHTML = 'CHECKPOINT REACHED';
		for (let item of entities) {
			item.setAttribute('visible', 'true');
		}
		for (let item of originEntities) {
			item.setAttribute('visible', 'false');
		}
		clearInterval(gpsTimer);
	}
}


function getDistance(lat1, lon1, lat2, lon2) {
	var R = 6371; // km (change this constant to get miles)
	var dLat = (lat2 - lat1) * Math.PI / 180;
	var dLon = (lon2 - lon1) * Math.PI / 180;
	var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
		Math.sin(dLon / 2) * Math.sin(dLon / 2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	var d = R * c;
	if (d > 1) return Math.round(d) + "km";
	else if (d <= 1) return Math.round(d * 1000);
	return d;
}

function getLocation() {
	if (navigator.geolocation) {
		gpsTimer = setInterval(function () {
			navigator.geolocation.getCurrentPosition(showPosition, error, geo_options)
		}, 800);
	} else {
		alert('geolocation not supported');
	}
}

function error() {
	alert("Sorry, no position available.");
}

var geo_options = {
	enableHighAccuracy: true,
	maximumAge: 30000,
	timeout: 27000
};

function showPosition(position) {
	currentLocation.innerHTML = position.coords.latitude + " " + position.coords.longitude;
	positionChanged(position.coords.latitude, position.coords.longitude);
}

function goToNextCheckPoint() {
	checkpointNumber = checkpointNumber + 1;
	renderCheckPoint(route[checkpointNumber].latitude, route[checkpointNumber].longitude);
	startGpsTracking();
}
