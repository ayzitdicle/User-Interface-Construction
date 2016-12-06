 /*$('.dropdown-menu a').click(function(){
    //$('#selected').text($(this).text());
    console.log("asdf");
  });*/

  $(".dropdown-menu li a").click(function(){
 	var selText = $(this).text();
  	$(this).parents('.btn-group').find('.dropdown-toggle').html(selText);
});