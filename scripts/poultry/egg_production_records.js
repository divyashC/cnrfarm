var table_HTML_code = ``;
database
	.ref()
	.child("poultry/egg_production/")
	.once("value", function (snapshot) {
		var poultry_data = snapshot.val();
		var poultry_tr_list = Object.keys(poultry_data).map(function (key) {
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
				poultry_code_part += `<tr>
                                        <td>${poultry[i].stock_id}</td>
                                        <td>${poultry[i].day_number}</td>
                                        <td>${poultry[i].date}</td>
                                        <td>${poultry[i].total_eggs}</td>
                                    </tr>`;
			}

			poultry_code_part += `</table></div>`;
			return poultry_code_part;
		});

		table_HTML_code += poultry_tr_list;
		document.getElementById("table_container").innerHTML = table_HTML_code;
	});
