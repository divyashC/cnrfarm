const egg_production_form = document.getElementById("egg_production_form");

egg_production_form.addEventListener("submit", function (event) {
	event.preventDefault();
	const stock_id = document.getElementById("stock_id").value;
	const day_number = document.getElementById("day_number").value;
	const date = document.getElementById("date").value;
	const total_eggs = document.getElementById("total_eggs").value;

	var database_ref = database.ref();

	var poultry_data = {
		stock_id: stock_id,
		day_number: day_number,
		date: date,
		total_eggs: total_eggs,
		timestamp: Date.now(),
	};

	database_ref
		.child(`poultry/egg_production/${stock_id}/${day_number}`)
		.set(poultry_data);

	alert("Egg Production Registered successfully");

	setTimeout(() => {
		egg_production_form.reset();
		window.location.href = "/html/poultry/egg_production_records.html";
	}, 2000);
});
