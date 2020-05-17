import React, { Component } from 'react';
import Navbar  from "./navbar";

class Userlist extends Component {
    constructor() {
        super()
        this.state = {
            list: null,
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/users").then((response) => {
            response.json().then((result) => {
                this.setState({ list: result })
            })
        })
    }

    render() {
        return (
            <div>
                <Navbar/>
                <h1>Users</h1>
                {
                    this.state.list ?
                        <div>
                            {
                                this.state.list.map((item, i) => <div>{item.name}</div>)
                            }
                        </div>
                        : <p>Please Wait...</p>
                }
            </div>
        );
    }
}

export default Userlist;