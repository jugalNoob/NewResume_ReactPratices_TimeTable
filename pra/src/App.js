import React from 'react'
import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom'
import Usedstate from "./page/AllState/Usestate"
import Error from "./page/Error"
import Home from "./page/Home"
import Usecall from "./page/Performance/Usecallback"
import UseMemo from "./page/Performance/UseMemo"
import API from "./page/project/API"
import Logout from './page/project/Logout'
import Product from "./page/project/Product"
import Progbar from './page/project/Progbar'
import Todo from './page/project/Todo'




const router=createBrowserRouter([  /// install react router https://medium.com/@adebayosilas/introduction-to-react-router-v6-4-6-11-1-f56c7710282e
{
path:"/",
element: <Home/>,
errorElement:<Error/>
},

{
  path: "products",
  element: <Product /> ,
  errorElement:<Error/>

},

{
  path: "products",
  element: <Product /> 

},

{
  path: "pro/:id",
  element: <Progbar /> 

},

{
  path: "api",
  element: <API /> 

},

{
  
  path: "todo",
  element: <Todo /> 

},

{
  
  path: "par",
  element: <UseMemo /> 

},

{
  
  path: "out",
  element: <Logout /> 

},


{
  
  path: "call",
  element: <Usecall /> 

},

{

  path:"calls",
  element:<Usedstate/>
}

])



function App(){
  return <RouterProvider router={router} />
}
export default App