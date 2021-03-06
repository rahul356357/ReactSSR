
import React from 'react';
import Home from './pages/Home';
import UserList from './pages/UserList';
import App from './App';
import NotFoundPage from './pages/NotFoundPage';
import AdminListPage from './pages/AdminListPage';
export default [
    {
        ...App,
        routes: [
            {
                ...Home,
                path: '/',
                exact: true
            }, 
            {
                ...UserList,
                path: '/users',
            },
            {
                path:'/admins',
                ...AdminListPage
            },
            {
                ...NotFoundPage
            }
        ]
    },
]



