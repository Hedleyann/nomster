function interestedInFullProgram(e,i,n){var t={full_program_interest:{user_id:e,when_expressed_interest:i}};$.ajax({url:"/express-interest-full-program",type:"POST",data:t}),$("#admission_nudge").hide(),$("#admission_nudge_response_yes").show(),gaEventTrigger("Free Trial","Select Yes",n)}function notInterestedInFullProgram(e){$("#admission_nudge").hide(),$("#admission_nudge_response_no").show(),gaEventTrigger("Free Trial","Select No",e)}function dismissAdmissionNudge(e){$("#admission_nudge").hide(),gaEventTrigger("Free Trial","Select Dismiss",e)}function setUpForDaysRemainingNotification(e,i){$(function(){$("span:contains("+i+")").parent().addClass("expressed_interest_in_full_program");var n=$(".expressed_interest_in_full_program a.close").first(),t=$(".expressed_interest_in_full_program a[href='javascript:void(0);']:not(.close)").first();n.click(function(){gaEventTrigger("Free Trial","Select Dismiss","Expiration Notification Bar")}),t.click(function(){interestedInFullProgram(e,"2_days_remaining","Expiration Notification Bar");var i=n.data("id");updateClicked(i,function(){n.parent().fadeOut(100);var e="          <div class='notification-alert notification-alert-info'>            <a class='mark_as_clicked_notification close' id='temp_notification'>&times;</a>            Thanks for letting us know!          </div>        ";$(e).insertAfter($(".notification-alert:last")),$("#temp_notification").click(function(){$(this).parent().hide()})})})})}function sendEmail(e,i,n){var t=$(event.srcElement).first(),s={institution_name:i,student_name:n};$.ajax({url:e,type:"POST",data:s}).success(function(){t.prop("disabled",!0),t.text("We'll be in touch soon!")})}function hideYesResponse(){$("#admission_nudge_response_yes").hide()}