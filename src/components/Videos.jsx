import { useParams } from "react-router-dom";

function Videos () {
    //make this page responsive
    let params = useParams();
    return(
        <div id = "videoArea">
             <iframe width="560" height="315" 
                src={`https://www.youtube.com/embed/${params.id}`}  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>                    
            </iframe>
        </div>  
    )
}

export default Videos;