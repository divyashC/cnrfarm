var table_HTML_code = ``;

var date = [];
var eggs = [];

database
	.ref()
	.child("poultry/egg_production/")
	.once("value", function (snapshot) {
		var poultry_data = snapshot.val();
		var poultry_tr_list = Object.keys(poultry_data)
			.map(function (key) {
				var poultry = poultry_data[key];
				var poultry_code_part = `<div class="table">
                                    <h1 class="stock_title">Stock ID - ${poultry[1].stock_id}</h1>
                                    <table style="margin-bottom: 30px;">
                                        <tr>
                                            <th>Stock ID</th>
                                            <th>Day</th>
                                            <th>Date</th>
                                            <th>Total Eggs</th>
                                        </tr>`;

				for (let i = 1; i < poultry.length; i++) {
					date.push(poultry[i].date);
					eggs.push(parseInt(poultry[i].total_eggs));
					poultry_code_part += `<tr>
                                        <td>${poultry[i].stock_id}</td>
                                        <td>${poultry[i].day_number}</td>
                                        <td>${poultry[i].date}</td>
                                        <td>${poultry[i].total_eggs}</td>
                                    </tr>`;
				}

				poultry_code_part += `</table></div>`;
				return poultry_code_part;
			})
			.join("");

		table_HTML_code += poultry_tr_list;
		document.getElementById("table_container").innerHTML = table_HTML_code;

		var unique_date = [];
		var unique_eggs = [];
		for (let i = 0; i < date.length; i++) {
			if (unique_date.indexOf(date[i]) == -1) {
				unique_date.push(date[i]);
				unique_eggs.push(eggs[i]);
			} else {
				unique_eggs[unique_date.indexOf(date[i])] += eggs[i];
			}
		}

		const ctx = document.getElementById("myChart").getContext("2d");

		const data = {
			labels: unique_date,
			datasets: [
				{
					label: "Eggs in Numbers",
					backgroundColor: "#1e3f66",
					borderWidth: 3,
					data: unique_eggs,
				},
			],
		};

		const config = {
			type: "line",
			data: data,
			options: {
				plugins: {
					title: {
						text: "Eggs - Date Egg Production Graph",
						display: true,
					},
				},
				scales: {
					y: {
						beginAtZero: true,
						title: {
							display: true,
							text: "Eggs in Numbers",
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
