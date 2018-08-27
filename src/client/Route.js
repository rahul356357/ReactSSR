
import React from 'react';
import Home from './pages/Home';
import UserList from './pages/UserList';
export default [{
      ...Home , 
        path:'/' ,
        exact:true 
    },
     {
        path:'/users',
        ...UserList, 
    }]



