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
		title_here.innerHTML= "Results for your search"
			if(response.length == 0){
				recipie.style.display = "flex"
				recipie.innerHTML="Try Searching for Chicken Biryani, Fruit Salad..."
				title_here.innerHTML = "Dish Not found try something else"
				wrapper.style.display="none"
				return
			}
			recipie.style.display = "none"
			wrapper = document.getElementById("wrapper")
			wrapper.style.display = "flex"
			names.classList.add("bg-gray-200")
            names.innerHTML = response.map(
                (e) => `
                    <div class="name" >
						<li><a href="#${e.title}">${e.title}</a></li>
					</div>
                `
            ).join('')
			list.innerHTML = response.map(
				(e) => `
					<div title="Click to select" class="list target:bg-blue-100 p-12 select-all border-b-2 border-gray-500"  id="${e.title}" >
						<p class="mb-8"><b>Ingredients: </b>${e.ingredients}</p>
						<p class="mb-8"><b>Servings: </b>${e.servings}</p>
						<p class="mb-8"><b>Instructions: </b>${e.instructions}</p>
					</div>
				`
			).join('')
		})
	.catch(err => console.error(err));
	return response
}
enter.addEventListener("click",(e)=>{
    title_here.innerHTML= "Getting Result be paitent..."
	e.preventDefault()
	getResponse(dish.value)
}
)