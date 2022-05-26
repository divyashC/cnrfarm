var table_HTML_code = `<div class="table">
                        <table>
                            <tr>
                                <th>Pig ID</th>
                                <th>Breed</th>
                                <th>Type</th>
                                <th>Age</th>
                                <th>Gender</th>
                            </tr>`;
database
	.ref()
	.child("piggery/piggery_records/")
	.once("value", function (snapshot) {
		var pig_data = snapshot.val();
		var pig_tr_list = Object.keys(pig_data).map(function (key) {
			var pig = pig_data[key];
			return `<tr>
                    <td>${pig.pig_id}</td>
                    <td>${pig.breed}</td>
                    <td>${pig.type}</td>
                    <td>${pig.age}</td>
                    <td>${pig.gender}</td>
                </tr>`;
		});
		table_HTML_code += pig_tr_list;
		table_HTML_code += `</table></div>`;
		document.getElementById("table_container").innerHTML = table_HTML_code;
	})
	.join("");
