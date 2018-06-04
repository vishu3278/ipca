var myapp = new Vue ({
	el:"#app",
	data:{
		title:"Sign In",
		date: new Date(),
		users:[
			{id:"9810992625", pass:"123456"},
			{id:"9599710275", pass:"123456"}
		],
		user:"",
		pass:"",
		alertmsg:""
	},
	methods: {
		login: function() {
			/*axios.get('user.json')
				.then(response => {
					console.log(response);
					this.users = response.data;
					console.log(this.users);
				})
				.catch(e=>{alert(e)});*/
			// console.log(this.users);

			if (this.user == "" || this.pass == "") {
				this.alertmsg = "Enter all fields";
				this.removeAlert();
			} else {
				for (var i = 0; i < this.users.length; i++) {
					// console.log(this.users[i].pass);
					if (this.user == this.users[i].id && this.pass == this.users[i].pass) {
						window.location.assign("scrap_detail.html");
					} else {
						this.alertmsg = "Error! User and/or password does not match.";
						this.removeAlert();
					}
				}
			}
			
		},
		removeAlert:function () {
			setTimeout(()=>{this.alertmsg = ''},4000);
		}
	}
})


function capture() {
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI });
}

function onSuccess(imageURI) {
    app2.img = imageURI;
}

function onFail(message) {
    alert('Failed because: ' + message);
}

var app2 = new Vue({
	el:"#detail",
	data:{
		title:"Scrap Details",
		date:{},
		time:"",
		img:"",
		weight:""
	},
	methods:{
		submitScrap:function() {
			alert(this.date + this.time + this.img + this.weight);
		},
		captureimg: function () {
			console.log("Capture initiated");
	        capture();
		}
	}
})