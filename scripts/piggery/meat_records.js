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
				var piggery_code_part = `<br><br><div class="table">
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
					weight.push(parseFloat(piggery[k].weight));
				}
				piggery_code_part += `</table></div><br><br>`;
				return piggery_code_part;
			})
			.join("");
		table_HTML_code += piggery_tr_list;
		document.getElementById("table_container").innerHTML = table_HTML_code;

		const ctx = document.getElementById("myChart").getContext("2d");
		const labels = ["January", "February", "March", "April", "May", "June"];

		var unique_date = [];
		var unique_weight = [];
		for (let i = 0; i < date.length; i++) {
			if (unique_date.indexOf(date[i]) == -1) {
				unique_date.push(date[i]);
				unique_weight.push(weight[i]);
			} else {
				unique_weight[unique_date.indexOf(date[i])] += weight[i];
			}
		}

		var unique_date_weight = {};
		for (let i = 0; i < unique_date.length; i++) {
			unique_date_weight[unique_date[i]] = unique_weight[i];
		}

		var sorted_date_weight = {};
		var sorted_date = Object.keys(unique_date_weight).sort();
		for (let i = 0; i < sorted_date.length; i++) {
			sorted_date_weight[sorted_date[i]] = unique_date_weight[sorted_date[i]];
		}

		unique_date = [];
		unique_weight = [];
		for (let i = 0; i < sorted_date.length; i++) {
			unique_date.push(sorted_date[i]);
			unique_weight.push(sorted_date_weight[sorted_date[i]]);
		}

		const data = {
			labels: unique_date,
			datasets: [
				{
					label: "Weight in Kgs",
					backgroundColor: "#1e3f66",
					borderWidth: 3,
					data: unique_weight,
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
