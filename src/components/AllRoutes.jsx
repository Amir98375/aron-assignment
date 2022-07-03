

import { Route,Routes } from "react-router-dom"
import { Navbar } from "./Navbar"
import { TodoEdit } from "./TodoEdit"
import { TodoInput } from "./TodoInput"
import { ShowData } from "./TodoShow"
export const AllRoutes=()=>{
    return(
        <>
        <Navbar/>
         <Routes>
            <Route path="/" element={<TodoInput/>}/>
            <Route path="show" element={<ShowData/>}/>
            <Route path="edit/:id" element={<TodoEdit/>} />
         </Routes>

        </>
    )
}