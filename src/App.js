import React, {useState} from 'react'
import Rating from './components/Rating'
import Success from './components/Success'

export default function App() {
  const [rated, setRated] = useState(false);
  const [rating, setRating] = useState(0);
  return (
    <div className="App">
      {!rated ? 
        <Rating rated_data={setRated} rating_data={setRating} rating={rating}/> :
        <Success rating={rating}/>
      }
    </div>
  );
}