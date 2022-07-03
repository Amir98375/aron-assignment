import* as types from './ActionType'
const initialState={
    laoding:false,
    error:false,
    data:[]
}
export const userReducer=(state=initialState,action)=>{
   const {type,payload}=action
   switch(type){
       case types.fetch_data_Request:
       return{
        ...state,
        laoding:true,
        error:false
       }
       case types.fetch_data_Success:
        return{
            ...state,
            laoding:false,
            data:payload,
            Error:false
            
        }
        case types.fetch_data_Failure:
            return{
                ...state,
                laoding:false,
                Error:true
            }
        case types.delete_data_Request:
            return{
                ...state,
                laoding:true,
                Error:false
                
            }
         case types.delete_data_Success:
            return{
                ...state,
                laoding:false
            }
         case types.delete_data_Failure:
            return{
                ...state,
                Error:true,
                laoding:false
            }
            case types.Add_data_Request:
                return{
                    ...state,
                    
                    laoding:true,
                    Error:false
                }
              case types.Add_data_Success:
                return{
                    ...state,
                    laoding:false
            
                }
               case types.Add_data_Failure:
                return{
                    ...state,
                    laoding:false,
                    Error:true
                }
                case types.Update_data_Request:
                    return{
                        ...state,
                        laoding:true,
                        Error:false
                        
                    }
                 case types.Update_data_Success:
                    return{
                        ...state,
                        laoding:false
                    }
                 case types.Update_data_Failure:
                    return{
                        ...state,
                        Error:true,
                        laoding:false
                    }                

            default:
                return state
                
                
   }
}