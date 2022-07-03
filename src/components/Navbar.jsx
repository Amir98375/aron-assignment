
import { useNavigate } from 'react-router-dom'
import './TodoInput.css'
export const Navbar=()=>{
    const navigate=useNavigate()
    return(
        <div className="MainDiv">
            <p onClick={()=>navigate('/')}>Add Record</p>
            <p onClick={()=>navigate('/show')}>Show Record</p>
        </div>
    )
}