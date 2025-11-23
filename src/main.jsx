import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/*DEPENDENCIAS PARA CRIAR AS ROTAS */
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Home from './routes/Home.jsx'
import Error from './routes/Error.jsx'
import Info from './routes/Info.jsx'

const router=createBrowserRouter([
  {
    //CHAMANDO OS ELEMENTOS PAI
    path:'/',element:<App/>,
    errorElement:<Error/>,

    //CHAMANDO OS ELEMENTOS FILHOS
    children:[
      //CRIANDO A ROTA HOME 
      {path:'/', element:<Home/>},
      //CRIANDO AS OUTRAS ROTAS
      {path:'/info', element:<Info/>},
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
