var table_HTML_code = `<div class="table">
                        <table>
                            <tr>
                                <th>Cattle ID</th>
                                <th>Breed</th>
                                <th>Gender</th>
                                <th>Type</th>
                                <th>Age</th>
                                <th>Weight</th>
                            </tr>`;
var realtime_apartment_data = database.ref().child("cattle/cattle_records/");
realtime_apartment_data.once("value", function (snapshot) {
	var cattle_data = snapshot.val();
	var cattle_tr_list = Object.keys(cattle_data).map(function (key) {
		var cattle = cattle_data[key];
		return `<tr>
                    <td>${cattle.cattle_id}</td>
                    <td>${cattle.breed}</td>
                    <td>${cattle.gender}</td>
                    <td>${cattle.type}</td>
                    <td>${cattle.age}</td>
                    <td>${cattle.weight}</td>
                </tr>`;
	});
	table_HTML_code += cattle_tr_list;
	table_HTML_code += `</table></div>`;
	document.getElementById("table_container").innerHTML = table_HTML_code;
});
