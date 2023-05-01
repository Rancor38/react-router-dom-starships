import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Starship = (props) => {

    const { id } = useParams()
    
    const url = `https://swapi.dev/api/starships/${id}`

    const [starship, setStarship] = useState(null)

    const getStarship = async () => {
        try {
            const response = await fetch(url)
            const shipData = await response.json()
            console.log(shipData)
            setStarship(shipData)
        } catch (err) {
            console.log(err)
         }
    }

    useEffect(() => {
        getStarship()
    }, [])

    const loading = () => {
        return (<h1>Loading...</h1>)
    }

    const loaded = () => {
        console.log(starship)
        return (
            <>
            <h2>{starship.name}</h2>
            <div>
	    <h3>Features</h3>
	    <ul>
	      <li>Starship Class: {starship.starship_class}</li>
	      <li>Capacity: {starship.cargo_capacity}</li>
	      <li>Crew (size): {starship.crew}</li>
	      <li>Passengers: {starship.passengers}</li>
	      <li>Manufacturer: {starship.manufacturer}</li>
	      <li>HD Rating: {starship.hyperdrive_rating} </li>
	      <li>Manufacturer: {starship.manufacturer}</li>
	      {/* Pilot info here */}
	    </ul>
   </div>
   <div>
	    <h3>Star Wars Stats</h3>
	    <ul>
		    <li>Appears in {starship.films?.length} film{starship.films?.length > 1 ? "s":""}</li>
	    </ul>
   </div>
            </>
        )
    }

    return (
        <section>{starship ? loaded() : loading()}</section>
    );
  };
  
  export default Starship;
  