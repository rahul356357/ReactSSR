
import React from 'react';
import Home from './pages/Home';
import UserList from './pages/UserList';
import App from './App';
import NotFoundPage from './pages/NotFoundPage';
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
                ...NotFoundPage
            }
        ]
    },
]



