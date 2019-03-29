

/*
 ADD FOLLOWING TO THE HEAD OF HTML

  <!-- jQuery UI 1.11.4 -->
  <script src="/static/js/jquery-ui.min.js"></script>
 
  <!-- Bootstrap 3.3.7 -->
  <link rel="stylesheet" href="/static/css/bootstrap.min.css"> 
  <script src="/static/js/bootstrap.min.js"></script>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/bootbox.js/4.4.0/bootbox.min.js"></script>
*/ 
  

function draw_popup(popup_type,popup_title,popup_message)
{
    var success = "#008548";
    var fail = "#dd4b39";
    var warning = "#f39c12";

    var type,badge;

    if (popup_type == 'Success')
    {
        type = success;
   	badge = '<p style="color:'+success+'"> SUCCESS </p>'

    }
    else if(popup_type == 'Fail')
    {
	type = fail;
	badge = '<p style="color:'+fail+'"> ERROR </p>'
    }
    else if(popup_type == 'Warning')
    {
	type = warning;
	badge = '<p style="color:'+warning+'"> WARNING </p>'
    }
	
    var popup = bootbox.dialog({
	    title: '<b>' + popup_title + '</b>',
	    message: "<div>" + badge + "&nbsp" + popup_message + "</div>",
	    buttons: {
		okay:{
			label: "<b>OK</b>",
		        className: 'btn-secondary',
		        closeButton: true,
		        callback: function() { console.log('Ok Clicked'); }
		},
	    }
    });

    popup.init(function(){
	    $(".modal-header").css("background",type);
	    $(".modal-header").css("color","#ffffff");
	    $(".modal-header").css("padding","8px");
	    $(".bootbox-close-button").css("color","#ffffff");
	    $(".bootbox-body").css("padding","15px");
            $(".btn").css("width","15%");
 	    $(".modal-footer").css("padding","8px");

    })
}



function verify_ajax_response(data,show_success=false)
{
    console.log(data)
    if (typeof(data.exception_data) == "undefined")
        draw_popup(popup_type='Warning',popup_title="Exception",popup_message="No exeception data found in AJAX response");

    else
    {
        if (data.exception_data.status == 'pass')
	    draw_popup(popup_type='Success',popup_title="Success",popup_message=data.exception_data.exception_message);

	if (data.exception_data.status == 'fail')
	    draw_popup(popup_type=data.exception_data.exception_type,popup_title="Exception",popup_message=data.exception_data.exception_message);
	
    }
}
