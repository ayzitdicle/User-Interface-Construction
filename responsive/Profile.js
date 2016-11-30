function del(clicked_id){
	var ul = document.getElementsByClassName("list-group")[0];

	var which = document.getElementById(clicked_id);

	var li = which.parentNode.parentNode;

	ul.removeChild(li);

	var x = ul.children.length;

	for(i=0; i<x; i++){
		var s = "but" + (i+1).toString();

		ul.children[i].children[2].children[0].setAttribute("id", s);
	}
}



function add(){

	var ul = document.getElementsByClassName("list-group")[0];

	var inp = document.getElementsByTagName("input")[0];

	var li = document.createElement("li");
	li.setAttribute("class", "list-group-item");

	var count = ul.children.length;

	li.setAttribute("id",count+1);

	var x = document.createElement("div");
	x.setAttribute("class","col-md-6");

	var h = document.createElement("H4");
	h.innerHTML = inp.value;

	x.appendChild(h);

	li.appendChild(x);

	var y = document.createElement("div");
	y.setAttribute("class","col-md-2");

	li.appendChild(y);

	var z = document.createElement("div");
	z.setAttribute("class","col-md-2");

	var but = document.createElement("button");
	but.setAttribute("type","button");
	but.setAttribute("class","btn btn-danger");
	but.innerHTML = "Delete";

	var s = "but" + (count+1).toString();

	but.setAttribute("id",s);
	
	but.setAttribute("onclick","del(this.id)");

	z.appendChild(but);

	li.appendChild(z);

	ul.appendChild(li);
}