 /*$('.dropdown-menu a').click(function(){
    //$('#selected').text($(this).text());
    console.log("asdf");
  });*/

  $(".dropdown-menu li a").click(function(){
 	var selText = $(this).text();
  	$(this).parents('.btn-group').find('.dropdown-toggle').html(selText);
});




function sum() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}

function send_offer(){
	console.log(sum(1,2,3,4,5));
}