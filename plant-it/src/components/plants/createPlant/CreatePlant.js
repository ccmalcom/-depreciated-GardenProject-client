import { formatMs, FormGroup } from '@material-ui/core';
import React, { useState } from 'react';
import './CreatePlant.css';

const CreatePlant = (props) => {
    const [plantName, setPlantName] = useState('');
    const [perennial, setPerennial] = useState(false);
    const [annual, setAnnual] = useState(false);
    const [typeOfPlant, setTypeOfPlant] = useState('');
    const [lightingNeeds, setLightingNeeds] = useState('');
    const [waterNeeds, setWaterNeeds] = useState('');
    const [fertilizerNeeds, setFertilizerNeeds] = useState('');
    const [notes, setNotes] = useState('');
    

    const postPlant = e => {
        e.preventDefault();

        let url = //"http://localhost:4000/plants"

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                plantName: plantName,
                perennial: perennial,
                annual: annual,
                typeOfPlant: typeOfPlant,
                lightingNeeds: lightingNeeds,
                waterNeeds: waterNeeds,
                fertilizerNeeds: fertilizerNeeds,
                notes: notes,
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        })
        .then(res => res.json())
        .then(json => {
            console.log(json);
            props.setCreatePlant(false);
        })
    }

    return (
        <div>
            <Form onSubmit={postPlant}>
                <FormGroup>
                    <Label>Plant Name</Label>
                    <Input type='text' value={plantName} placeholder='Lavender' onChange={(e) => setPlantName(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label>Perennial</Label>
                    <Input type='checkbox' value={perennial} onChange={(e) => setPerennial(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label>Annual</Label>
                    <Input type='checkbox' value={annual} onChange={(e) => setAnnual(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label>Type of Plant</Label>
                    <Input type='text' value={typeOfPlant} placeholder='Shrub' onChange={(e) => setTypeOfPlant(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label>Lighting Needs</Label>
                    <Input type='text' value={lightingNeeds} placeholder='Full sun' onChange={(e) => setLightingNeeds(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label>Water Needs</Label>
                    <Input type='text' value={waterNeeds} placeholder='drought-tolerant after established; water regularly when young' onChange={(e) => setWaterNeeds(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label>Fertilizer Needs</Label>
                    <Input type='text' value={fertilizerNeeds} placeholder='very little, slow release once per spring at most' onChange={(e) => setFertilizerNeeds(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label>Notes</Label>
                    <Input type='text' value={notes} placeholder='Part of the mint family; smells wonderful!' onChange={(e) => setNotes(e.target.value)} />
                </FormGroup>
                <Buton type='submit'>Plant it!</Buton>
            </Form>
        </div>
    )
}

export default CreatePlant; 

