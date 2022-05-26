const registry_form = document.getElementById("registry_form");

registry_form.addEventListener("submit", function (event) {
	event.preventDefault();
	const pig_id = document.getElementById("pig_id").value;
	const gender = document.getElementById("gender").value;
	const breed = document.getElementById("breed").value;
	const type = document.getElementById("type").value;
	const age = document.getElementById("age").value;

	var database_ref = database.ref();

	var poultry_data = {
		pig_id: pig_id,
		gender: gender,
		type: type,
		breed: breed,
		age: age,
		timestamp: Date.now(),
	};

	database_ref.child(`piggery/piggery_records/${pig_id}`).set(poultry_data);

	alert("Pig Registered successfully");

	setTimeout(() => {
		registry_form.reset();
		window.location.href = "/html/piggery/pig_records.html";
	}, 2000);
});
