import { useEffect, useState } from "react";

function SearchResultsArea () {
    console.log('search()');
    const APIkey = 'AIzaSyC6uq3lFzxEQlANwUly9GGsxWHQQ2n3SgU';
    const URLbase = 'https://www.googleapis.com/youtube/v3/search'; 
    const searchTerm = 'Fantastic Negrito';
    const URL = `${URLbase}?key=${APIkey}&part=snippet&type=video&q=${searchTerm}`;
    let [searchResults, setSearchResults] = useState(0); //use state to trigger render when result is returned, and avoid infinite loop
    let [items, setItems] = useState(0); //use state to trigger re-render when we have mapped output, and to avoid infinite loop
    
    useEffect(() => {
      if (searchResults === 0) { //do this only once, avoid infinite loop
        console.log(`fetch`);
        fetch(URL)
        .then((response) => {
          if (response.status >= 200 && response.status <= 299) {
            return response.json();
          } else {
            throw Error(response.statusText);
          }
        })
        .then((jsonResponse) => {
          // do whatever you want with the JSON response
          console.log(`jsonResponse: ${JSON.stringify(jsonResponse)}`);
          setSearchResults(jsonResponse);      
          console.log(`searchResults: ${searchResults}`); //this is not working?
        }).catch((error) => {
          // Handle the error
          console.log(error);
        });
      }
      
      console.log(`searchResults: ${searchResults}`); //this is not working?
    
    
      if(searchResults !== 0 && items === 0){ //do this only once, avoid infinite loop
        console.log(`build items`);
        setItems (searchResults.items.map(item => {  
          /* use this for link         
              {`https://www.youtube.com/watch?v=${item.id.videoId}`}            
          */
          return ( 
            <div class = 'result'>  
              <img class ="resultElement" src={item.snippet.thumbnails.medium.url} />
              <div class ="resultElement">{item.snippet.title}</div>              
            </div>
            );  
        })); 
        console.log(`items: ${items}`)
      }
    });
     
    return (
      <div id = "searchResultsArea">
        {items}      
      </div>        


      )
    }

export default SearchResultsArea;