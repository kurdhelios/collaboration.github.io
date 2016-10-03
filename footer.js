
// js filen är inte klar

// test 3
$(document).ready(function() {
	$('#form').on('textarea', function() {
		alert('True: alert error....');
        var textarea=$(this);
	    var message=$(this).val();
	    console.log(message);

	if(message){textarea.removeClass("invalid").addClass("valid");
	return true;
	}else{
		textarea.addClass("error");
        textarea.text("button false");
		return false;
	}	
  });
   //$("form").submit();
   //alert('False: alert error....');


});

// test 2

$(document).ready(function() {
  var uppgiftsLamnare = $("#uppgiftsLamnare");
  var dittNamn= $(".dittNamn");
  var dinAlder= $(".dinAlder");
  var radioSelection= $(".radioSelection");
  var textareainput= $(".textareainput");
  var buttonAction= $(".buttonAction");
  
  buttonAction.submit(function(){
   if(validateDittNamn()){
        return true;
      }else{
        return false;
     }
  });

  function validateDittNamn(){
  if(dittNamn.val().length < 3){
    dittNamn.addClass("error");
    dittNamn.text("bla bla bla");
    return false;
   }else{
    dittNamn.removeClass("error");
    dittNam.text("Vad är ditt namn?");
    return true;
   }
  }

});


// test 0
$(document).ready(function() {
  var uppgiftsLamnare = $("#uppgiftsLamnare");
$("form").submit(function(){
  alert('Alla obligatoriska fält validerade för att skicka....');
  return true;
  });

});


