javascript:(function() {
  var currentUrl = document.location.href;
  if(currentUrl.indexOf("youtube.com")!= -1){
    if(currentUrl.indexOf('&')== -1){
      window.open((currentUrl.replace("watch?v=","embed/")),"popup",'toolbar=no, menubar=no, resizable=yes, channelmode=yes, fullscreen=yes');
    }else{
      window.open((currentUrl.replace("watch?v=","embed/")).substring(0, currentUrl.indexOf('&')-2),"popup",'toolbar=no, menubar=no, resizable=yes');
    }
  }else
    window.open(currentUrl,"popup",'toolbar=no, menubar=no, resizable=yes');
})();
