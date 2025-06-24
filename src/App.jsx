import Header from "./components/Header"
import React, {lazy} from "react"
import Body from "./components/Body"
import About from "./components/About"
import Error from "./components/Error"
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom"
import Contact from "./components/Contact"
import RestaurantMenu from "./components/RestaurantMenu"
// import Grocery from "./components/Grocery"


const Grocery = lazy(() => import("./components/Grocery"))
const  App = () => {
  
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/grocery",
        element: <Grocery/>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
      }
    ],
  },
  

])



createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}/>
)


