const registry_form = document.getElementById("registry_form");

registry_form.addEventListener("submit", function (event) {
	event.preventDefault();
	const cattle_id = document.getElementById("cattle_id").value;
	const breed = document.getElementById("breed").value;
	const gender = document.getElementById("gender").value;
	const type = document.getElementById("type").value;
	const weight = document.getElementById("weight").value;
	const age = document.getElementById("age").value;

	var database_ref = database.ref();

	var cattle_data = {
		cattle_id: cattle_id,
		breed: breed,
		gender: gender,
		type: type,
		weight: weight,
		age: age,
		timestamp: Date.now(),
	};

	database_ref.child(`cattle/cattle_records/${cattle_id}`).set(cattle_data);

	alert("Cattle Registered successfully");

	setTimeout(() => {
		registry_form.reset();
		window.location.href = "/html/cattle/cattle_records.html";
	}, 2000);
});
