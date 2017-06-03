/**
 * Created by zelong on 2017/6/3.
 */
        //把数字转化为图片
    function imaNumber (a){
        var temp = "";
//          var b = new String(a); 这个好像用不了
        var b = a.toString();
        for (var i=0;i< b.length;i++){
            temp = temp + '<img src="images/' + b.charAt(i) + '.png" >';
        }
        return temp;
    }

//若小于10变成0+原数，补零
function twoPlaces(a){
    if (a<10){
        return a ="0" + a;
    }else{
        return a;
    }
}

function showTime(){
    var myDate = new Date();

    //get方法获得时分秒
    var h = myDate.getHours();
    var m = myDate.getMinutes();
    var s = myDate.getSeconds();

    //将h/m/s变成两位，不足前面补零
    h = twoPlaces(h);
    m = twoPlaces(m);
    s = twoPlaces(s);

    //写入
    var timeDoc = document.getElementById("time");
    timeDoc.innerHTML =
        ( imaNumber (h) + "<img src='images/dot.png'>" + imaNumber(m) + "<img src='images/dot.png'>" + imaNumber(s));

    //每过一秒执行shouTime
    setTimeout("showTime()", 1000);
}
window.onload = showTime();

function showDial(){
//        新的时间
    var myDate = new Date();

//        获取时分秒
    var s = myDate.getSeconds();
    var h = myDate.getHours();
    var m = myDate.getMinutes();

//        计算时间
    var sd = s * 6;
    var md = m * 6 + s * 6 / 60;
    if(h>=12){
        var newH =( h - 12 ) * 30 + m * 30 / 60 ;
        var tranNH = document.getElementById("imgHour");
        tranNH.style.transform= "rotate("+ newH + "deg)";
    }else{
        var hd = h * 30 + m * 30 / 60 ;
        var tranH = document.getElementById("imgHour");
        tranH.style.transform= "rotate("+ hd + "deg)";
    }

    var tranS = document.getElementById("imgSec");
    //tranS.style.transform= "rotate("+ sd + "deg)";
    //又一种方法cssText
    tranS.style.cssText="-webkit-transform: rotate("+ sd + "deg)";
    tranS.style.cssText="-moz-transform: rotate("+ sd + "deg)";
    tranS.style.cssText="-ms-transform: rotate("+ sd + "deg)";
    tranS.style.cssText="-o-transform: rotate("+ sd + "deg)";
    tranS.style.cssText="transform: rotate("+ sd + "deg)";


    var tranM = document.getElementById("imgMin");
    tranM.style.transform= "rotate("+ md + "deg)";

    setTimeout("showDial()", 1000);
}
window.onload = showDial();

function turn() {
    var a = document.getElementById("turnDial");
    var b = document.getElementById("turnNumber");
    if ((a.style.display == "inline") &&  (b.style.display == "none") ){
        a.style.display ="none";
        b.style.display ="inline";
        document.getElementById("kedu").style.backgroundColor ="#F0F0F0";
        document.getElementById("number").style.backgroundColor ="white";
    }else{
        a.style.display ="inline";
        b.style.display ="none";
        document.getElementById("kedu").style.backgroundColor ="white";
        document.getElementById("number").style.backgroundColor ="#F0F0F0";
    }
}