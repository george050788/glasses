import React, { useRef, useState } from 'react'
import arrowforward from '../../images/arrow_forward.png'
import { useNavigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { calculator } from '../../helpers'
import arrowback from '../../images/arrow_back.svg'





export default function Step2 () {

  const formRef = useRef()



  const navigate = useNavigate()
  const backtoStep1 = () => {
    navigate('/checkout/step1')
  }

  const { state } = useLocation()
  console.log('state:', state)

  const [emailErr, SetEmailErr] = useState(false)
  const [fullnameErr, SetFullnameErr] = useState(false)
  const [addressErr, SetAddressErr] = useState(false)
  const [mobileErr, SetMobileErr] = useState(false)


  const tostep3 = () => {
    const fullname = formRef.current['fullname'].value
    const email = formRef.current['email'].value
    const address = formRef.current['address'].value
    const mobile = formRef.current['mobile'].value

    console.log({ fullname, email, address, mobile })
    const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')
    const validfullname = new RegExp('^[a-zA-z- ]')
    const validAddress = new RegExp('^[a-zA-z0-9. ]')
    const validMobile = new RegExp('^[0-9+]{10,13}$')


    if (!validfullname.test(fullname)) {
      SetFullnameErr(true)
    }
    if (!validEmail.test(email)) {
      SetEmailErr(true)
    }
    if (!validAddress.test(address)) {
      SetAddressErr(true)
    }
    console.log('mobile:', validMobile.test(mobile))
    if (!validMobile.test(mobile)) {
      SetMobileErr(true)
    }

    if (emailErr && fullnameErr && addressErr && mobileErr !== true) {
      navigate('/checkout/step3', { state: { totalprice: state?.totalprice, fullname: fullname, email: email, address: address, mobile: mobile } })
    }
  }


  const basketList = useSelector(state => state.basket.basketList)

  const arr = basketList.map((product) => product.price * product.quantity)


  return (
    <>

      <div className='step-2'>
        <div className='error-msg'>
          {fullnameErr && <p>Your fullname is invalid</p>}
          {emailErr && <p>Your email is invalid</p>}
          {addressErr && <p>Your address is invalid</p>}
          {mobileErr && <p>Your mobile is invalid</p>}
        </div>
        <form method='post' ref={formRef}>
          <label htmlFor="fullname">* Full Name</label>
          <input type="fullname" name='fullname' placeholder='John Doe.' /><br />
          <label htmlFor="">* Email</label>
          <input type="email" name="email" placeholder='test@example.com' /><br />
          <label htmlFor="adress">* Address</label>
          <input type="address" name="address" placeholder='Address' /><br />
          <label htmlFor="mobile">* Mobile</label>
          <input type="mobile" name="mobile" placeholder='Mobile' /><br />
        </form>
        <div className='text-right'>
          <p>Total:</p>
          <h2>${state.totalprice}</h2>
        </div>
        <br />
        <div className='checkout-action'>
          <button className='goback' onClick={backtoStep1}>
            <img src={arrowback} alt="" width={15} height={15} />
            <span>&nbsp;   Go Back</span>
          </button>
          <button type='submit' className='nextstep' onClick={tostep3}>
            Next Step  &nbsp;
            <img src={arrowforward} alt="" />
          </button>
        </div>
      </div>




    </>
  )
}
