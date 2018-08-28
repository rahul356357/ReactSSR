import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import {Helmet } from 'react-helmet';
class UserList extends React.Component {

    componentDidMount() {
         this.props.fetchUsers();
    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        })
    }

    head(){
        return(
            <Helmet>
            <title>{`${this.props.users.length} Users Loaded`}</title>
            <meta property="og:title" content="Users App"></meta>
           </Helmet>
        )
    }

    render() {
        return (
            <div>
               {this.head()}
                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export const loadData = (store) => {
    return store.dispatch(fetchUsers());
}
export default {
component: connect(mapStateToProps, { fetchUsers })(UserList),
loadData:loadData
}
