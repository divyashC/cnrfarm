var table_HTML_code = ``;

database
	.ref()
	.child("cattle/treatment_records/")
	.once("value", function (snapshot) {
		var cattle_data = snapshot.val();
		var cattle_tr_list = Object.keys(cattle_data)
			.map(function (key) {
				var cattle = cattle_data[key];
				var cattle_code_part = `<div class="table">
                        <table>
                            <tr>
                                <th>Cattle ID</th>
                                <th>Date</th>
                                <th>Diagnosis</th>
                                <th>Medicine</th>
                            </tr>`;
				var keys = Object.keys(cattle);
				for (let i = 0; i < keys.length; i++) {
					k = keys[i];
					cattle_code_part += `<tr>
                    <td>${cattle.cattle_id}</td>
                    <td>${cattle.date}</td>
                    <td>${cattle.diagnosis}</td>
                    <td>${cattle.medicine}</td>
                </tr>`;
				}
				cattle_code_part += `</table></div>`;
				return cattle_code_part;
			})
			.join("");
		table_HTML_code += cattle_tr_list;
		document.getElementById("table_container").innerHTML = table_HTML_code;
	});
