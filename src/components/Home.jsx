/** NOTES 
  * make "no search results dynamic"
 */

import { useEffect, useState } from "react";
import NoSearchResults from './NoSearchResults';

function Home () {
  console.log('Home()');
  const APIkey = 'AIzaSyC6uq3lFzxEQlANwUly9GGsxWHQQ2n3SgU';
  const URLbase = 'https://www.googleapis.com/youtube/v3/search'; 
  
  let [userInput, setUserInput] = useState('');
  let [searchResults, setSearchResults] = useState(); //api results
  let [items, setItems] = useState(); //array of <div>s to render (couldl I not factor this out? I tried but got errors and decided not to pursue)
  let [refreshResults, setRefreshResults] = useState(false); //use state to trigger render when result is returned, and avoid infinite loop 
  let [displayNoSearchMsg, setdisplayNoSearchMsg] = useState(true);

  console.log(`home:refreshResults: ${refreshResults}`);
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  }
  
  //run search on click
  const handleSearch = (event) => {
    let URL = `${URLbase}?key=${APIkey}&part=snippet&type=video&q=${userInput}`;
    
    console.log(`fetch`);
    console.log(`fetch: userINput ${userInput}`);
    console.log(`fetch: ${URL}`);

    fetch(URL)
    .then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then((jsonResponse) => {
      // what is the reason not to do this in the above then 
      setSearchResults(jsonResponse);          
      setRefreshResults(true);
      setdisplayNoSearchMsg(false);

    }).catch((error) => {
      console.log(error);
    });

  }

  
  useEffect(() => {
    console.log(`useEffect(): refreshResults: ${refreshResults}`)
  
    //if we have new search results, build an array of search results to render
    if(refreshResults){ 
      setRefreshResults(false); 
      console.log(`build items`);

      setItems (searchResults.items.map(item => {          
        return ( 
          <div class = 'result'>  
            <img class ="resultElement" src={item.snippet.thumbnails.medium.url} />
            <div class ="resultElement">{item.snippet.title}</div>              
          </div>
          );  
          /* use this for link  {`https://www.youtube.com/watch?v=${item.id.videoId}`}   */
      })); 
      console.log(`items: ${items}`)
    }
  });  
  
  //render page
  return (
    <>
    <div id = "searchBarArea">
        <div id = "searchWrapper">
            <input type="text" id="searchInput" value={userInput} onChange={handleInputChange}/>            
            <input type="button" id="searchButton" value="Search" onClick={handleSearch}/>
            {/*<button id="searchButton" type="submit">Search</button>*/}
        </div>    
        <NoSearchResults displayNoSearchMsg={displayNoSearchMsg}/>        
    </div>
    <div id = "searchResultsArea">
      {items}      
    </div>   
    </>
  )   
}

export default Home;