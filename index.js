const url = 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '36d8ba3cd8msh97c012435dac3dfp1fc904jsnb3e7cc1d84c1',
		'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
	}
};
async function getResponse (dish){
	new_dish = dish.replace(' ','%20')
	const response = await fetch('https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query='+new_dish, options)
	.then(response => response.json())
	.then(response => {	
		console.log(response)
		for (let i = 0; i < response.length; i++) {
			const element = response[i];
			recipie.appendElement(table)
		}
			if(response.length == 0){
				title_here.innerHTML = "Dish Not found try something else"
				recipie.innerHTML=""
			}
			table.removeAttribute('style');
			const element = response[1];
			title_here.innerHTML=element.title
			th1.innerHTML=element.title
			th2.innerHTML="-"+element.ingredients.replaceAll("|","<br>-")
			th3.innerHTML=element.servings
			th4.innerHTML="-"+element.instructions.replaceAll(",","<br>-")
		})
	.catch(err => console.error(err));
	return response
}
enter.addEventListener("click",(e)=>{
	e.preventDefault()
	getResponse(dish.value)
}
)