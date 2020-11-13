var b = "Fired";
var ab;
var req = "https://v1.alapi.cn/api/music/search?keyword=" + b;
console.log(req);
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var variable = new XMLHttpRequest();
variable.open("GET", req, false);
variable.onreadystatechange = function() {
    if (variable.readyState === 4 && variable.status === 200) {
        let bq = variable.responseText;
        ab = JSON.parse(bq);

        if (ab == null) {
            console.log("没有对应的歌曲");
        }

    } else {

        console.log("wocao: " + variable.status);
        console.log(variable.statusText);
    }
}

variable.send();

for (let w = 0; w < ab.data.songs.length; w++) {
    console.log(ab.data.songs[w].id);
    console.log(ab.data.songs[w].name);
    console.log(ab.data.songs[w].artists[0].name);
    console.log(ab.data.songs[w].artists[0].img1v1Url);
    let b = `https://api.imjad.cn/cloudmusic/?type=song&id=${ab.data.songs[w].id}&br=128000`
    search(b);

}

function search(urllist) {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var tww = new XMLHttpRequest();
    tww.open("GET", urllist, false);
    tww.onreadystatechange = function() {
        if (tww.readyState === 4 && tww.status === 200) {
            let bq2 = tww.responseText;
            abw1 = JSON.parse(bq2);
            console.log(abw1.data[0].url);
        }
    }
    tww.send();

}