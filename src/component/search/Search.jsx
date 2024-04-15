import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geo_api_url, geocities } from "./api";

const Search = ({ onSearchChange}) => {
  const [search, setSearch] = useState(null);
  
  const handlechange = (searchdata) => {
    setSearch(searchdata);
    onSearchChange(searchdata);
  };

  const loadOptions = async (inputvalue) => {
      const handlechange = (searchdata) => {
      setSearch(searchdata);
      onSearchChange(searchdata);
    }; 
    try {
      const response = await fetch(
        `${geo_api_url}/cities?minPopulation=100000&namePrefix=${inputvalue}`,
        geocities
      );
      const result = await response.json();
      return {
        options:result.data.map((city)=>{
          return{
            value:`${city.latitude} ${city.longitude}`,
            label:`${city.name}, ${city.countryCode}`
          }
        })
      }
      console.log("result",result);
    } catch (error) {
      console.error("error",error);
    }

  
  };
  return (
    <div>
      <AsyncPaginate
        placeholder="search for city"
        debounceTimeout={600}
        value={search}
        onChange={handlechange}
        loadOptions={loadOptions}
      />
    </div>
  );
};

export default Search;
