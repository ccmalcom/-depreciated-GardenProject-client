import React, {useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchBar from './SearchBar';


const SearchPlants = () => {
    const [plants, setPlants] = useState([]);
    
    const fetchPlants = (e) => {
        e.preventDefault();
        fetch('http://wd85-plant-it2.herokuapp.com/plant/all', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
            })
        })
        .then((res) => res.json())
        .then((plantData) => {
            setPlants(plantData);
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
    

    const {search} = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredPlants = filterPlants(plants, searchQuery);
    
    const searchMapper = () => {
        return filteredPlants.map((plant, index) => {
            return(
                <tr key={index}>
                <th scope='row'>{plant.plantName}</th>
                <td>{plant.typeOfPlant}</td>
                <td>{plant.lightingNeeds}</td>
                <td>{plant.waterNeeds}</td>
                <td>{plant.fertilizerNeeds}</td>
                <td>
                    <button>MyGarden <b>+</b></button>
                    <button>View</button>
                </td>
            </tr>
            )
        })
    }

    return (
        <Router>
            <div className="Search">
                <SearchBar fetchPlants={fetchPlants} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
                {/* <div className="Search Results"> */}
                    {/* {filteredPlants.map((plants) =>
                    <a href="/ViewPlant" >
                        {plants.plantName}
                    </a> */}
                    {/* )} */}
                {/* </div> */}
                
            </div>
            <>
            <h2>Search Results</h2>
            <table>
                <thead>
                    <tr>
                        <th>Plant</th>
                        <th>Type</th>
                        <th>Lighting Needs</th>
                        <th>Water Needs</th>
                        <th>Fertilizer Needs</th>
                    </tr>
                </thead>
                <tbody>
                    {searchMapper()}
                </tbody>
            </table>
        </>
        </Router>
    )
}

export default SearchPlants;

