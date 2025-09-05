import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import route from './routes/route'
import store from './redux/store'
import './index.css'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
    
    <Provider store={store}>
        <RouterProvider router={route}/>
    </Provider>
    
)
