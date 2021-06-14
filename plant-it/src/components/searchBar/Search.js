import React, {useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchBar from './SearchBar';


const SearchPlants = () => {

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

    return (
        <Router>
            <div className="Search">
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
                <ul>
                    {filteredPlants.map((plants) =>
                    <li>{plants.plantName}</li>
                    )}
                </ul>
            </div>
        </Router>
    )
}

export default SearchPlants;