import React, { useEffect } from 'react';
import Navbar  from "./navbar";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchUsers } from '../../actions/userActions'

const Userlist = (props) => {

    useEffect(() =>{
        props.fetchUsers();
    })

        return (
            <div>
                <Navbar/>
                <h1>Users</h1>
                {
                    props.users ?
                        <div>
                            {
                                props.users.map((item, i) => <div>{item.name}</div>)
                            }
                        </div>
                        : <p>Please Wait...</p>
                }
            </div>
        );
}

Userlist.propTypes = {
    fetchUsers : PropTypes.func.isRequired,
    users : PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    users : state.users.users,
    newUser: state.users.user
})

export default connect(mapStateToProps, {fetchUsers})(Userlist);