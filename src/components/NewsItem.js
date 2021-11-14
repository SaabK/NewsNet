import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl} = this.props;

        let picDim = {
            width: "286px",
            height: "147px"
        }
        return (
            <div>
                <div className="card mx-4 my-3" style={{width: "18rem"}}>
                    <img style={picDim} src={imageUrl===null?"https://howfix.net/wp-content/uploads/2018/02/sIaRmaFSMfrw8QJIBAa8mA-article.png":imageUrl} className="card-img-top" alt="..."/>
                    <div className ="card-body">
                    <h5 className ="card-title">{title===null?"Title not found":title}</h5>
                    <p className ="card-text">{description===null?"Never gonna give u up, description not found":description}</p>
                    <a href={newsUrl===null?"https://www.youtube.com/watch?v=dQw4w9WgXcQ":newsUrl} rel="noreferrer" target="_blank" className ="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem

