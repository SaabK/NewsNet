/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {

	const [articles, setArticles] = useState([])
	const [loading, setLoading] = useState(true)
	const [page, setPage] = useState(1)
	const [totalResults, setTotalResults] = useState(0)

	const updateNews = async () => {
		props.setProgress(10);

		let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&language=en&apiKey=8d91428a0f0344cd8bcd71463e79bb37&page=${page}&pageSize=18`;

		setLoading(true);

		let data = await fetch(url);
		let parsedData = await data.json();

		setArticles(parsedData.articles);
		setTotalResults(parsedData.totalResults);
		setLoading(false);

		props.setProgress(100);
	}

	useEffect(() => {
		updateNews();
	}, [])

	const fetchMoreData = async () => {
		let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&language=en&apiKey=8d91428a0f0344cd8bcd71463e79bb37&page=${page+1}&pageSize=18`;
		
		setPage(page + 1)
		
		let data = await fetch(url);
		let parsedData = await data.json();

		setArticles(articles.concat(parsedData.articles));
		setTotalResults(parsedData.totalResults);
	};
	return (
		<>
			<h1 className="mx-4">NewsNet - Top Headlines</h1>
			{loading && <Spinner />}
			<InfiniteScroll
				dataLength={articles.length}
				next={fetchMoreData}
				hasMore={articles.length !== totalResults}
				loader={<Spinner />}
			>
				<div className="container">
					<div className="row">
						{articles.map((element) => {
							return <div className="col-md-4" key={element.url}>
								<NewsItem title={element.title ? element.title.slice(0, 45) + "..." : "Title go Bye Bye"} imageUrl={element.urlToImage} description={element.description ? element.description.slice(0, 92) + "..." : "The author didn't write description because it was to hard to write and the author was lazy."} newsUrl={element.url} time={element.publishedAt ? element.publishedAt : "Date Not Found"} source={element.source.name ? element.source.name : "IDK"} />
							</div>
						})}
					</div>
				</div>
			</InfiniteScroll>
		</>
	)
}

News.defaultProps = {
	category: 'general'
}

News.propTypes = {
	category: PropTypes.string,
}

export default News
