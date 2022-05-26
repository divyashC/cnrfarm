const vaccination_form = document.getElementById("vaccination_form");

vaccination_form.addEventListener("submit", function (event) {
	event.preventDefault();
	const cattle_id = document.getElementById("cattle_id").value;
	const text_field = document.getElementById("text_field").value;
	const date = document.getElementById("date").value;

	var database_ref = database.ref();

	var cattle_data = {
		cattle_id: cattle_id,
		text_field: text_field,
		date: date,
		timestamp: Date.now(),
	};

	database_ref
		.child(`cattle/vaccination_records/${cattle_id}`)
		.set(cattle_data);

	alert("Vaccination Registered successfully");

	setTimeout(() => {
		vaccination_form.reset();
		window.location.href = "/html/cattle/vaccination_records.html";
	}, 2000);
});
