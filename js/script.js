menu.onclick = 	function myFanction(){
	var x = document.getElementById('myTopnav');

	if (x.className === "topnav") {
		x.className += " responsive";
	}
	else
	{
		x.className = "topnav";
	}
}
  
 $(document).ready(function(){
    $("#myTopnav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});




$(function(){
    $('#exampleModal').arcticmodal();
});




$(function() { 
$(window).scroll(function() { 
if($(this).scrollTop() != 0) { 
$('#totop').fadeIn(); 
} else { 
$('#totop').fadeOut(); 
} 
});
$('#totop').click(function() { 
$('body,html').animate({scrollTop:0},700); 
}); 
});

(function($){

var files;

$('input[type=file]').on('change', function(){
  files = this.files;
});

$('.upload_files').on( 'click', function( event ){

  event.stopPropagation();
  event.preventDefault(); 

  if( typeof files == 'undefined' ) return;

  var data = new FormData();
  $.each( files, function( key, value ){
    data.append( key, value );
  });

  data.append( 'my_file_upload', 1 );

  $.ajax({
    url         : 'pages/submit.php',
    type        : 'POST',
    data        : data,
    cache       : false,
    dataType    : 'json',
    processData : false,
    contentType : false,
    success     : function( respond, status, jqXHR ){

      if( typeof respond.error === 'undefined' ){
        var files_path = respond.files;
        var html = '';
        $.each( files_path, function( key, val ){
           html += val +'<br>';
        } )
        $('.ajax-reply').html( html );
      }
      else {
        console.log('ОШИБКА: ' + respond.error );
      }
    },
    error: function( jqXHR, status, errorThrown ){
      console.log( 'ОШИБКА AJAX запроса: ' + status, jqXHR );
    }
  });
});
})(jQuery)


