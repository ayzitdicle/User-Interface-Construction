function delete_offer(id){

	/*var buts =document.getElementsByTagName("button");
	
	
	for(i=0; i< buts.length; i++){
		if(buts[i].clicked == true){
			var par = buts[i].parentNode;
			var gp = par.parentNode;
			gp.removeChild(par);
		}
	}*/

	var but =document.getElementById(id);

	var par = but.parentNode;
	var gp = par.parentNode;
	gp.removeChild(par);


}

