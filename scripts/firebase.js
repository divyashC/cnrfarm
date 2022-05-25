const firebaseConfig = {
	apiKey: "AIzaSyBGb_Iu8bWllXrsV2EWfJnZML6APyf1BwI",
	authDomain: "cnrfarm-f8c63.firebaseapp.com",
	databaseURL: "https://cnrfarm-f8c63-default-rtdb.firebaseio.com",
	projectId: "cnrfarm-f8c63",
	storageBucket: "cnrfarm-f8c63.appspot.com",
	messagingSenderId: "470385971923",
	appId: "1:470385971923:web:2971dc2f1c5e0d2197ba26",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();
const storage = firebase.storage();
