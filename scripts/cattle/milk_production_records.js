var table_HTML_code = ``;

var date = [];
var milk = [];

database
	.ref()
	.child("cattle/mproduction_records/")
	.once("value", function (snapshot) {
		var cattle_data = snapshot.val();
		var milk_tr_list = Object.keys(cattle_data)
			.map(function (key) {
				var cattle = cattle_data[key];
				var cattle_code_part = `<div class="table">
                                    		<h1 class="stock_title">Cattle ID - ${cattle[1].cattle_id}</h1>
                                    		<table style="margin-bottom: 30px;">
											<tr>
												<th>Cattle ID</th>
                                            	<th>Day</th>
												<th>Date</th>
												<th>Total Milk Quantity(L)</th>
											</tr>`;

				for (let i = 1; i < cattle.length; i++) {
					date.push(cattle[i].date);
					milk.push(parseInt(cattle[i].milk_quantity));
					cattle_code_part += `<tr>
                                        <td>${cattle[i].cattle_id}</td>
                                        <td>${cattle[i].day_number}</td>
                                        <td>${cattle[i].date}</td>
                                        <td>${cattle[i].milk_quantity}</td>
                                    </tr>`;
				}

				cattle_code_part += `</table></div>`;
				return cattle_code_part;
			})
			.join("");

		table_HTML_code += milk_tr_list;
		document.getElementById("table_container").innerHTML = table_HTML_code;

		var unique_date = [];
		var unique_milk = [];
		for (let i = 0; i < date.length; i++) {
			if (unique_date.indexOf(date[i]) == -1) {
				unique_date.push(date[i]);
				unique_milk.push(milk[i]);
			} else {
				unique_milk[unique_date.indexOf(date[i])] += milk[i];
			}
		}

		const ctx = document.getElementById("myChart").getContext("2d");

		const data = {
			labels: unique_date,
			datasets: [
				{
					label: "Milk in Litres",
					backgroundColor: "#1e3f66",
					borderWidth: 3,
					data: unique_milk,
				},
			],
		};

		const config = {
			type: "line",
			data: data,
			options: {
				plugins: {
					title: {
						text: "Milk vs Date, Milk Production Graph",
						display: true,
					},
				},
				scales: {
					y: {
						beginAtZero: true,
						title: {
							display: true,
							text: "Milk in Litres",
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
