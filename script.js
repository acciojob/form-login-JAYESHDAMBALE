function getFormvalue() {
    //Write your code here

	event.preventDefault();

	let firstName = document.querySelector("input[name='fname']").value.trim();
	let lastname = document.querySelector("input[name = 'lname']").value.trim();

	if( !firstName || !lastname){
		alert("Please enter both first and last name");
		return;
	}

	let fullname = `${firstName} ${lastname}`;

	alert(`${fullname}`);
}

