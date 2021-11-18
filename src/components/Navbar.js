/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <NavLink  className="navbar-brand" to="/">NewsNet</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink  className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <NavLink  className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Category
                                    </NavLink>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><NavLink className="dropdown-item" to="/business">Business</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/science">Science</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/gaming">Gaming</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/technology">Technology</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/sports">Sports</NavLink></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><NavLink className="dropdown-item" to="/contact">Contact Us</NavLink></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
