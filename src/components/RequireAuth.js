import {useNavigate, useLocation} from 'react-router-dom'
import {useAuth} from './auth'

export const RequireAuth = ({ children }) =>{
    const auth = useAuth()
    const Navigate = useNavigate()
    const location = useLocation()

    if(!auth.user){
        return <Navigate to='/login' state={{ path:location.pathname}} />
    }
    
    return children
}

