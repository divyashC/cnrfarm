var table_HTML_code = ``;

database
	.ref()
	.child("cattle/vaccination_records/")
	.once("value", function (snapshot) {
		var cattle_data = snapshot.val();
		var cattle_tr_list = Object.keys(cattle_data)
			.map(function (key) {
				var cattle = cattle_data[key];
				var cattle_code_part = `<br><br><div class="table">
                        <table>
                            <tr>
                                <th>Cattle ID</th>
                                <th>Date</th>
                                <th>Remarks</th>
                            </tr>`;
				var keys = Object.keys(cattle);
				for (let i = 0; i < keys.length; i++) {
					k = keys[i];
					cattle_code_part += `<tr>
											<td>${cattle[k].cattle_id}</td>
											<td>${cattle[k].date}</td>
											<td>${cattle[k].text_field}</td>
                						</tr>`;
				}
				cattle_code_part += `</table></div><br><br>`;
				return cattle_code_part;
			})
			.join("");
		table_HTML_code += cattle_tr_list;
		document.getElementById("table_container").innerHTML = table_HTML_code;
	});
