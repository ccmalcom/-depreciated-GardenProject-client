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


    <>
        {createPlant ? <CreatePlant setCreatePlant={setCreatePlant} sessionToken={props.sessionToken}/> : null}
        {!createPlant ? <Button onClick={buttonHandler}>Plant It!</Button> : null}
    </> 

    //left out table above in div (not displaying all plants in one table, correct? Can change quickly if needed - SC)
}

export default Plants;