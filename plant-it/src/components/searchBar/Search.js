import React, {useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchBar from './SearchBar';


const SearchPlants = () => {
    const [plants, setPlants] = useState([]);
    const [plantName, setPlantName] = useState();
    const [typeOfPlant, setTypeOfPlant] = useState();
    const [lightingNeeds, setLightingNeeds] = useState();
    const [waterNeeds, setWaterNeeds] = useState();
    const [fertilizerNeeds, setFertilizerNeeds] = useState();
    const [notes, setNotes] = useState();
    let baseURL = 'http://wd85-plant-it.herokuapp.com/garden/:plantName';

    const fetchPlants = (plant) => {
        fetch(baseURL, {
            method: 'GET',
            body: JSON.stringify({plantName: plantName, typeOfPlant:typeOfPlant, lightingNeeds: lightingNeeds, waterNeeds: waterNeeds, fertilizerNeeds: fertilizerNeeds, notes: notes}),
            headers: new Headers ({
                'Content-Type': 'application/json',
            })
        })
        .then((res) => res.json())
        .then((plantData) => {
            setPlants(plantData)
            console.log(plants, plantData);
        })
    }
    
    const filterPlants = (plants, query) => {
        if (!query) {
            return plants;
        }
    
        return plants.filter((plant) => {
            const plantName = plant.plantName.toLowerCase();
            return plantName.includes(query);
        });
    };
    


    const [plants, setPlants] = useState([]);
    let url = 'http://wd85-plant-it.herokuapp.com/garden/plantName';

    fetch(url) 
    .then(res => res.json())
    .then(data => setPlants(data.response.plants))
    .catch(err => console.log(err));


    const {search} = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredPlants = filterPlants(plants, searchQuery);

    
    const plantMapper = () => {
        return filteredPlants.map((plant, index) => {
            return (
                <tr key={index}>
                    <th scope='row'>{plant.plantName}</th>
                    <td>{plant.typeOfPlant}</td>
                    <td>{plant.lightingNeeds}</td>
                    <td>{plant.waterNeeds}</td>
                    <td>{plant.fertilizerNeeds}</td>
                </tr>
            )
        })
    }

    return (
        <Router>
            <div className="Search">
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
                <h2>Search Results:</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Plant</th>
                            <th>Type</th>
                            <th>Lighting Needs</th>
                            <th>Water Needs</th>
                            <th>Fertilizer Needs</th>
                        </tr>
                        <tbody>
                            {plantMapper()}
                        </tbody>
                    </thead>
                </table>
            </div>
        </Router>
    )
}

export default SearchPlants;

