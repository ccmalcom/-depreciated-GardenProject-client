import React from 'react';
import './Plant.css'

const DisplayPlants = (props) => {
    console.log(`Props: ${props.plant}`);
    return (

        //! again, we can style this table or display it another way -SC
        <>
            {
                props.plant.map((plant, key) => {
                    return (
                    <tr key={key}>
                        <td>{plant.nameOfPlant}</td>
                        <td>{plant.typeOfPlant}</td>
                        <td>{plant.lightingNeeds}</td>
                        <td>{plant.waterNeeds}</td>
                        <td>{plant.fertilizerNeeds}</td>
                        <td>{plant.notes}</td>
                    </tr>
                    )
                })
            }
        </>

    );
};

export default DisplayPlants;