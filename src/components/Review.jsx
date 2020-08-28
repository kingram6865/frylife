import React from 'react';
import axios from 'axios';
import UpdateReview from './UpdateReview';

function Review (props){
	const { author, title, text} = props.review.fields;
	const { fetchReviews, setFetchReviews, review } = props;

	async function handleDelete(){
		const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/frylife/${review.id}`;
		// Make the delete request
		await axios.delete(airtableURL, {
			headers: {
				'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
			}
		});
		// Refresh the reviews from the database
		setFetchReviews(!fetchReviews);

	}


	return (
		<div>
			<h4>{title}</h4>
			<h5>{author}</h5>
			<p>{text}</p>
			<UpdateReview 
				fetchReviews={fetchReviews}
				setFetchReviews={setFetchReviews}
				review={review}
			/>
			<button onClick={handleDelete}>Delete!</button>
		</div>
	)
}

export default Review;