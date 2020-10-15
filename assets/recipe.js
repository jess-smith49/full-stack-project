fetch("https://rapidapi.p.rapidapi.com/?p=1&i=potato,tomato,garlic,chicken&q=pasta", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "recipe-puppy.p.rapidapi.com",
		"x-rapidapi-key": "358cb2fa9amshbe93bf171c704afp1d857cjsn9e3fac832eff"
	}
})
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data)
    });