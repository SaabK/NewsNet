import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
    render() {
        return (
            <div className="text-center">
                <img className="my-2" src={loading} alt="loading gif" style={{width: "2.92rem", height: "auto"}}/>
            </div>
        )
    }
}

export default Spinner
