const mortality_form = document.getElementById("mortality_form");

mortality_form.addEventListener("submit", function (event) {
	event.preventDefault();
	const stock_id = document.getElementById("stock_id").value;
	const number = document.getElementById("number").value;
	const date = document.getElementById("date").value;

	var database_ref = database.ref();

	var poultry_data = {
		stock_id: stock_id,
		number: number,
		date: date,
		timestamp: Date.now(),
	};

	database_ref.child(`poultry/mortality_records/${stock_id}`).set(poultry_data);

	alert("Mortality Registered successfully");

	setTimeout(() => {
		mortality_form.reset();
		window.location.href = "/html/poultry/mortality_records.html";
	}, 2000);
});
