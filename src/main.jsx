import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import route from './routes/route'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={route}/>
)
