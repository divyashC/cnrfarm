const mortality_form = document.getElementById("mortality_form");

mortality_form.addEventListener("submit", function (event) {
	event.preventDefault();
	const pig_id = document.getElementById("pig_id").value;
	const date = document.getElementById("date").value;

	var database_ref = database.ref();

	var pig_data = {
		pig_id: pig_id,
		date: date,
		timestamp: Date.now(),
	};

	database_ref.child(`piggery/mortality_records/${pig_id}`).set(pig_data);

	alert("Registered successfully");

	setTimeout(() => {
		mortality_form.reset();
		window.location.href = "/html/piggery/mortality_records.html";
	}, 2000);
});
