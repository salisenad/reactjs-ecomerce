import React from 'react'

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Signin from './user/signin';
import Signup from './user/Signup'
import Home  from './core/Home'
import Menu from './core/Menu';
import PrivateRoute from './auth/PrivateRoute'
import Dashboard from './user/UserDashboard'
import AdminRoute from './auth/AdminRoute';
import AdminDashboard from "./user/AdminDashboard"
import AddCategory from "./admin/AddCategory"
import AddProduct from "./admin/AddProduct"

const Routes = () => {
    return (<BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/signin" exact component={Signin}/>
            <Route path="/signup" exact component={Signup}/>
            <Route path="/user/dashboard" exact component={Dashboard}/>
            {/* <Route path="/admin/dashboard" exact component={AdminDashboard} /> */}
            {/* <PrivateRoute path="/dashboard" exact component={Dashboard}/> */}
            <AdminRoute 
            path="/admin/dashboard"
            exact 
            component={AdminDashboard}/>
            <AdminRoute 
            path="/create/category"
            exact
            component={AddCategory}
            />
            <AdminRoute 
            path="/create/product"
            exact
            component={AddProduct}/>
        </Switch>
    </BrowserRouter>
    )
}

export default Routes;