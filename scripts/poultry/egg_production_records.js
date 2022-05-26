var table_HTML_code = `<div class="table">
                        <table>
                            <tr>
                                <th>Stock ID</th>
                                <th>Day</th>
                                <th>Date</th>
                                <th>Total Eggs</th>
                            </tr>`;

database
	.ref()
	.child("poultry/egg_production/")
	.once("value", function (snapshot) {
		var poultry_data = snapshot.val();
		var poultry_tr_list = Object.keys(poultry_data).map(function (key) {
			var poultry = poultry_data[key];
			return `<tr>
                    <td>${poultry.stock_id}</td>
                    <td>${poultry.day_number}</td>
                    <td>${poultry.date}</td>
                    <td>${poultry.total_eggs}</td>
                </tr>`;
		});
		table_HTML_code += poultry_tr_list;
		table_HTML_code += `</table></div>`;
		document.getElementById("table_container").innerHTML = table_HTML_code;
	});
