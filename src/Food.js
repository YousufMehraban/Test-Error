import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const GiphyBaseUrl = 'https://api.giphy.com/v1'
const apiKey = 'Xi3xfHZFQjUpS0jcOFJhhrKGoNUnF7Er'

const Food = () =>{
    const [giphy, setGiphy] = useState(null)
    const {name} = useParams()

    useEffect(()=>{
        async function getGiphy(searchTerm){
            const res = await axios.get(`${GiphyBaseUrl}/gifs/search`, {params : {q : searchTerm, api_key : apiKey}})
            // console.log(res.data.data[4].images.original.url)
            setGiphy(res.data.data[0].images.original.url)
        }
        getGiphy(name)
    }, [name])

    return(
        <div>
            <h1>Here is the pic of {name} </h1>
            <img src={giphy} />
        </div>
    )
}
export default Food;
