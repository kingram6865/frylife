import React from 'react';
import UpdateReview from './UpdateReview';

function Review (props){
	const { author, title, text} = props.review.fields;
	const { fetchReviews, setFetchReviews, review } = props;

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
		</div>
	)
}

export default Review;