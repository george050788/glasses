import React from 'react'
import { Header, Footer, MyBasket } from '../components'
import { Routes, Route } from 'react-router-dom'
import { Signin, Signup, Home, Shop, Featured, Recommended, Search, Person, MyOrder, MyWish, Account, Notfound, Details, Checkout, Step1, Step2, Step3, Step4 } from '../views'
import ClientRoute from './ClientRoute.js'
import AuthRoute from './AuthRoute.js'

export default function AppRouter () {
  return (
    <>
      <Header></Header>
      <MyBasket></MyBasket>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/shop' exact element={<Shop />} />
        <Route path='/featured' exact element={<Featured />} />
        <Route path='/recommended' exact element={<Recommended />} />
        <Route path='/details/:productid' exact element={<Details />} />
        <Route path='/search/:keyword' exact element={<Search />} />
        <Route path='/signin' exact element={<AuthRoute><Signin /></AuthRoute>} />
        <Route path='/signup' exact element={<AuthRoute><Signup /></AuthRoute>} />
        <Route path='/person' exact element={<ClientRoute><Person /></ClientRoute>} >
          <Route index element={<Account />} />
          <Route path='account' exact element={<Account />} />
          <Route path='myorder' exact element={<MyOrder />} />
          <Route path='mywish' exact element={<MyWish />} />
        </Route>
        <Route path='*' exact element={<Notfound />} />
        <Route path='/checkout' exact element={<Checkout />} >
          <Route index element={<Step1 />} />
          <Route path='step1' exact element={<Step1 />} />
          <Route path='step2' exact element={<Step2 />} />
          <Route path='step3' exact element={<Step3 />} />
          <Route path='step4' exact element={<Step4 />} />
        </Route>

      </Routes>

      <Footer></Footer>

    </>
  )
}