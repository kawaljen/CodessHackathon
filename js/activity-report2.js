$( document ).ready(function() {
  var w_height = $(document).height();
  var w_width = $(document).width();

	function dropped(event, ui) {
	 // ui.draggable.css({"top": top,"left": left}).html("<p><br> Nice!</p>").draggable( "destroy" ).css("border-color", "orange");

		$("#result").css("background-color", 'green');	
		ui.draggable.css({"border-color": "orange"});

	}  
  
  
  
  for (var i = 0; i<9; i++) {
    $("#drag").append("<div class='element-list drag local'><p><span></span>Action : call mayor </p></div>");

  }
     $(".element-list").draggable({ helper: 'clone', cursor: "move" }); 
	$("#drop").droppable({ accept: '#drag > .element-list',
							drop: function(event, ui) {
								$(this).append($(ui.draggable).clone());
								$("#drop .element-list").addClass(".item-drag");
								$(".item-drag").removeClass("ui-draggable product");
								$(".item-drag").draggable({
									containment: 'parent',
								});		
		
						}
		
		});
    $("#drop").on("drop", function(event, ui) {dropped(event, ui)});

$(".item-drag").append('<span>X</span>');
});

