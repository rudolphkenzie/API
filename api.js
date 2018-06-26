const baseURL = "https://itunes.apple.com/search?";
let url;

const searchTerm = document.querySelector(".search");
const mediaType = document.querySelector(".mediaType");
const searchForm = document.querySelector("form");
const submitBtn = document.querySelector('.submit');

//RESULTS SECTION
const section = document.querySelector("section");

submitBtn.addEventListener('click', tests);
//const SearchForm = document.querySelector("form"); 
/*
function fetchResults(e){
    e.preventDefault();
    url = baseURL + "term=" + searchTerm + "+country=US";
    console.log("URL:", url);
    if (mediaType !== ""){
        url += "+media=" + mediaType;
    };
}
*/

// var test = "https://itunes.apple.com/search?term=jack+johnson"
console.log("1")
function tests(data) {
    data.preventDefault();
    url = baseURL + "term=" + searchTerm.value + "&country=US";
    console.log("URL:", url);
    if (mediaType.value !== ""){
        url += "&media=" + mediaType.value;
    };
    fetch(url, { mode: "cors" })
        .then(function (response) {
            console.log(response);
            return response.json();
        }
        ).then(
            (json) => {
                console.log(json)
                //call the display results func
                displayResults(json)
            }
    
        )
}

function displayResults(json){
    while (section.firstChild){
        section.removeChild(section.firstChild); //1 
    }
   // console.log(json.response.docs);
   let songs = json.results; 
  // console.log(songs); 
    //   if(songs.length === 10 && pageNumber === 0) {
    //   nav.style.display = "block"; 
    //   previousBtn.style.display = "none"; 
    //   } else if (songs.length === 10) {
    //     nav.style.display = "block"; 
    //     previousBtn.style.display = "block"; 
    //   } else if(pageNumber!== 0) {
    //     nav.style.display = "block"; 
    //     previousBtn.style.display = "block"; 
    //     nextBtn.style.display = "none"; 
    //   } else {
    //       nav.style.display = "none"; 
    //   }

  if(songs.length === 0){
      console.log("No results"); 
  } else{
         for (let i = 0; i < songs.length; i ++){
         console.log(i); 
         let container = document.createElement("div")
         let artistName = document.createElement("h3");  
         let collectionViewUrl = document.createElement("a"); 
         let collectionName = document.createElement("p"); 
         let img = document.createElement("img"); 
         let current = songs[i]; 
         console.log("Current:" , current); 

         //1
         artistName.textContent = current.artistName;
         collectionViewUrl.textContent = current.collectionViewUrl; 
         collectionName.textContent = current.collectionName; 
         img.src = current.artworkUrl100;
            collectionViewUrl.href
         //2
        container.appendChild(artistName);
        container.appendChild(collectionViewUrl);
        container.appendChild(collectionName); 
        container.appendChild(img); 




        section.appendChild(container)
        
         }
// url
    //      link.href = current.web_url; //4 
    //      link.textContent = current.headline.main; //5 

    //      para.textContent = "Keywords:"; //3 
    //      //4 
    //      for (let j = 0; j < current.keywords.length; j ++) {
    //          let span = document.createElement("span"); 
    //          span.textContent += current.keywords[j].value + " "; 
    //          para.appendChild(span); 
    //      }
    //      if(current.multimedia.length > 0) {
    //          img.src = "http://www.nytimes.com/" + current.multimedia[0].url
    //          img.alt = current.headline.main; 
    //      }
    //      clearfix.setAttribute("class" , "clearfix"); 

           //  songs.appendChild(artistName); 
           //  songs.appendChild(collectionViewUrl); 
           //  songs.appendChild(collectionName); 
    
    
   
    //      }
  }
}
