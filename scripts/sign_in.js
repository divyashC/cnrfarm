const sign_in = document.getElementById("sign_in_form");

sign_in.addEventListener("submit", (e) => {
	e.preventDefault();

	const email = document.getElementById("email").value;
	const password = document.getElementById("password").value;

	auth
		.signInWithEmailAndPassword(email, password)
		.then(() => {
			var user = auth.currentUser;

			var database_ref = database.ref();

			var user_data = {
				last_login: Date.now(),
			};

			database_ref.child("users/" + user.uid + "/user_data/").update(user_data);

			database
				.ref()
				.child("users/" + user.uid + "/user_data")
				.once("value", function (snapshot) {
					var curr_user_data = snapshot.val();
					localStorage.setItem("user_data", JSON.stringify(curr_user_data));
				});

			alert("Signed In successfully");

			setTimeout(() => {
				sign_in.reset();
				window.location.href = "/html/index.html";
			}, 3000);
		})
		.catch((error) => {
			var error_code = error.code;
			var error_message = error.message;
			alert(error_code + " " + error_message);
		});
});
