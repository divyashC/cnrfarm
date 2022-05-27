var table_HTML_code = ``;
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
				var piggery_code_part = `<div class="table">
                        <table>
                            <tr>
                                <th>Pig ID</th>
                                <th>Date</th>
                                <th>Week No.</th>
                                <th>Weight</th>
                            </tr>`;
				var keys = Object.keys(piggery);
				for (let i = 0; i < keys.length; i++) {
					k = keys[i];
					piggery_code_part += `<tr>
											<td>${piggery[k].pig_id}</td>
											<td>${piggery[k].date}</td>
											<td>${piggery[k].week_number}</td>
											<td>${piggery[k].weight} kgs</td>
										</tr>`;
					date.push(piggery[k].date);
					weight.push(piggery[k].weight);
				}
				piggery_code_part += `</table></div>`;
				return piggery_code_part;
			})
			.join("");
		table_HTML_code += piggery_tr_list;
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
