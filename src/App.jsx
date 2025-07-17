import Header from "./components/Header"
import React, {lazy} from "react"
import Body from "./components/Body"
// import About from "./components/About"
import Error from "./components/Error"
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom"
import Contact from "./components/Contact"
import RestaurantMenu from "./components/RestaurantMenu"
// import Grocery from "./components/Grocery"
import { Provider } from "react-redux"
import AppStore from "./utils/AppStore"
import Cart from "./components/Cart"


const Grocery = lazy(() => import("./components/Grocery"))
const About = lazy(()=> import("./components/About"))
const  App = () => {
  
  return (
    
    <Provider store={AppStore}>
      <div>
        <Header/>
        <Outlet/>
      </div>
    </Provider>
   
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
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ],
  },
  

])



createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}/>
)


