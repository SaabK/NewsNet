/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


export class News extends Component {

    constructor(props) {
        super(props);

        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
    }

    static defaultProps = {
        category: 'general'
    }

    static propTypes = {
        category: PropTypes.string,
    }

    async updateNews() {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&language=en&apiKey=8d91428a0f0344cd8bcd71463e79bb37&page=${this.state.page}&pageSize=18`;
        this.setState({
            loading: true
        })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalArticles: parsedData.totalResults,
            loading: false
        });
        this.props.setProgress(100);
    }

    async componentDidMount() {
        this.updateNews();
    }

     fetchMoreData = async () => {
        this.setState({
            page: this.state.page + 1
        });
        let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&language=en&apiKey=8d91428a0f0344cd8bcd71463e79bb37&page=${this.state.page}&pageSize=18`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalArticles: parsedData.totalResults
        });
      };

    render() {
        return (
            <>
                <h1 className="mx-4">NewsNet - Top Headlines</h1>
                {this.state.loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => {
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
}

export default News
