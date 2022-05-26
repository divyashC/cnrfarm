var table_HTML_code = `<div class="table">
                        <table>
                            <tr>
                                <th>Cattle ID</th>
                                <th>Date</th>
                            </tr>`;

database
	.ref()
	.child("cattle/mortality_records/")
	.once("value", function (snapshot) {
		var cattle_data = snapshot.val();
		var cattle_tr_list = Object.keys(cattle_data)
			.map(function (key) {
				var cattle = cattle_data[key];
				return `<tr>
                    <td>${cattle.cattle_id}</td>
                    <td>${cattle.date}</td>
                </tr>`;
			})
			.join("");
		table_HTML_code += cattle_tr_list;
		table_HTML_code += `</table></div>`;
		document.getElementById("table_container").innerHTML = table_HTML_code;
	});
