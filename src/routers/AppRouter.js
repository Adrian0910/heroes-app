import React, { useContext } from 'react'
import { LoginScreen } from '../components/login/LoginScreen'


import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
import { BrowserRouter as Router, Switch} from 'react-router-dom'
import { DashboardRoutes } from './DashboardRoutes'
import { AuthContext } from '../auth/AuthContext'


/* Este vendria siendo el archivo principal de las rutas */
export const AppRouter = () => {

  const {user} = useContext(AuthContext);

  return (
    <Router>
      <div>
        {/* Aqui podria ir un estilo global para la app */}
        <Switch>
            <PublicRoute exact 
              path="/login" 
              component={LoginScreen}
              isAuthenticated={user.logged} 
            />
            <PrivateRoute 
              path="/" 
              component={DashboardRoutes} 
              isAuthenticated={user.logged}
            />
        </Switch>

      </div>
    </Router>
  )
}
