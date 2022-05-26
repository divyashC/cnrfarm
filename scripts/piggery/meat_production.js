const meat_production_form = document.getElementById("meat_production_form");

meat_production_form.addEventListener("submit", function (event) {
	event.preventDefault();
	const pig_id = document.getElementById("pig_id").value;
	const date = document.getElementById("date").value;
	const weight = document.getElementById("weight").value;
	const week_number = document.getElementById("week_number").value;

	var database_ref = database.ref();

	var pig_data = {
		pig_id: pig_id,
		weight: weight,
		date: date,
		week_number: week_number,
		timestamp: Date.now(),
	};

	database_ref.child(`piggery/meat_production/${pig_id}`).set(pig_data);

	alert("Registered successfully");

	setTimeout(() => {
		meat_production_form.reset();
		window.location.href = "/html/piggery/meat_records.html";
	}, 2000);
});
