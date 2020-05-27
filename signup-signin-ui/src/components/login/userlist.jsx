import React, { Component } from 'react';
import Navbar  from "./navbar";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchUsers } from '../../actions/userActions'

class Userlist extends Component {

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        return (
            <div>
                <Navbar/>
                <h1>Users</h1>
                {
                    this.props.users ?
                        <div>
                            {
                                this.props.users.map((item, i) => <div>{item.name}</div>)
                            }
                        </div>
                        : <p>Please Wait...</p>
                }
            </div>
        );
    }
}

Userlist.propTypes = {
    fetchUsers : PropTypes.func.isRequired,
    users : PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    users : state.users.users
})

export default connect(mapStateToProps, {fetchUsers})(Userlist);