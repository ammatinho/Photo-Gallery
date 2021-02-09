import React, { useState, useEffect } from 'react';
import PhotoCard from './components/PhotoCard';
import PhotoSearch from './components/PhotoSearch';

function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    // * fetch data * (option 1)
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        //console.log(data)
        
        // * set photos in the state *
        setPhotos(data.hits);
        console.log(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err))

    // * fetch data - async way * (option 2)
    // const fetchData = async () => {
    //   const res = await fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`);
    //   const data = await res.json();

    //   // setPhotos(data);
    //   // console.log(data);
      
    //   // * set photos in the state *
    //   setPhotos(data.hits);
    //   console.log(data.hits);
    //   setIsLoading(false);
    // }
    // fetchData();

  }, [term] /* add term as a dependency so each time term changes - input on search - the data is fetched/it will run again */);

  return (
    <div className="container mx-auto">
      <PhotoSearch 
        searchText={(text) => setTerm(text) /* this setTerm(text) will set term in the state */ } 
      /> 

      {!isLoading && photos.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Photos Found</h1> }

      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : <div className="grid grid-cols-3 gap-4">
        {photos.map(photo => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>}
    </div>
  );
}

export default App;