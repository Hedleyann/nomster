$(function(){function n(){a.css({left:"0px"}).animate({left:"-300px"},"slow"),$("#nav-out-temp").css({left:"300px"}).animate({left:"0px"},"slow"),$("#nav-out-temp span").removeClass("glyphicon glyphicon-chevron-left"),$("#nav-out-temp span").addClass("glyphicon glyphicon-chevron-right")}function o(){a.css({left:"-300px",visibility:"visible"}).animate({left:"0px"},"slow"),$("#nav-out-temp").css({left:"0px"}).animate({left:"300px"},"slow"),$("#nav-out-temp span").removeClass("glyphicon glyphicon-chevron-right"),$("#nav-out-temp span").addClass("glyphicon glyphicon-chevron-left")}function t(n,o){$(".notification-alert").length>0&&$(".notification-alert").css("margin-left",n),$(".notice-to-reserve-spot").length>0&&$(".notice-to-reserve-spot").css("margin-left",o)}function e(){window.innerWidth<800?null!==l&&"shown"!==l||(l="hidden",s="hidden",$("#nav-out-temp").css("left","0px"),$("#nav-out-temp").show(),a.css({left:"-300px",visibility:"hidden"}),$(".content").css("padding","0px"),$(".booyah-box").addClass("col-xs-12 col-xs-offset-1"),$(".booyah-box").css("left","0px"),$(".booyah-box").css("padding","0px 20px"),$(".booyah-box").css("margin","0px"),$("#fake-modal").css("left","0px"),t("0px","0px")):window.innerWidth>=800&&(null!==l&&"hidden"!==l||(l="shown",s="shown",a.css({left:"0px",visibility:"visible"}),$("#nav-out-temp").css("left","300px"),$("#nav-out-temp").hide(),$(".booyah-box").removeClass("col-xs-12 col-xs-offset-1"),$(".content").css("padding-left","300px"),$(".booyah-box").css("margin-left","8.3333333333%"),$("#fake-modal").css("left","290px"),t("300px","0px")))}var s="hidden",i=$("#side-nav-container").parent(),a=$("#side-nav-container"),l="shown";$(".notification-alert").length>0&&i.length>0&&$(".notification-alert").css("margin-left","300px"),$("#nav-out-temp").click(function(){"hidden"===s?(s="shown",o()):"shown"===s&&(s="hidden",n())}),$(window).resize(e),$(window).load(e)});