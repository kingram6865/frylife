import React from 'react';

function Review (props){
	const { author, title, text} = props.review.fields;
	return (
		<div>
			<h4>{title}</h4>
			<h5>{author}</h5>
			<p>{text}</p>
		</div>
	)
}

export default Review;