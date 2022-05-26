const registry_form = document.getElementById("registry_form");

registry_form.addEventListener("submit", function (event) {
	event.preventDefault();
	const stock_id = document.getElementById("stock_id").value;
	const total_chicken = document.getElementById("total_chicken").value;
	const date = document.getElementById("date").value;
	const breed = document.getElementById("breed").value;

	var database_ref = database.ref();

	var poultry_data = {
		stock_id: stock_id,
		total_chicken: total_chicken,
		date: date,
		breed: breed,
		timestamp: Date.now(),
	};

	database_ref.child(`poultry/poultry_records/${stock_id}`).set(poultry_data);

	alert("Poultry Registered successfully");

	setTimeout(() => {
		registry_form.reset();
		window.location.href = "/html/poultry/poultry_records.html";
	}, 2000);
});
