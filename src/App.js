

import AppRouter from './routers/AppRouter'
import { BrowserRouter } from 'react-router-dom'
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"


function App () {




  return (

    <BrowserRouter>
      <AppRouter></AppRouter>
    </BrowserRouter>

  )
}

export default App
