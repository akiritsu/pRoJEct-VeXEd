var FACEBOOK_APP_ID = '200473816679120';
var FACEBOOK_CALLBACK_URL = '//onlinenow.aws.af.cm';
var FACEBOOK_CANVAS_URL = '//apps.facebook.com/newonlinenow';
var FACEBOOK_CANVAS_URL_RAW = 'http%3A%2F%2Fapps.facebook.com%2Fnewonlinenow';

// if not in iframe, redirect to apps.FB.com url
if(self == top)
  top.location.href = FACEBOOK_CANVAS_URL;

// don't do ANYTHING until the FB JS SDK is completely loaded
window.fbAsyncInit = function() {
  
  FB.init({
    appId      : FACEBOOK_APP_ID,
    channelUrl : FACEBOOK_CALLBACK_URL + '/channel.html'
  });
  
  // where the magic happens....
  var loadFriends = function() {
    
    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        
        // the user is logged in and has authenticated the app
        
        $.getJSON('https://graph.facebook.com/fql?q=SELECT%20uid%2C%20name%2C%20pic_square%2C%20online_presence%2C%20username%20FROM%20user%20WHERE%20(uid%20IN%20(SELECT%20uid2%20FROM%20friend%20WHERE%20uid1%20%3D%20me())%20AND%20(online_presence%3D%22active%22%20OR%20online_presence%3D%22idle%22))%20ORDER%20BY%20first_name&access_token=' + response.authResponse.accessToken, function(data) {
          
          var ad_frequency = Math.floor(data.data.length / 40) + 1;
          var ad_src = "";
          
          for(var i = 0; i < $('iframe').get().length; i++) {
            if($('iframe').get(i).src.indexOf("lfstmedia") !== -1) {
              ad_src = $('iframe').get(i).src;
            }
          }
          
          // generate HTML list of friends
          var friends = [];
          $.each(data.data, function(key, val) {
            friends.push('<a class="friend" id="friend-' + key + '" href="//www.facebook.com/' + val.username + '" target="_blank"><img src="' + val.pic_square + '" class="pic" alt="' + val.name + '"><img src="/assets/img/' + val.online_presence + '.png" class="status" alt="' + val.online_presence + '"><span class="name">' + val.name + '</span></a>');
            if(ad_src != "" && data.data.length >= 16 && key != 0 && key % Math.floor(data.data.length / (ad_frequency + 1)) == 0 && key <= (data.data.length - Math.floor(data.data.length / (ad_frequency + 1))))
              friends.push('<ins style="margin:0;padding:0;position:relative;left:0;top:0;opacity:1;visibility:visible;overflow:hidden;border:none;float:none;display:inline-block;width:728px;height:90px;" id="LSM_Slot_0_wrpr"><ins style="margin:0;padding:0;position:relative;left:0;top:0;opacity:1;visibility:visible;overflow:hidden;border:none;float:none;display:block;width:728px;height:90px;" id="LSM_Slot_0"><iframe allowtransparency="false" frameborder="0" hspace="0" marginwidth="0" marginheight="0" scrolling="no" vspace="0" src="' + ad_src + '" width="728" height="90" style="margin:0;padding:0;position:relative;left:0;top:0;opacity:1;visibility:visible;overflow:hidden;border:none;float:none;" onload="LSM_SlotObj_0._f()"></iframe></ins></ins>')
          });
          
          // fade out and clear old results
          $('#friends').css({opacity: 0});
          $('#friends').html("");
          
          // figure out count verbiage with plurals and such
          var count_verbiage = "";
          if(data.data.length > 0)
            count_verbiage += data.data.length;
          else
            count_verbiage += "no";
          count_verbiage += " friend";
          if(data.data.length == 0 || data.data.length > 1)
            count_verbiage += "s";
          
          // add new result HTML
          $('<div/>', {
            'id': 'count',
            html: "You have " + count_verbiage + " online."
          }).appendTo('#friends');
          $('#friends').append(friends.join(''));
          
          // fade in new results
          $('#friends').animate({opacity: 100}, 2000);
          // just in case animating didn't work
          $('#friends').css({opacity: 100});
          
          // resize FB canvas to fit new results
          FB.Canvas.setSize();
          
        });
        
      } else {
        
        // the user is logged in to Facebook, but has not authenticated app
        top.location.href = 'https://www.facebook.com/dialog/oauth?client_id=' + FACEBOOK_APP_ID + '&redirect_uri=' + FACEBOOK_CANVAS_URL_RAW + '&scope=friends_online_presence';
        
      }
    });
  };
  
  // reload friends every x seconds
  setInterval(loadFriends, 15000);
  
  // load for the first time
  loadFriends();
  
};

// Load the FB JS SDK asynchronously
(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/all.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));
