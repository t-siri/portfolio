// Get the modal
var modalp = document.getElementById('myModalP');

$('.imgProj').click(function(){
	$("body").css("overflow", "hidden");
	$('#modalProj').empty();
	var aID = $(this).attr('href');
    var elem = $(''+aID).html();
        modalp.style.display = "block";
        //var newSrcP = $'.target').html(elem);
    	$('#modalProj').append(elem);
    });

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalp.style.display = "none";
  $("body").css("overflow", "auto");
}