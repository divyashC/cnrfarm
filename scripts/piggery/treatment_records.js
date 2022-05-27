var table_HTML_code = ``;

database
	.ref()
	.child("piggery/treatment_records/")
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
												<th>Diagnosis</th>
												<th>Medicine</th>
											</tr>`;
				var keys = Object.keys(piggery);
				for (let i = 0; i < keys.length; i++) {
					k = keys[i];
					piggery_code_part += `<tr>
                    <td>${piggery[k].pig_id}</td>
                    <td>${piggery[k].date}</td>
                    <td>${piggery[k].diagnosis}</td>
                    <td>${piggery[k].medicine}</td>
                </tr>`;
				}
				piggery_code_part += `</table></div>`;
				return piggery_code_part;
			})
			.join("");
		table_HTML_code += piggery_tr_list;
		document.getElementById("table_container").innerHTML = table_HTML_code;
	});
