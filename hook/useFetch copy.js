import { useState, useEffect } from 'react';
import axios from "axios";
// import {RAPID_API_KEY} from '@env'


// const repidApiKey = RAPID_API_KEY;

const usefetch = (endpoint, query) =>{
  const[data, setData] = useState([]);
  const[isLoading, setIsLoading] = useState([false]);
  const[error, setError] = useState([null]);

  // const axios = require('axios');

  // apikey = 99c7b1084amsh151fa6dd6d7e153p198e18jsn3dc82578949a

const options = {
  method: 'GET',
  url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  headers: {
    'X-RapidAPI-Key': '99c7b1084amsh151fa6dd6d7e153p198e18jsn3dc82578949a',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  },
  params: { ...query },
};

  const fetchData = async () =>{
    setIsLoading(true);

    try{
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
    }catch(error){
      setError(error);
      alert('There is an error')
    }finally{
      setIsLoading(false);
    }
  }

  useEffect(() =>{
    fetchData();
  }, []);

  const refetch = () =>{
    setIsLoading(true);
    fetchData();
  };

  return {data, isLoading, error, refetch}
};

export default usefetch;