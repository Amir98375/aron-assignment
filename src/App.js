import './App.css'
import { AllRoutes } from './components/AllRoutes';
import { TodoInput } from "./components/TodoInput";
import { ShowData } from './components/TodoShow';

function App() {
  return (
    <div className="App">
     {/* <TodoInput/>
     <ShowData/> */}
   <AllRoutes/>
    </div>
  );
}

export default App;
