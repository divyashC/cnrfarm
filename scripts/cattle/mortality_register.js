const mortality_form = document.getElementById("mortality_form");

mortality_form.addEventListener("submit", function (event) {
	event.preventDefault();
	const cattle_id = document.getElementById("cattle_id").value;
	const date = document.getElementById("date").value;

	var database_ref = database.ref();

	var cattle_data = {
		cattle_id: cattle_id,
		date: date,
		timestamp: Date.now(),
	};

	database_ref.child(`cattle/mortality_records/${cattle_id}`).set(cattle_data);

	alert("Registered successfully");

	setTimeout(() => {
		mortality_form.reset();
		window.location.href = "/html/cattle/mortality_record.html";
	}, 2000);
});
