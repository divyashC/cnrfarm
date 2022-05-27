var table_HTML_code = ``;

database
	.ref()
	.child("poultry/vaccination_records/")
	.once("value", function (snapshot) {
		var poultry_data = snapshot.val();
		var poultry_tr_list = Object.keys(poultry_data)
			.map(function (key) {
				var poultry = poultry_data[key];
				var poultry_code_part = `<div class="table">
                        <table>
                            <tr>
                                <th>Stock ID</th>
                                <th>Date</th>
                                <th>Remarks</th>
                            </tr>`;
				var keys = Object.keys(poultry);
				for (let i = 0; i < keys.length; i++) {
					k = keys[i];
					poultry_code_part += `<tr>
                    <td>${poultry[k].stock_id}</td>
                    <td>${poultry[k].date}</td>
                    <td>${poultry[k].remarks}</td>
                </tr>`;
				}
				poultry_code_part += `</table></div>`;
				return poultry_code_part;
			})
			.join("");
		table_HTML_code += poultry_tr_list;
		document.getElementById("table_container").innerHTML = table_HTML_code;
	});
