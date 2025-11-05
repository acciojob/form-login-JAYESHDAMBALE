function getFormvalue() {
    //Write your code here

	event.preventDefault();

	let fname = document.querySelector("input[name='fname']").value.trim();
	let lname = document.querySelector("input[name = 'lname']").value.trim();

	if( !fname || !lname){
		alert("Please enter both first and last name");
		return;
	}

	let fullname = `${fname} ${lname}`;

	alert(`${fullname}`);
}

