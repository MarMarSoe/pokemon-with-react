import React, { useEffect, useState } from "react";
export default function Pokelist(){

    const [pokelist, setPokeList] = useState([]);
    var id = 1;
    var imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    var pokeArr = []

    useEffect(()=>{
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=898")
        .then(response => response.json())
        .then(json => {
            console.log(json.results);
            for(var i=1; i=json.results.length; i++){
                console.log(json.results[i])
                if(json.results[i]){
                    // pokeArr.push(
                //     {
                //         id: id,
                //         name: json.results[i].name,
                //         imageUrl: imgUrl+id+".png"
                //     }
                // )
                }
                
            }
            // pokeArr = json.results.map((poke) => {
            //     return ({id : id, name : poke.name, imageUrl:imgUrl+id+".png"}
            //            )
            //     id +=1;
            // })
            setPokeList(pokeArr)
            console.log(pokeArr)
        })
    },[])

    return(
        <div>
            <ul>
                {/* {pokelist.map((poke) => {
                    return (<li key={poke.id}>{poke.name} : {poke.imageUrl}</li>)
                })} */}
            </ul>
        </div>
    );

}