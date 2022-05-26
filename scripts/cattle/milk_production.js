const milk_production_form = document.getElementById("milk_production_form");

milk_production_form.addEventListener("submit", function (event) {
	event.preventDefault();
	const cattle_id = document.getElementById("cattle_id").value;
	const milk_quantity = document.getElementById("milk_quantity").value;
	const date = document.getElementById("date").value;
	const day_number = document.getElementById("day_number").value;

	var database_ref = database.ref();

	var cattle_data = {
		cattle_id: cattle_id,
		day_number: day_number,
		milk_quantity: milk_quantity,
		date: date,
		timestamp: Date.now(),
	};

	database_ref
		.child(`cattle/mproduction_records/${cattle_id}/${day_number}`)
		.set(cattle_data);

	alert("Registered successfully");

	setTimeout(() => {
		milk_production_form.reset();
		window.location.href = "/html/cattle/milk_production_records.html";
	}, 2000);
});
