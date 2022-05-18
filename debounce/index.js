   

   document.getElementById("search").addEventListener("input",()=>{
       debounce(main,600)
   })

   let timer_ID;
   function debounce(func, delay) {
     if (timer_ID) {
       clearTimeout(timer_ID);
     }
     timer_ID = setTimeout(function () {
       func();
     }, delay);
   }
   
    

    async function searchMovies(){
        try{
            let input=document.getElementById("search").value
        let res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=3b7e3a90&s=${input}`);
    
        let data = await res.json();
      return data
    }catch(error){
        console.log(error)
    }
    }

async function main(){
  
    let data=await searchMovies()

    if(data===undefined){
        return false
    }
    //console.log(data)
    appendData(data)
}
 let movies_div=document.getElementById('movies')

 function appendData(movies){
     movies_div.innerHTML=null
    movies.Search.forEach(function(elem){
        let div5=document.createElement('div')
        div5.setAttribute('id','smalldiv')
        
        div5.onclick=()=>{
            localStorage.setItem("clicked_movie",JSON.stringify(elem))
            window.location.href="show.html"
           
        }
      
         let image=document.createElement("img")
         image.src=elem.Poster
         image.setAttribute("id","smallimg")

         let div1=document.createElement('div')
         div1.setAttribute('id','smallerdiv')

         let title=document.createElement("p")
         title.innerHTML=elem.Title
         title.setAttribute('id','title')

         let year=document.createElement("p")
         year.innerHTML=elem.Year

        
         div1.append(title,year)
         div5.append(image,div1)
         movies_div.append(div5)
    
    })
 

 }
