import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    render() {
        return (
            <div className="container my-2">
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title="Title Right Here..." description="All of the description about this specif news goes right here.."/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="Title Right Here..." description="All of the description about this specif news goes right here.."/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="Title Right Here..." description="All of the description about this specif news goes right here.."/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title="Title Right Here..." description="All of the description about this specif news goes right here.."/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="Title Right Here..." description="All of the description about this specif news goes right here.."/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="Title Right Here..." description="All of the description about this specif news goes right here.."/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title="Title Right Here..." description="All of the description about this specif news goes right here.."/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="Title Right Here..." description="All of the description about this specif news goes right here.."/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="Title Right Here..." description="All of the description about this specif news goes right here.."/>
                    </div>
                </div>
                
                {/* 8d91428a0f0344cd8bcd71463e79bb37 */}
            </div>
        )
    }
}

export default News
