/*// SOCIAL MEDIA NAVIGATION - TAKES A NAV CLASS = SOCIAL MEDIA ICONS

// GENERATES A UL > LI'S > A AND IMG

// SELF EXECUTING FUNCTION, LOCATES ONE OR MORE DOM ELEMENTS, REPLACES DOM ELEMENTS */

var socialMedia = {
	facebook: "https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-512.png",
	twitter: "https://cdn1.iconfinder.com/data/icons/logotypes/32/square-twitter-512.png",
	instagram: "https://cdn.shopify.com/s/files/1/0070/7032/files/1444853979_Instagram.png",
	skype: "http://1u88jj3r4db2x4txp44yqfj1.wpengine.netdna-cdn.com/wp-content/uploads/2014/11/skype-logo1-930x538.png"
}

var logoLoop = function () {
	var myList = '<ul>';
	var myNav = document.querySelectorAll('.socialmediaicons');

	for(var key in arguments[0]) {
	
	myList += '<li><a href="' + socialMedia[key] + '">' + '<img src="' + socialMedia[key] + '" alt=""></a>';
	console.log(myList);
	}	
	myList += '</ul>';

	for( var i = myNav.length - 1; i >= 0; i--) {
		myNav[i].innerHTML = myList;
	}
}(socialMedia)

