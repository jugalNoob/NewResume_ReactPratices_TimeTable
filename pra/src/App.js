import React from 'react'
import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom'
import Error from "./page/Error"
import Home from "./page/Home"
import Product from "./page/Product"
import Progbar from './page/Progbar'

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
  path: "pro",
  element: <Progbar /> 

},
])



function App(){
  return <RouterProvider router={router} />
}
export default App