const request = require('request');

const fs = require('fs');
request('https://ghibliapi.herokuapp.com/films',(error,response,body)=>{

if(error){
	console.error(`could not send request to API:${error.message}`);
	return;
}

if(response.statusCode !=200){
	console.error(`expected status`);
	return;
}
	console.log('processing the list of movies');
	movies = JSON.parse(body);
	
	let movielist ='';
	movies.forEach(movie => {
	movielist += `${movie['title']},${movie['release_date']}\n`;
});

	fs.writeFile('callbackMovies.csv',movielist,(error)=>{
	if(error){
		console.log('could not save the file to the file :${error}');
		return;
	}
	console.log('saved list of movies to csv file');
});
}
);
