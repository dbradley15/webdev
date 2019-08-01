//CROSS and GRAY OUT TO DO ITEMS

$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});


$("ul").on("click", ".deleteButton", function(event) {
	//remove the li container
	//$(this).parent().remove();

	//this removes to the span
	$(this).parent().fadeOut(500, function(){
		//this refers to li, not the span
		$(this).remove();
	});
	event.stopPropagation();
});



//Add an item

var enter = 13;

$("input[type='text']").keypress(function(event) {
	if(event.which === enter) {
		var newToDo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span class=\"deleteButton\"><i class='fas fa-trash'></i></span> " + newToDo + "</li>");
	}
});




//Fade the Input in and out
$(".fa-plus").click(function() {
	//Fade Toggle function keeps track of the fade in/out state
	$("input[type='text']").fadeToggle();
});