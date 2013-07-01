$(document).ready(function(){
  	
  // click to save notes
  	$("#button").click(function(){
	   var toDo = $('textarea[name=toDoItem]').val().replace(/\n/g, '<br/>');
	   	$('#note').append('<div class="notepad">' + toDo + '</div>');
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
      	if(keycode == '13'){
      var toDo = $('textarea[name=toDoItem]').val().replace(/\n/g, '<br/>');
     	$('#note').append('<div class="notepad">' + toDo + '</div>');
	  }
   });
      
   // sorting sticky notes
   $("#note").sortable();
   
   //double click to remove sticky notes
   $(document).on('dblclick', '.notepad', function(){
        $(this).remove();
    });
    
/* not working yet---   $(document).on('keypress', '#todo', function(event){
	  var keycode = (event.keyCode ? event.keyCode : event.which);
	  	if(keycode == '27') {
		  	$(this).remove('.notepad');
	  	} 
    });*/
    
    //date on textarea
   var monthNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];
   var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

   var newDate = new Date();
   newDate.setDate(newDate.getDate());    
  	 $('#todo').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());
	 
  	
});