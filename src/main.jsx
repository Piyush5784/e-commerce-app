import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ProductListProvider } from './Context/ProductList.jsx'
import { CartsContextProvider } from './Context/CartsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <ProductListProvider>
    <CartsContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    </CartsContextProvider>
  </ProductListProvider>

)
