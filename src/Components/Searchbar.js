import React, {useState} from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const baseApiCall = 'https://pokeapi.co/api/v2/pokemon/';

const Searchbar = props => {
    const [searchword, setSearchword] = useState(null);

    const handleChange = e => {
        setSearchword(e.target.value);
    }

    const handleSearch = () => {
        fetch(baseApiCall+searchword)
        .then(res => {
            if(!res.ok) {
                throw new Error(res.status) 
            } else {
                res.json().then(res => props.changePokemon(res));
                props.setView(true);
            }
        })
        .catch(e => toast.error("Not a pokemon", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        }));
    }

    return (
        <div className="Searchbar">
            <input value={props.value} onChange={handleChange} onKeyDown={e => {if(e.key === 'Enter') handleSearch()}}/>
            <button onClick={handleSearch}>Search</button>
            <ToastContainer 
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
} 

export default Searchbar;