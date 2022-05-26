const vaccination_form = document.getElementById("vaccination_form");

vaccination_form.addEventListener("submit", function (event) {
	event.preventDefault();
	const stock_id = document.getElementById("stock_id").value;
	const remarks = document.getElementById("remarks").value;
	const date = document.getElementById("date").value;

	var database_ref = database.ref();

	var poultry_data = {
		stock_id: stock_id,
		remarks: remarks,
		date: date,
		timestamp: Date.now(),
	};

	database_ref
		.child(`poultry/vaccination_records/${stock_id}`)
		.set(poultry_data);

	alert("Vaccination Registered successfully");

	setTimeout(() => {
		vaccination_form.reset();
		window.location.href = "/html/poultry.html";
	}, 2000);
});