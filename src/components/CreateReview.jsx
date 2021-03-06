import React, { useState } from 'react';
import axios from 'axios';

function CreateReview(props){
	const [title, setTitle] = useState('');
	const [text, setText] = useState('');
	const [author, setAuthor] = useState('Anonymous');

	async function handleSubmit(event){
		event.preventDefault();
		const fields = {
			title,
			text,
			author
		}

		const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/frylife`;
		await axios.post(airtableURL, { fields }, {
			headers: {
				'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
				'Content-Type': 'application/json'
			}
		});
		props.setFetchReviews(!props.fetchReviews);
		setTitle('');
		setText('');
		setAuthor('');
	}

	return (
		<form onSubmit={handleSubmit}>
		<label htmlFor="title">Title:</label>
		<input 
			name="title" 
			type="text" 
			value={title} 
			onChange={(event) => setTitle(event.target.value)}
			/>
		<label htmlFor="text">Text:</label>
		<input 
			name="text" 
			type="text" 
			value={text} 
			onChange={(event) => setText(event.target.value)}
			/>
		<label htmlFor="author">Author:</label>
		<input 
			name="author" 
			type="text" 
			value={author} 
			onChange={(event) => setAuthor(event.target.value)}
			/>
		<button>Fry Me Cap'n</button>
		</form>
		)
}

export default CreateReview;