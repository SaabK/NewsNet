/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        category: 'general'
    }
    
    static propTypes = {
        category: PropTypes.string,
    }

    constructor(props) {
        super(props);

        this.state = {
            articles : [],
            loading: false,
            page: 1
        }
    }

    async updateNews() {
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
    }

    async componentDidMount(){
        this.updateNews();
    }

    handlePrevClick = async () => {
        this.setState({
            page: this.state.page - 1
        });
        this.updateNews();
    }

    handleNextClick = async () => {
        this.setState({
            page: this.state.page + 1
        });
        this.updateNews();
    }

    render() {
        return (
            <div className="container my-2">
                <h1 className="mx-4">NewsNet - Top Headlines</h1>
                {this.state.loading && <Spinner/>}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title?element.title.slice(0, 45)+"...":"Title go Bye Bye"} imageUrl={element.urlToImage} description={element.description?element.description.slice(0, 92)+"...":"The author didn't wrote description because it was to hard to write and the author was lazy."} newsUrl={element.url} time={element.publishedAt?element.publishedAt:"Date Not Found"} source={element.source.name?element.source.name:"IDK"}/>
                        </div>
                    })}
                </div>

                <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}><a href="#" style={{textDecoration: "None", color: "white"}}>&larr; Previous</a></button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/18)} className="btn btn-dark" onClick={this.handleNextClick}><a href="#" style={{textDecoration: "None", color: "white"}}>Next &rarr;</a></button>
                </div>
                {/* 8d91428a0f0344cd8bcd71463e79bb37 */}
            </div>
        )
    }
}

export default News
