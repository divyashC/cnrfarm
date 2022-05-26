var table_HTML_code = `<div class="table">
                        <table>
                            <tr>
                                <th>Pig ID</th>
                                <th>Date</th>
                                <th>Week No.</th>
                                <th>Weight</th>
                            </tr>`;

database
	.ref()
	.child("piggery/meat_production/")
	.once("value", function (snapshot) {
		var piggery_data = snapshot.val();
		var piggery_tr_list = Object.keys(piggery_data).map(function (key) {
			var piggery = piggery_data[key];
			return `<tr>
                    <td>${piggery.pig_id}</td>
                    <td>${piggery.date}</td>
                    <td>${piggery.week_number}</td>
                    <td>${piggery.weight} kgs</td>
                </tr>`;
		});
		table_HTML_code += piggery_tr_list;
		table_HTML_code += `</table></div>`;
		document.getElementById("table_container").innerHTML = table_HTML_code;
	});
