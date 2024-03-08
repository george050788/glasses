import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { clientId } from './constant'
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
  BraintreePayPalButtons
} from "@paypal/react-paypal-js"
import { useSelector } from 'react-redux'
import arrowback from '../../images/arrow_back.svg'
import arrowforward from '../../images/arrow_forward.png'


export default function Step3 () {



  const navigate = useNavigate()
  const { state } = useLocation()
  // console.log('state.from 3', state?.from)
  console.log('step3 state:', state)


  const basketList = useSelector(state => state.basket.basketList)




  // console.log('step 3 price', state?.totalPrice)


  const back = () => {
    navigate('/checkout/step2', { state: { totalprice: state?.totalprice } })
  }

  // const [orderIDInfo, setOrderIDInfo] = useState(false)

  // const submit = (e) => {
  //   if (orderIDInfo == true) {
  //     e.preventDefault()
  //     navigate('/checkout/step4', {
  //       state: {
  //         totalPrice: state?.totalprice, orderId: orderIDInfo, basketList: basketList, from: '/checkout/step3', fullname: state?.fullname, email: state?.email, address: state?.address, mobile: state?.mobile
  //       }
  //     })
  //   }
  // }




  const pay = async () => {
    window.paypal.Buttons({
      async createOrder () {
        try {
          const response = await fetch("/api/orders", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify({
              cart: {

                totalPrice: state?.totalprice
              },
            }),
          })

          const orderData = await response.json()
          console.log('orderData:', orderData)
          if (orderData.id) {

            return orderData.id

          } else {
            const errorDetail = orderData?.details?.[0]
            const errorMessage = errorDetail
              ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
              : JSON.stringify(orderData)

            throw new Error(errorMessage)
          }
        } catch (error) {
          console.error(error)

          console.info(`Could not initiate PayPal Checkout...<br><br>${error}`)
        }
      },
      async onApprove (data, actions) {
        try {
          const response = await fetch(`/api/orders/${data.orderID}/capture`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          })

          const orderData = await response.json()


          const errorDetail = orderData?.details?.[0]

          if (errorDetail?.issue === "INSTRUMENT_DECLINED") {

            return actions.restart()
          } else if (errorDetail) {

            throw new Error(`${errorDetail.description} (${orderData.debug_id})`)
          } else if (!orderData.purchase_units) {
            throw new Error(JSON.stringify(orderData))
          } else {

            const transaction =
              orderData?.purchase_units?.[0]?.payments?.captures?.[0] ||
              orderData?.purchase_units?.[0]?.payments?.authorizations?.[0]

            console.info(`Transaction ${transaction.status}: ${transaction.id}<br><br>See console for all available details`)
            navigate('/checkout/step4', { state: { totalprice: state?.totalprice, orderId: orderData.id, basketList: basketList, from: '/checkout/step3', fullname: state?.fullname, email: state?.email, address: state?.address, mobile: state?.mobile } })
            console.log(
              "Capture result",
              orderData,
              JSON.stringify(orderData, null, 2),
            )
          }
        } catch (error) {
          console.error(error)
          console.info(`Sorry, your transaction could not be processed...<br><br>${error}`)

        }
      },
    }).render("#paypal-button-container")


  }


  useEffect(() => {


    const step3 = document.querySelector('.checkout-step-3')
    const div = document.createElement('div')
    step3.appendChild(div)
    if (div.getAttribute("id") === "paypal-button-container") {
      div.setAttribute('id', '')

    } else {

      div.setAttribute('id', "paypal-button-container")
      pay()
    }
    return div.setAttribute('id', '')

  }, [])

  return (
    <>

      <div className="checkout-step-3">





      </div>

      <br />

      <div className="checkout-shipping-action">
        <button type="button" onClick={back}>
          <span className="icon ">
            <img src={arrowback} alt="" width={15} height={15} />
          </span>
          &nbsp;Go Back
        </button>

        {/* <button className='submit' type="submit" onClick={submit}>
          Place Order&nbsp;
          <span className="icon">
            <img src={arrowforward} alt="" width={15} height={15} />
          </span>
        </button> */}

      </div>

    </>
  )
}
