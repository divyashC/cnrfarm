const deworming_form = document.getElementById("deworming_form");

deworming_form.addEventListener("submit", function (event) {
	event.preventDefault();
	const pig_id = document.getElementById("pig_id").value;
	const date = document.getElementById("date").value;

	var database_ref = database.ref();

	var poultry_data = {
		pig_id: pig_id,
		date: date,
		timestamp: Date.now(),
	};

	database_ref.child(`piggery/deworming_records/${pig_id}`).set(poultry_data);

	alert("Pig Registered successfully");

	setTimeout(() => {
		deworming_form.reset();
		window.location.href = "/html/piggery/deworming_records.html";
	}, 2000);
});
