var table_HTML_code = `<div class="table">
                        <table>
                            <tr>
                                <th>Pig ID</th>
                                <th>Date</th>
                                <th>Week No.</th>
                                <th>Weight</th>
                            </tr>`;
var date = [];
var weight = [];

database
	.ref()
	.child("piggery/meat_production/")
	.once("value", function (snapshot) {
		var piggery_data = snapshot.val();
		var piggery_tr_list = Object.keys(piggery_data)
			.map(function (key) {
				var piggery = piggery_data[key];
				date.push(piggery.date);
				weight.push(piggery.weight);
				return `<tr>
                    <td>${piggery.pig_id}</td>
                    <td>${piggery.date}</td>
                    <td>${piggery.week_number}</td>
                    <td>${piggery.weight} kgs</td>
                </tr>`;
			})
			.join("");
		table_HTML_code += piggery_tr_list;
		table_HTML_code += `</table></div>`;
		document.getElementById("table_container").innerHTML = table_HTML_code;

		const ctx = document.getElementById("myChart").getContext("2d");
		const labels = ["January", "February", "March", "April", "May", "June"];

		const data = {
			labels: date,
			datasets: [
				{
					label: "Weight in Kgs",
					backgroundColor: "#1e3f66",
					borderWidth: 3,
					data: weight,
				},
			],
		};

		const config = {
			type: "line",
			data: data,
			options: {
				plugins: {
					title: {
						text: "Weight - Date Meat Production Graph",
						display: true,
					},
				},
				scales: {
					y: {
						beginAtZero: true,
						title: {
							display: true,
							text: "Weight in Kgs",
						},
					},
					x: {
						beginAtZero: true,
						title: {
							display: true,
							text: "Date",
						},
					},
				},
			},
		};

		const myChart = new Chart(document.getElementById("myChart"), config);
	});
