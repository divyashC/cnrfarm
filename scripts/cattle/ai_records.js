var table_HTML_code = `<div class="table">
                        <table>
                            <tr>
                                <th>Cattle ID</th>
                                <th>Date</th>
                                <th>Bull ID</th>
                                <th>Bull Breed</th>
                            </tr>`;
var realtime_apartment_data = database.ref().child("cattle/ai_records/");
realtime_apartment_data.once("value", function (snapshot) {
	var cattle_data = snapshot.val();
	var cattle_tr_list = Object.keys(cattle_data).map(function (key) {
		var cattle = cattle_data[key];
		return `<tr>
                    <td>${cattle.cattle_id}</td>
                    <td>${cattle.date}</td>
                    <td>${cattle.bull_id}</td>
                    <td>${cattle.bull_breed}</td>
                </tr>`;
	});
	table_HTML_code += cattle_tr_list;
	table_HTML_code += `</table></div>`;
	document.getElementById("table_container").innerHTML = table_HTML_code;
});
