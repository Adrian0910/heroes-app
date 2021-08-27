import React from 'react'
import { LoginScreen } from '../components/login/LoginScreen'


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { DashboardRoutes } from './DashboardRoutes'


/* Este vendria siendo el archivo principal de las rutas */
export const AppRouter = () => {
  return (
    <Router>
      <div>
        {/* Aqui podria ir un estilo global para la app */}
        <Switch>
            <Route exact path="/login" component={LoginScreen} />
            <Route path="/" component={DashboardRoutes} />
        </Switch>

      </div>
    </Router>
  )
}
