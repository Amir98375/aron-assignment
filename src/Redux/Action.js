import* as types from './ActionType'
import axios from "axios"

const fetchdataRequest=(payload)=>{
   return{
     type:types.fetch_data_Request,
     payload
   }
}

const fetchdataSuccess=(payload)=>{
    return{
type:types.fetch_data_Success,
payload
    }
}

const fetchdataFailure=(payload)=>{
    return{
        type:types.fetch_data_Failure,
        payload
    }
}

export const fetchData=(payload)=>(dispatch)=>{
     dispatch(fetchdataRequest())
     axios.get(`https://my-json-server-u6.herokuapp.com/cities`,{
        params:{
            ...payload
        }
     })
     .then((res)=>dispatch(fetchdataSuccess(res.data)))
     .catch((err)=>dispatch(fetchdataFailure(err.data)))
}

//delete request
const fetchdeleteRequest=(payload)=>{
    return{
      type:types.delete_data_Request,
      payload
    }
 }
 
 const fetchdeleteSuccess=(payload)=>{
     return{
 type:types.delete_data_Success,
 payload
     }
 }
 
 const fetchdeleteFailure=(payload)=>{
     return{
         type:types.delete_data_Failure,
         payload
     }
 }

 export const deleteData=(payload)=>(dispatch)=>{
    dispatch(fetchdataRequest())
    axios.delete(`https://my-json-server-u6.herokuapp.com/cities/${payload}`)
    .then((res)=>{
        dispatch(fetchdeleteSuccess())
        dispatch(fetchData())
        // console.log(res)
    })
    .catch((err)=>dispatch(fetchdataFailure(err)))
}


//Add data
const AddDataRequest=(payload)=>{
    return{
      type:types.Add_data_Request,
      payload
    }
 }
 
 const AddDataSuccess=(payload)=>{
     return{
 type:types.Add_data_Success,
 payload
     }
 }
 
 const AddDataFailure=(payload)=>{
     return{
         type:types.Add_data_Failure,
         payload
     }
 }




 
 export const AddData=(payload)=>(dispatch)=>{
    dispatch(UpdateDataRequest)
    axios.post(`https://my-json-server-u6.herokuapp.com/cities`,payload)
    .then((res)=>{
        dispatch(AddDataSuccess())
        dispatch(fetchData())
        // console.log(res)
    })
    .catch((err)=>dispatch(AddDataFailure(err)))
}


//update crud
const UpdateDataRequest=(payload)=>{
    return{
      type:types.Update_data_Request,
      payload
    }
 }
 
 const UpdateDataSuccess=(payload)=>{
     return{
 type:types.Update_data_Success,
 payload
     }
 }
 
 const UpdateDataFailure=(payload)=>{
     return{
         type:types.Update_data_Failure,
         payload
     }
 }



export const updateteData=(payload,id)=>(dispatch)=>{
    console.log('actions',payload,id)
    dispatch(UpdateDataRequest())
    axios.put(`https://my-json-server-u6.herokuapp.com/cities/${id}`,{...payload})
    .then((res)=>{
        dispatch(UpdateDataSuccess())
        dispatch(fetchData())
        // console.log(res)
    })
    .catch((err)=>dispatch(UpdateDataFailure(err)))
}