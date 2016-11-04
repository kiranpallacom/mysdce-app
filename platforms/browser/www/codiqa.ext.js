(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );
    
    function onDeviceReady() {
		navigator.splashscreen.hide();
		console.log("Cordova is READY!");
		
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );

		$("#btnName").on("click", function(){getName()});
		function getName() {
			console.log("we clicked, again!");
			//var userName = prompt("Enter name:"); //Store name via TEMPORARY Variable
			localStorage.userName = prompt("Enter name:");
			//console.log(userName);
			//$(".welcomeMsg").html(", " + userName + "!"); // Retrieve TMP variable
			if((localStorage.userName === undefined) || (localStorage.userName === "null") || (localStorage.userName === "")) { 
				switch(localStorage.userName) {
					case "":
						alert("Please enter a valid name!");;
						break;
					case "null":
						console.log("No name saved yet");
						break;
					case undefined:
						console.log("No name saved yet");
						break;
					default:
						console.log(localStorage.userName);
						break;
				}
			} else {
				$(".welcomeMsg").html(", " + localStorage.userName.replace(/[^a-zA-Z0-9\s]/g,"") + "!");
			}
		} // END getName()

		function showName() {
			if((localStorage.userName === undefined) || (localStorage.userName === "null") || (localStorage.userName === "")) { 
				console.log("No name saved yet");
			} else {
				$(".welcomeMsg").html(", " + localStorage.userName.replace(/[^a-zA-Z0-9\s]/g,"") + "!");
			}
		} // END showName()

		showName();
		
		$(".btnURL").on("click", function(){loadURL($(this))});
		function loadURL(theObj) {
			cordova.InAppBrowser.open(theObj.data("url"), "_blank", "location=yes");
		}
    }; // END onDeviceReady()

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();








