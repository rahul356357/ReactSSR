import React from 'react';
import { connect } from 'react-redux'
import { fetchAdmins } from '../actions';
import RequireAuth  from '../components/hocs/RequireAuth'



class AdminList extends React.Component {

    componentDidMount() {
        this.props.fetchAdmins();
    }

    renderAdmin () {
        return ( 
           this.props.admin.length>0 ? this.props.admin.map((admin) => {
                return <li key={admin.id}>{admin.name} </li>
            }):<li>No</li>
        )
    }
    render() {
        return (
            <div>
                <p>Coool Secret list</p>
                <ul>
                    {this.renderAdmin()}
                </ul>
            </div>
        )
    }


}



const mapStateToProps = ({ admin }) => {
    return {
        admin: admin
    }
};

export default {
    component: connect(mapStateToProps, { fetchAdmins })(RequireAuth(AdminList)),
    loadData: ({ dispatch }) => { dispatch(fetchAdmins()) }
}