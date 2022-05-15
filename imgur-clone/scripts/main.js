import navbar from "../components/navbar.js";
console.log("nav",navbar);
document.getElementById("Main-Nav-Container").innerHTML=navbar();
document.getElementById("query").addEventListener("input", () => {
  debounce(main, 1000);
});

let inputValue = document.getElementById("query")
inputValue.addEventListener("keypress",(e)=>{
   //console.log(e)
    if(e.key == "Enter"){
       let value = inputValue.value;
       localStorage.setItem("searchItems", value)
       window.location.href ="search.html"
    }
})

async function searchmovie() {
  try {
    let query = document.getElementById("query").value;
    let res = await fetch(
      `https://api.unsplash.com/search/photos?&query=${query}&client_id=8lBaqc-XJTCXhnwvlftCl7DNmzD3HU9CsGnMNyaHxMo`
    );
    let data = await res.json();
    console.log(data.results);
    return data.results;
  } catch (error) {
    console.log(error);
  }
}

async function main() {
  let data = await searchmovie();

  if (data == undefined) {
    return;
  }
  // console.log(data)
  append(data);
}

function append(movies) {
  document.getElementById("searchDataDisplay").textContent = "";
  movies.map(function (e) {
    // console.log(e);
    let Images = document.createElement("p");
    Images.setAttribute("id", "serachImages");
    Images.innerText = e.alt_description;
    Images.addEventListener("click", () => {
      localStorage.setItem("clicked_images", JSON.stringify(e));
      window.location.href="imageDetails.html"
    });

    document.getElementById("searchDataDisplay").append(Images);
  });
}

let timer_ID;
function debounce(func, delay) {
  if (timer_ID) {
    clearTimeout(timer_ID);
  }
  timer_ID = setTimeout(function () {
    func();
  }, delay);
}

const tagImgUrl = [
    {
        name: "Universe",
        backCol: "orange",
        post: 300+Math.floor(1800*Math.random()),
        url: "https://thumbs.dreamstime.com/b/solar-system-scheme-galaxy-planets-space-orbit-systems-flat-creative-astronomy-concept-cartoon-universe-order-recent-vector-213326164.jpg"
    },
    {
        name: "Dogs",
        backCol: "purple",
        post: 300+Math.floor(1800*Math.random()),
        url: "https://thumbs.dreamstime.com/z/black-trace-dog-paw-pattern-footprints-bones-bone-background-isolated-illustration-cartoon-repeat-wallpaper-%C3%A2%E2%82%AC-stock-137174100.jpg"
    },
    {
        name: "Children",
        backCol: "green",
        post: 300+Math.floor(1800*Math.random()),
        url: "https://www.meme-arsenal.com/memes/be2324bb28001344bf0f7ffe206892d7.jpg"
    },
    {
        name: "Colorful",
        backCol: "blue",
        post: 300+Math.floor(1800*Math.random()),
        url: "https://s3.envato.com/files/223920975/Low%20Poly%20Colorful%20Background%20Preview.jpg"
    },
    {
        name: "Gaming",
        backCol: "yellow",
        post: 300+Math.floor(1800*Math.random()),
        url: "https://cdn.dribbble.com/users/77598/screenshots/8512631/media/961f0b354726a7de3c13457f356c4e51.png?compress=1&resize=400x300"
    },
    {
        name: "Funny",
        backCol: "brown",
        post: 300+Math.floor(1800*Math.random()),
        url: "https://wallpapercave.com/wp/wp2914775.jpg"
    },
    {
        name: "Awesome",
        backCol: "pink",
        post: 300+Math.floor(1800*Math.random()),
        url: "https://image.shutterstock.com/image-vector/pop-artstyled-cartoon-awesome-text-600w-696102703.jpg"
    },
    {
        name: "Movies",
        backCol: "lightgreen",
        post: 300+Math.floor(1800*Math.random()),
        url: "https://s.studiobinder.com/wp-content/uploads/2020/03/Best-Animated-Movies-of-All-Time-Featured-StudioBinder.jpg"
    },
    {
        name: "Dragons",
        backCol: "#51535a",
        post: 300+Math.floor(1800*Math.random()),
        url: "https://wallpaperaccess.com/full/1916420.jpg"
    },
    {
        name: "History",
        backCol: "aqua",
        post: 300+Math.floor(1800*Math.random()),
        url: "https://i.redd.it/a4rdparvqzw21.jpg"
    },
];

const tags = document.getElementById("tags");

tagImgUrl.map(e => {
    let div=document.createElement("div");
    div.style.backgroundColor = e.backCol

    let img = document.createElement("img");
    img.src = e.url;

    let name = document.createElement("h5");
    name.innerText = e.name;
    name.style.color = "white";

    let post = document.createElement("h5");
    post.innerText = e.post+" Posts";
    post.style.color = "grey";

    div.append(img, name, post);
    tags.append(div);
})

const url = "https://api.unsplash.com/photos/?per_page=28&client_id=RAwyi7P5k2ysyEe3ZgMXrMmb45zWztvwL9_fbEvLHso";

async function getData(url) {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
        appendData(data);
    }
    catch(err) {
        console.log("err:", err);
    }
}
getData(url);



function appendData(data) {
     let container = document.getElementById("container");
    
    data.map(e => {
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = e.urls.small;

        let name = document.createElement("p");
        name.innerText = e.user.name;

        div.append(img, name);
        div.onclick = ()=>{
            localStorage.setItem('clicked_images',JSON.stringify(e))
            window.location.href="imageDetails.html"
        }
        container.append(div);
    })
}

