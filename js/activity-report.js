 $(document).ready(function(){
	  $(function() {
		  
		$(".element-chosen").click( function(){
		  
		  
		$("#drag").draggable({ 
		  revert: "invalid",
		  revertDuration: 200,
		  cursor: "move", 
		  helper: "clone",
		  cursorAt: { top: 17, left: 80 },
		  start: function(event, ui) {
			$('#drop')
			  .removeClass("ui-highlight")
				.find("p")
				  .html("Drop here");
		  },
		  drag: function(event, ui) {
			$('#drop')
			  .addClass("ui-selected")
			  .find("p")
				.html("Yes, here !");
				
		   $(".ui-draggable-dragging")
			 .find("p")
			   .html("Let's go");
		  }
		});
	  
		$("#drop").droppable({
		  activeClass: "ui-hover",
		  hoverClass: "ui-active",
		  drop: function( event, ui ) {
			$(this)
			  .addClass("ui-highlight")
			  .find("p")
				.html("Got it !");
		  }
		});
		
		
		});
		
		
		
	  });


});
