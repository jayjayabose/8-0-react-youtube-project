/** NOTES 
 * 
 */

import { useEffect, useState } from "react";

function Search () {
console.log('search()');
const APIkey = 'AIzaSyC6uq3lFzxEQlANwUly9GGsxWHQQ2n3SgU';
const URLbase = 'https://www.googleapis.com/youtube/v3/search'; 
const searchTerm = 'Ariana Grande';
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
      return (<li> 
          {item.snippet.title} <br/> 
          {item.snippet.thumbnails.medium.url} <br/> 
          {`https://www.youtube.com/watch?v=${item.id.videoId}`}
        </li>);  
    })); 
    console.log(`items: ${items}`)
  }
});
 
return (
  <main style={{ padding: "1rem 0" }}>
    <h2>Search</h2>  
    {items}
  </main>
  )
}

export default Search;