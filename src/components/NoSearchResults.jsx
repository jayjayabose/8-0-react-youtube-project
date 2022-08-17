function NoSearchResults (props) {
    if (props.displayNoSearchMsg){
        return (
            <div id = "noSearchResults">
                No Search Results Yet!, Please submit a search above!
            </div>
        )
    }
}

export default NoSearchResults;