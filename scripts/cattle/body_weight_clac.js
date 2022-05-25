const body_weight_form = document.getElementById("body_weight_form");
const result_container = document.getElementById("result_container");

body_weight_form.addEventListener("submit", function (e) {
	e.preventDefault();
	const length = document.getElementById("length").value;
	const girth = document.getElementById("girth").value;
	const result = document.getElementById("result");
	var ans = (length * (girth * girth)) / 660;
	ans = ans.toFixed(3);
	result.innerHTML = `Result: ${ans} kgs`;
	result_container.classList.remove("hidden");
	setTimeout(function () {
		body_weight_form.reset();
	}, 10000);
});
