import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { AdminLayout } from './components/layout/AdminLayout/AdminLayout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>Login</div>} />
        <Route path='/users' element={<AdminLayout>Users</AdminLayout>} />
        <Route path='/classes' element={<AdminLayout>Classes</AdminLayout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;