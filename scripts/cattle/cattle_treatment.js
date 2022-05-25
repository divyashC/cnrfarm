const treatment_form = document.getElementById("treatment_form");

treatment_form.addEventListener("submit", function (event) {
	event.preventDefault();
	const cattle_id = document.getElementById("cattle_id").value;
	const diagnosis = document.getElementById("diagnosis").value;
	const medicine = document.getElementById("medicine").value;
	const date = document.getElementById("date").value;

	var database_ref = database.ref();

	var treatment_data = {
		cattle_id: cattle_id,
		diagnosis: diagnosis,
		medicine: medicine,
		date: date,
		timestamp: Date.now(),
	};

	database_ref
		.child(`cattle/treatment_records/${cattle_id}`)
		.set(treatment_data);

	alert("Treatment Recorded successfully");

	setTimeout(() => {
		treatment_form.reset();
		window.location.href = "/html/dairy.html";
	}, 2000);
});
