var table_HTML_code = `<div class="table">
                        <table>
                            <tr>
                                <th>Pig ID</th>
                                <th>Date</th>
                                <th>Diagnosis</th>
                                <th>Medicine</th>
                            </tr>`;

database
	.ref()
	.child("piggery/treatment_records/")
	.once("value", function (snapshot) {
		var piggery_data = snapshot.val();
		var piggery_tr_list = Object.keys(piggery_data).map(function (key) {
			var piggery = piggery_data[key];
			return `<tr>
                    <td>${piggery.pig_id}</td>
                    <td>${piggery.date}</td>
                    <td>${piggery.diagnosis}</td>
                    <td>${piggery.medicine}</td>
                </tr>`;
		});
		table_HTML_code += piggery_tr_list;
		table_HTML_code += `</table></div>`;
		document.getElementById("table_container").innerHTML = table_HTML_code;
	});
