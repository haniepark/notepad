function showDate() {
		 var monthNames = [ "January", "February", "March", "April", "May", "June",
	  						 "July", "August", "September", "October", "November", "December" ];
	  	 var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
	  	 var newDate = new Date();
	  	 newDate.setDate(newDate.getDate());    
	  	 $('.date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());
}

function addNote() {
	var toDo = $('textarea[name=toDoItem]').val().replace(/\n/g, '<br/>');	
	 	$('#note').append('<div class="notepad">' + '<div class="date"></div>' + '<span class="close">x</span>' + '<br/>' + toDo + '</div>');
}


$(document).ready(function(){

	if (localStorage.length != 0){ // if the localStorage is not empty at initial time
		var num = localStorage.length; // get the localStorage lenth
		for (var i = 0; i < num; i++){// loop through the localStorage
			if(localStorage.getItem(i)) {// if the localStorage is not null
			   	 $('#note').html(localStorage.getItem(i));// display
			}
		}
	}else{ // the localStorage is empty
		var num = 0;
	}

  	showDate();
  // click to save notes
  	$(".add").click(function(){
	    
	    addNote();
		showDate();	
	   
	   	$('#toDoForm')[0].reset();
	   	 
	   	 var value = $('#note').html();
	   	 var key =  localStorage.length;
	   	 localStorage.setItem(key, value);

	  return false;
		   	
   });
   
    
  // press enter to save notes
   	$(document).on('keypress', '#todo', function(event){
   	
   	// ternary expression
   	// if event.keyCode == true{
   	//		keycode = event.keyCode;
   	//	}else{
   	//		keycode = event.which;
   	//  }
      var keycode = (event.keyCode ? event.keyCode : event.which);

      if(event.ctrlKey && keycode == 13){ 
	 	
	 	addNote();
	 	showDate();
	 		
	   $('#toDoForm')[0].reset();
	   	 
	   	var value = $('#note').html();
	   	var key =  localStorage.length;
	   	localStorage.setItem(key, value);

	  return false;	 
	  }	  
   });
      
   
   //click to remove sticky note
   $(document).on('click', 'span', function(){
        $(this).closest('.notepad').remove();
        
   });
   
     //clear all local storage
   $('.delete').click( function() {
	   window.localStorage.clear();
	   location.reload();
	 
	 return false;
	});
	
	$("#dialog").hide();
	$("header").on('click', "#inst", function(){
		$("#dialog").dialog({ 
			position: 'top', 
			top: 100,
			height: 300,
			width: 400
		 });
	});
	
});