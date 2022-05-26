const vaccination_form = document.getElementById("vaccination_form");

vaccination_form.addEventListener("submit", function (event) {
	event.preventDefault();
	const pig_id = document.getElementById("pig_id").value;
	const text_field = document.getElementById("text_field").value;
	const date = document.getElementById("date").value;

	var database_ref = database.ref();

	var piggery_data = {
		pig_id: pig_id,
		remarks: text_field,
		date: date,
		timestamp: Date.now(),
	};

	database_ref.child(`piggery/vaccination_records/${pig_id}`).set(piggery_data);

	alert("Vaccination Registered successfully");

	setTimeout(() => {
		vaccination_form.reset();
		window.location.href = "/html/piggery/vaccination_records.html";
	}, 2000);
});
