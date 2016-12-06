function delete_request1(){
	var parent = document.getElementById("div1");
	while (parent.firstChild) {
    	parent.removeChild(parent.firstChild);
	}


}

function delete_request2(){
	var parent = document.getElementById("div2");
	var child1 = document.getElementById("req2");
	var child2 = document.getElementById("sib");
	
    parent.removeChild(child1);
	parent.removeChild(child2);


}

function accept_offer(){
	var ch1 = document.getElementById("ch1");

	var req_tag = document.getElementById("req1_tag");

	var ch1_tag = document.getElementById("ch1_tag");

	var parent = document.getElementById("div1");

	var hele = document.getElementById("hele");


	var acc_but = document.getElementById("accept_but1");
	var dec_but = document.getElementById("decline_but1");

	if(ch1.checked== true && ch1_tag.innerHTML=="Pending"){
		ch1_tag.setAttribute("class","tag tag-success");
		ch1_tag.innerHTML = "Accepted";

		req_tag.innerHTML="";

		parent.removeChild(hele);
		acc_but.innerHTML ="Confirm";
		dec_but.innerHTML ="Complain";
		//parent.removeChild(acc_but);
		//parent.removeChild(dec_but);


		//ch1.disabled = true;
		ch1.checked = false;

	}
	
}

function decline_offer(){

	var ch1 = document.getElementById("ch1");
	var ch1_tag = document.getElementById("ch1_tag");

	if(ch1.checked== true){
		ch1_tag.setAttribute("class","tag tag-danger");
		ch1_tag.innerHTML = "Declined";

		ch1.disabled = true;
		ch1.checked = false;

	}
}

function accept_service(){

	var req = document.getElementById("last_req");

	var off = document.getElementById("last_off");

	var ab = document.getElementById("ab");
	var cb = document.getElementById("cb");

	var parent = document.getElementById("div2");


	if(last_off.checked == true){

		var x = document.createElement("SPAN");
		x.setAttribute("class","tag tag-info");
		x.innerHTML ="Service Confirmed";
		req.appendChild(x);

		parent.removeChild(ab);
		parent.removeChild(cb);

		last_off.disabled = true;
		last_off.checked = false;


	}
}



function complain(){

	var req = document.getElementById("last_req");

	var off = document.getElementById("last_off");

	var ab = document.getElementById("ab");
	var cb = document.getElementById("cb");

	var parent = document.getElementById("div2");

	if(last_off.checked == true){

		var x = document.createElement("SPAN");
		x.setAttribute("class","tag tag-danger");
		x.innerHTML ="Complain about the service is issued";
		req.appendChild(x);

		parent.removeChild(ab);
	
		parent.removeChild(cb);

		last_off.disabled = true;
		last_off.checked = false;


	}
}