var table_HTML_code = `<div class="table">
                        <table>
                            <tr>
                                <th>Cattle ID</th>
                                <th>Date</th>
                                <th>Diagnosis</th>
                                <th>Medicine</th>
                            </tr>`;
var realtime_apartment_data = database.ref().child("cattle/treatment_records/");
realtime_apartment_data.once("value", function (snapshot) {
	var cattle_data = snapshot.val();
	var cattle_tr_list = Object.keys(cattle_data).map(function (key) {
		var cattle = cattle_data[key];
		return `<tr>
                    <td>${cattle.cattle_id}</td>
                    <td>${cattle.date}</td>
                    <td>${cattle.diagnosis}</td>
                    <td>${cattle.medicine}</td>
                </tr>`;
	});
	table_HTML_code += cattle_tr_list;
	table_HTML_code += `</table></div>`;
	document.getElementById("table_container").innerHTML = table_HTML_code;
});
