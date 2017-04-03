function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
          callback(xmlHttp.responseText);
        }
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

var wotdString="";
function getWotd(){
  httpGetAsync("http://www.dictionary.com/wordoftheday/archive/2017/04/02.html", snip);
  return wotdString;
}

function snip(content) {
  wotdString = content;
}
