
import { createRoot } from 'react-dom/client'

import './index.css'
import {RouterProvider} from 'react-router-dom'
import { routes } from './routes/routes.jsx'
import { AdminContextProvider } from './contexts/adminContext.jsx'
import {  FirebaseAuthContextProvider } from './contexts/FirebaseAuthContext.jsx'
createRoot(document.getElementById('root')).render(

<AdminContextProvider>
    <FirebaseAuthContextProvider>
    <RouterProvider router={routes}/>
    </FirebaseAuthContextProvider>

</AdminContextProvider>


)
