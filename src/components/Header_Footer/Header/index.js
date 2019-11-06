import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <header className="bck_b_light">
                <div className="container">
                    <div className="left">
                        <div className="logo">
                            Guitar
                       </div>
                    </div>
                    <div className="right">
                        <div className="top">
                            Top
                        </div>
                        <div className="bottom">
                            Bottom
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header
