import React from 'react'
import PropTypes from 'prop-types'
import {Routes, Route} from 'react-router-dom'
import Layout from '../layout/Layout'
import PageAboutProject from '../pages/PageAboutProject'
import PageAdmin from '../pages/PageAdmin'
import PageProfile from '../pages/PageProfile'
import PageLogout from '../pages/PageLogout'
import PageError from '../pages/PageError'
import LoginForm from 'components/LoginForm/LoginForm'
import PageStats from '../pages/PageStats'
import AuthRequireRole from '../services/auth/AuthRequireRole'

export default function App({user}) {
  return (
    <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<PageAboutProject />}/>
            <Route path="/show_pages" element={<PageAdmin user={user} />} />
            <Route path="/profile" element={ <PageProfile user={user} />}/>
            <Route path="/login" element={< LoginForm />}/>
            <Route path="/logout" element={<PageLogout />} />
            <Route path="/stats" element={<AuthRequireRole><PageStats/></AuthRequireRole>}/>
            <Route path="*" element={<PageError />} />
          </Route>
        </Routes>
     </>
  )
}

//Props types
App.defaultProps = {
  user: {}
}
App.propTypes = {
user: PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
  role: PropTypes.string,
  password: PropTypes.string

})
}