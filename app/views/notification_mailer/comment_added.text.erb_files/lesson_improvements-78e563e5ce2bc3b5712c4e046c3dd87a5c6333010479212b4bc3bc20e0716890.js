function setUpLessonImprovementSubmission(e,s){$("#lesson_improvement_submit_button").click(function(){var o=$("#lesson_improvement_course").val(),n=$("#lesson_improvement_lesson").val(),t=CKEDITOR.instances.suggestion.getData(),i=$("#lesson_improvement_category").val(),m={lesson_improvement:{user_id:e,course:o,lesson:n,suggested_improvement:t,category:i}};$.post(s,m).success(function(){$("#lesson_improvement_suggestion").addClass("hidden"),$("#lesson_improvement_suggestion_footer").addClass("hidden"),$(".lesson-improvement-title").addClass("hidden"),$("#lesson_improvement_response").removeClass("hidden"),$("#lesson_improvement_response_footer").removeClass("hidden"),$("#improvement_errors").addClass("hidden"),$(".videoWrapper iframe").attr("tabindex","0"),CKEDITOR.instances.suggestion.setData(""),$("button.hide_lesson_improvement").focus()}).fail(function(e){e.responseJSON.errors.suggested_improvement&&$("#improvement_errors").removeClass("hidden")})})}$(function(){$("#lesson_improvement_button").tooltip({title:"Give feedback on how to improve this lesson.",placement:"bottom"}),$("#lesson_improvement_button").click(function(){$(".tooltip").remove(),$("#myLessonImprovementModal").modal(),$(".lesson-improvement-title").removeClass("hidden"),$("#lesson_improvement_suggestion").removeClass("hidden"),$("#lesson_improvement_suggestion_footer").removeClass("hidden"),$("#lesson_improvement_response").addClass("hidden"),$("#lesson_improvement_response_footer").addClass("hidden"),$(".videoWrapper iframe").attr("tabindex","-1"),$("#myLessonImprovementModal").on("hide.bs.modal",function(){$(".videoWrapper iframe").attr("tabindex","0")})})});