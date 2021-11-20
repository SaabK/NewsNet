import React from 'react'

const NewsItem = (props) => {
	let { title, description, imageUrl, newsUrl, time, source } = props;
	let imgCrop = {
		width: "auto",
		height: "161px"
	}
	return (
		<div>
			<div className="card mx-4 my-3">
				<img style={imgCrop} src={imageUrl === null ? "https://howfix.net/wp-content/uploads/2018/02/sIaRmaFSMfrw8QJIBAa8mA-article.png" : imageUrl} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">
						{title === null ? "Title not found" : title}
						<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
							{source}
						</span>
					</h5>
					<p className="card-text">{description === null ? "Never gonna give u up, description not found" : description}</p>
					<p className="card-text"><small className="text-muted">{new Date(time).toGMTString()}</small></p>
					<a href={newsUrl === null ? "https://www.youtube.com/watch?v=dQw4w9WgXcQ" : newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
				</div>
			</div>
		</div>
	)
}

export default NewsItem

