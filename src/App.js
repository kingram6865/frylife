import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import CreateReview from './components/CreateReview';
import Review from './components/Review';
import './App.css';

function App() {
  const [reviews, setReviews] = useState([]);
  const [fetchReviews, setFetchReviews] = useState(false);

  useEffect(()=>{
    // Cannot run async functions directly in useEffect
    // console.log('component has mounted!');
    const getReviews = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/frylife?Grid%20View`;
      const response = await axios.get(airtableURL, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      console.log(response.data.records);
      setReviews(response.data.records);
    }
    getReviews();

  }, [fetchReviews]);

  return (
    <div className="App">
      <div className="review-container">
      {
        reviews.map((review)=>(
          <Review 
            review={review} 
            key={review.id} 
            fetchReviews={fetchReviews}
            setFetchReviews={setFetchReviews}
          />
        ))
      }
      </div>
      <CreateReview 
        fetchReviews={fetchReviews}
        setFetchReviews={setFetchReviews}
      />
    </div>
  );
}

export default App;
