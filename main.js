
var myCookies = {}

var meat = 0;
var meatPerSecond = 0;
var meatPerClick = 1;
var tickspeed = 1000;

function meatClick() {
    meat = meat + meatPerClick;
    document.getElementById("totalMeatID").innerHTML = meat + " Meat";
}





function saveCookies() {
    myCookies["_meat"] = meat;
    myCookies["_meatPerSecond"] = meatPerSecond;

    document.cookie = "";

    var expiresAttrib = new Date(Date.now() + 60*1000).toString();
    var cookieString = "";

    for(var key in myCookies){
        cookieString = key + "=" + myCookies[key] + ";" + expiresAttrib;
        document.cookie = cookieString;
    }
}

