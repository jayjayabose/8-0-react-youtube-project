function SearchBarArea () {
    return (
        <div id = "searchBarArea">
            <div id = "searchWrapper">
                <input type="text" id="searchInput" value="Search... [?]" />            
                <input type="button" id="searchButton" value="Search" />
            </div>    
            <div id = "noSearchResults">
                No Search Results Yet!, Please submit a search above!
            </div>
        </div>
    )
}

export default SearchBarArea;