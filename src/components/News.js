import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

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

    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/everything?q=cricket&apiKey=8d91428a0f0344cd8bcd71463e79bb37&page=${this.state.page-1}&pageSize=18`;
        this.setState({
            loading: true
        })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1,
            loading: false
        });
    }

    handleNextClick = async () => {
        if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/18))){
            let url = `https://newsapi.org/v2/everything?q=cricket&apiKey=8d91428a0f0344cd8bcd71463e79bb37&page=${this.state.page+1}&pageSize=18`;
            this.setState({
                loading: true
            })
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                articles: parsedData.articles,
                page: this.state.page + 1,
                loading: false
            });
        }
    }

    render() {
        return (
            <div className="container my-2">
                <h1 className="mx-4">NewsNet - Top Headlines</h1>
                {this.state.loading && <Spinner/>}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title.slice(0, 40)+"..."} imageUrl={element.urlToImage} description={element.description.slice(0, 85)+"..."} newsUrl={element.url}/>
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
