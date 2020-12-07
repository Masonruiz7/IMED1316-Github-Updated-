// A $( document ).ready() block.
$( document ).ready(function() {
    //console.log( "ready!" );
    //alert("test");
  
    $(document).on("change", "#t-shirt", chkTshirt);
  
  // begin chkTshirt function
  function chkTshirt() {
    
    var tshirt = $('#t-shirt').val();
   //alert(tshirt);
    
    // begin if tshirt
    if (tshirt == 'CUSTOM') {
     // alert('works');
     $('#custom').removeAttr('disabled'); // removed disabled
     $("#custom").attr("required", true) 
    }// end if tshirt
    else {
      $("#custom").attr('disabled', true); // disabled again
      $("#custom").val(''); // set value to empty
      $('#custom').removeAttr('required'); // removed required
    }
  }// end of function
  
})