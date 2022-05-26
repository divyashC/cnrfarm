const ai_register = document.getElementById("ai_register");

ai_register.addEventListener("submit", function (event) {
	event.preventDefault();
	const cattle_id = document.getElementById("cattle_id").value;
	const bull_id = document.getElementById("bull_id").value;
	const date = document.getElementById("date").value;
	const bull_breed = document.getElementById("bull_breed").value;

	var database_ref = database.ref();

	var cattle_data = {
		cattle_id: cattle_id,
		bull_id: bull_id,
		bull_breed: bull_breed,
		date: date,
		timestamp: Date.now(),
	};

	database_ref.child(`cattle/ai_records/${cattle_id}`).set(cattle_data);

	alert("AI Registered successfully");

	setTimeout(() => {
		ai_register.reset();
		window.location.href = "/html/cattle/ai_records.html";
	}, 2000);
});
