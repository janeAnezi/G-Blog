import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import Register from './pages/Register';
import Login from './pages/Login';
import Authors from './pages/Authors';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import DeletePost from './pages/DeletePost';
import UserProfile from './pages/UserProfile';
import Logout from './pages/LogOut';
import CategoryPosts from './pages/CategoryPosts';


import './index.css'
import AuthorPosts from './pages/AuthorPosts';
import Dashboard from './pages/Dashboard';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Home />},
      {path: 'post/:id', element: <PostDetail />},
      {path: '/posts/categories/:category', element: <CategoryPosts/>},
      {path: 'register', element: <Register />},
      {path: 'login', element: <Login />},
      {path: 'profile/:id', element: <UserProfile />},
      {path: 'authors', element: <Authors />},
      {path: '/posts/users/:id', element: <AuthorPosts />},
      {path: 'create', element: <CreatePost />},
      {path: 'posts/:id/edit', element: <EditPost />},
      {path: 'posts/:id/delete', element: <DeletePost />},
      {path: 'myposts/:id', element: <Dashboard />},
      {path: 'logout', element: <Logout />}, 


    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);
