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
		pass:""
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

			for (var i = 0; i < this.users.length; i++) {
				console.log(this.users[i].pass);
				if (this.user == this.users[i].id && this.pass == this.users[i].pass) {
					window.location.assign("scrap_detail.html");
				} else {
					console.log("Error!");
				}
			}
			
		}
	}
})