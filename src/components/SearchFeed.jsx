import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Videos } from './';


const SearchFeed = () => {
  const { search } = useParams();

  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${search}`).then((data) => setResults(data.items));
  }, [search]);


  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant="h4" fontweight="bold" mb={2} sx={{ color: 'white' }}>
        Searech Results for  <span style={{ color: "#F31503" }}>{search}</span> videos
      </Typography>

      <Videos results={results} />
    </Box>
  )
}

export default SearchFeed