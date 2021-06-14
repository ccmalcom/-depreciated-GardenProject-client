import React, {useState, useEffect} from 'react';
import DisplayPlants from './plant/Plant';
import CreatePlant from './createPlant/CreatePlant'

const Plants = (props) => {
    
    const [plants, setPlants] = useState([]);
    const [createPlant, setCreatePlant] = useState(false);

    fetch (url, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.sessionToken,
        })
        .then(res => res.json())
        .then(json => setPlants(json))
    })

    useEffect(() => {
        fetchPlants();
    }, [createPlants])

    const buttonHandler = () => setCreatePlant(true);

    //MAIN GARDEN
    
    <>
        {createPlant ? <CreatePlant setCreatePlant={setCreatePlant} sessionToken={props.sessionToken}/> : null}
        {!createPlant ? <Button onClick={buttonHandler}>Plant It!</Button> : null}
    </> 

    //!!! Need to add table above to display plants. Style components or bootstrap table --SC
}

export default Plants;