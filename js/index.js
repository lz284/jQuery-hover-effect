$(function() {
	$('.course_item').mouseenter(function() {
		$(this).find('.course_item_name').hide();
		$(this).find('.course_item_modal').addClass('active')
	}).mouseleave(function() {
		$(this).find('.course_item_name').show();
		$(this).find('.course_item_modal').removeClass('active')
	})
})