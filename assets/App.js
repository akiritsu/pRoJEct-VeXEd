var FACEBOOK_APP_ID = "2467576639954868",
  FACEBOOK_CALLBACK_URL = "//kue.github.io/FriendOnline",
  FACEBOOK_CANVAS_URL = "//apps.facebook.com/2467576639954868",
  FACEBOOK_CANVAS_URL_RAW = "http%3A%2F%2Fapps.facebook.com%2Fonline-friend";
self == top && (top.location.href = FACEBOOK_CANVAS_URL);
window.fbAsyncInit = function () {
  FB.init({
    appId: FACEBOOK_APP_ID,
    channelUrl: FACEBOOK_CALLBACK_URL + "/channel.html"
  });
  var e = function () {
    FB.getLoginStatus(function (e) {
      e.status === "connected" ? $.getJSON("https://graph.facebook.com/fql?q=SELECT%20uid%2C%20name%2C%20pic_square%2C%20online_presence%2C%20username%20FROM%20user%20WHERE%20(uid%20IN%20(SELECT%20uid2%20FROM%20friend%20WHERE%20uid1%20%3D%20me())%20AND%20(online_presence%3D%22active%22%20OR%20online_presence%3D%22idle%22))%20ORDER%20BY%20first_name&access_token=" + e.authResponse.accessToken, function (e) {
        var t = Math.floor(e.data.length / 40) + 1,
          n = "";
        for (var r = 0; r < $("iframe").get().length; r++) $("iframe").get(r).src.indexOf("lfstmedia") !== -1 && (n = $("iframe").get(r).src);
        var i = [];
        $.each(e.data, function (r, s) {
          i.push('<a class="friend" id="friend-' + r + '" href="//www.facebook.com/' + s.username + '" target="_blank"><img src="' + s.pic_square + '" class="pic" alt="' + s.name + '"><img src="' + s.online_presence + '.png" class="status" alt="' + s.online_presence + '"><span class="name" style="opacity:0.6;">' + s.name + "</span></a>");
          n != "" && e.data.length >= 16 && r != 0 && r % Math.floor(e.data.length / (t + 1)) == 0 && r <= e.data.length - Math.floor(e.data.length / (t + 1)) && i.push('<ins><iframe allowtransparency="false" frameborder="0" hspace="0" marginwidth="0" marginheight="0" scrolling="no" vspace="0" src="' + n + '" width="316" height="90" style="margin:0;padding:0;position:relative;left:0;top:0;opacity:1;visibility:visible;overflow:hidden;border:none;float:none;"></iframe></ins>')
        });
        $("#friends").css({
          opacity: 0
        });
        $("#friends").html("");
        var s = "";
        e.data.length > 0 ? s += e.data.length : s += " ไม่มี";
        s += " คน";
        if (e.data.length == 0 || e.data.length > 1) s += "<a class='i i_icon'></a>";
        $("<div/>", {
          id: "count",
          html: "<a class='img sp_2x6xe0 sx_68db08'></a> เพื่อนของคุณ " + s + "ออนไลน์.<span class='_1az _1a-'></span>"
        }).appendTo("#friends");
        $("#friends").append(i.join(""));
        $("#friends").animate({
          opacity: 100
        }, 2e3);
        $("#friends").css({
          opacity: 100
        });
        FB.Canvas.setSize()
      }) : top.location.href = "https://www.facebook.com/dialog/oauth?client_id=" + FACEBOOK_APP_ID + "&redirect_uri=" + FACEBOOK_CANVAS_URL_RAW + "&scope=friends_online_presence"
    })
  };
  setInterval(e, 15e3);
  e()
};
(function (e, t, n) {
  var r, i = e.getElementsByTagName(t)[0];
  if (e.getElementById(n)) return;
  r = e.createElement(t);
  r.id = n;
  r.src = "//connect.facebook.net/en_US/all.js";
  i.parentNode.insertBefore(r, i)
})(document, "script", "facebook-jssdk");
