import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super();

        this.state = {
            articles : [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/everything?q=cricket&apiKey=8d91428a0f0344cd8bcd71463e79bb37&page=1&pageSize=18";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalArticles: parsedData.totalResults
        });
    }

    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/everything?q=cricket&apiKey=8d91428a0f0344cd8bcd71463e79bb37&page=${this.state.page-1}&pageSize=18`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1
        });
    }

    handleNextClick = async () => {
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/18)){
            
        }
        else{
            let url = `https://newsapi.org/v2/everything?q=cricket&apiKey=8d91428a0f0344cd8bcd71463e79bb37&page=${this.state.page+1}&pageSize=18`;
            console.log(url)
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                articles: parsedData.articles,
                page: this.state.page + 1
            });
        }
    }

    render() {
        return (
            <div className="container my-2">
                <h1 className="mx-4">NewsNet - Top Headlines</h1>
                <div className="row">
                    {this.state.articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title.slice(0, 40)+"..."} imageUrl={element.urlToImage} description={element.description.slice(0, 85)+"..."} newsUrl={element.url}/>
                        </div>
                    })}
                </div>

                <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
                {/* 8d91428a0f0344cd8bcd71463e79bb37 */}
            </div>
        )
    }
}

export default News
