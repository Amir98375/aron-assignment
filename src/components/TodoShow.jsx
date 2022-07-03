import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteData, fetchData } from '../Redux/Action';
import './TodoShow.css'
import {AiFillDelete} from 'react-icons/ai'
import {BiEdit} from 'react-icons/bi'
import { useState } from 'react';
import { TodoEdit } from './TodoEdit';
import { useNavigate } from 'react-router-dom';

export const ShowData=()=>{
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const data=useSelector((state)=>state.userReducer.data)
    useEffect(()=>{
dispatch(fetchData())
    },[dispatch])
    console.log(data)
 
    const handleDelete=(id)=>{
           dispatch(deleteData(id))
        // dispatch(fetchData())
        

    }
    
    return(
        <div>
            
            <table className='main'>
                <thead className='tablerow'> 
                  <td>First Name</td>
                    <td>Last Name</td>
                    <td>Email</td>
                    <td>Mobile</td>
                    <td>Delete</td>
                    <td>Edit</td>
                </thead>
               
                {data?.map((el)=><tr className='tablecontent'>

                        <td>{el.first_name}</td>
                        <td>{el.last_name}</td>
                        <td>{el.email}</td>
                        <td>{el.mobile}</td>
                       <td className='button'> <button className='button' onClick={()=>handleDelete(el.id)}><AiFillDelete/></button></td>
                        <td className='button'><button className='button' onClick={()=>navigate(`/edit/${el.id}`)}><BiEdit/></button></td>
                    </tr>
                )}
            </table>
        </div>
    )
}