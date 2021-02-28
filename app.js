
const row = document.getElementById("row");
const getData = async(name)=>{
//   const fetchData = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
//   console.log(fetchData.json())
  try {
      const fetchData = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      .then((data) =>{
        return data.json();
    })
    .then(data =>{
       
        for( let i =0; i <data.meals.length; i++){
            const colmdThree = document.createElement("div");
            colmdThree.classList.add('col-md-3');
            colmdThree.innerHTML = ` <div class="single-meal text-center card">
            <a href="#" onclick = singleView(${data.meals[i].idMeal})>
                <div class="meal-img">
                    <img src="${data.meals[i].strMealThumb}" alt="">
                </div>
                <h4>${data.meals[i].strMeal}</h4>
            </a>
        </div>`
        row.appendChild(colmdThree);
        }
        
    })
      
  } catch (error) {
      console.log('this is error from api', error);
  }
}





// get search input----------------------------

    const searchInput = document.getElementById("search");
    const SubmitBtn = document.getElementById("submitBtn");
    SubmitBtn.addEventListener('click',()=>{
        const value = searchInput.value;
        getData(value);
        console.log(value);
    })
// singleview
    async function singleView(id){
        const singleViewwrap = document.getElementById("singleViewwrap");
        row.style.display="none";
        try {
            const fetchData = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then((data) =>{
              return data.json();
          })
          .then(data =>{

                  const colmdSix = document.createElement("div");
                  colmdSix.classList.add('col-md-6');
                  const list = document.createElement("li");
                 
                  colmdSix.innerHTML = `<div class="single-meal text-center card">
                  <a href="#">
                      <div class="meal-img">
                          <img src="${data.meals[0].strMealThumb}" alt="img">
                      </div>
                      <h4>${data.meals[0].strMeal}</h4>
                      <h3>Ingradients</h3>
                      <ul class="ingradients-wrapper">
                          <li>${data.meals[0].strIngredient1}</li>
                          <li>${data.meals[0].strIngredient2}</li>
                          <li>${data.meals[0].strIngredient3}</li>
                          <li>${data.meals[0].strIngredient4}</li>
                          <li>${data.meals[0].strIngredient5}</li>
                          <li>${data.meals[0].strIngredient6}</li>
                          <li>${data.meals[0].strIngredient7}</li>
                          <li>${data.meals[0].strIngredient8}</li>
                          <li>${data.meals[0].strIngredient9}</li>
                          <li>${data.meals[0].strIngredient10}</li>
                      </ul>
                  </a>
              </div>`
            //   for(let i=0;i<10;i++){
            //     const ingra_wrapper =  document.querySelector(".ingradients-wrapper");
            //     list.innerHTML = `${data.meals[0].strIngredient1}`;
            //     ingra_wrapper.appendChild(list);
            // }
              singleViewwrap.appendChild(colmdSix);
              
          })
            
        } catch (error) {
            console.log('this is error from api', error);
        }
    }
    
//


