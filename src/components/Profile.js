import {useNavigate } from 'react-router-dom'
import { useAuth } from './auth'


const Profile = () => {

    const auth = useAuth()
    const navigate = useNavigate()

    const handleLogout = () =>{
        auth.logout()
        navigate('/login')
    }

    return (
        <div>
            Welcome {auth.name}
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Profile
