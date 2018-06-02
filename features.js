function onDeviceReady() {
	function capture() {
        navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.FILE_URI });
    }

    function onSuccess(imageURI) {
        app2.img = imageURI;
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }
}

function domload() {
    document.addEventListener("deviceready", onDeviceReady, false);
}