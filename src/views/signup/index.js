import React, { useRef } from 'react'
import arrowfoward from '../../images/arrow_forward.png'
import facebook from '../../images/facebook.png'
import google from '../../images/google.png'
import github from '../../images/github.png'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import app from '../../firebase/config'
import { collection, addDoc, getFirestore } from "firebase/firestore"
import { useDispatch } from 'react-redux'
import { getDocId } from '../../redux/reducers/userReducer'
import { displayDate } from '../../helpers'




export default function Signup () {

  const formRef = useRef()

  const navigate = useNavigate()
  const dispatch = useDispatch()



  const Signup = () => {
    const fullname = formRef.current['fullname'].value
    const email = formRef.current['email'].value
    const password = formRef.current['password'].value
    console.log({ fullname, email, password })

    const auth = getAuth(app)
    const db = getFirestore(app)
    createUserWithEmailAndPassword(auth, email, password)
      .then(async () => {

        // const product = {
        //   brand: 'Salt Maalat',
        //   name: 'Very Nice',
        //   desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.',
        //   size: ['24', '36', '48'],
        //   colors: ['brown', 'red'],
        //   price: '678',
        //   img: 'https://firebasestorage.googleapis.com/v0/b/project3-841aa.appspot.com/o/C73AC65E-D11D-4341-ADCD-1C914473436E.png?alt=media&token=6b94d213-f4e3-400e-88d8-81b3a337f768',
        //   avalibleImgs: [
        //     {
        //       id: '1',
        //       url: 'https://firebasestorage.googleapis.com/v0/b/project3-841aa.appspot.com/o/C73AC65E-D11D-4341-ADCD-1C914473436E.png?alt=media&token=6b94d213-f4e3-400e-88d8-81b3a337f768',
        //     }, {
        //       id: '2',
        //       url: 'https://firebasestorage.googleapis.com/v0/b/project3-841aa.appspot.com/o/2CA1CE30-B614-4363-8C56-FFFE779E9024.png?alt=media&token=b4b9da33-95fb-42f9-acfc-ad48a8b5ccd5',
        //     }
        //   ],
        //   isFeatured: 'true',
        //   isRecommended: 'true',
        // }

        const user = {
          email,
          fullname,
          joinDate: new Date().getTime(),
          address: '',
          basket: [],
          avatarURL: '',
          role: 'USER'
        }

        try {
          const docRef = await addDoc(collection(db, "users"), user)
          console.log("Document written with ID: ", docRef.id)
          const docId = docRef.id

          dispatch(getDocId({ docId }))
          navigate('/signin')
        } catch (e) {
          console.error("Error adding document: ", e)
        }

      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.error(`errorCode ::${errorCode}`)
        console.error(`errorMessage ::${errorMessage}`)
      })


  }



  return (
    <>
      <div className='main'>
        <div className='auth-container'>
          <div className='auth-content'>
            <div className='auth-left'>
              <h3>Sign up to Salinaka</h3>
              <form method='post' ref={formRef} >
                <label htmlFor="fullname">* Full Name</label><br />
                <input type="text" name='fullname' id='fullname' placeholder='John Doe' /><br />
                <label htmlFor="email">* Email</label><br />
                <input type="email" name='email' id='email' placeholder='test@example.com' /><br />
                <label htmlFor="password">* Password</label><br />
                <input type="password" name='password' id='password' placeholder='Your Password' /><br />
                <div className='signup-button'>
                  <button onClick={Signup} type="button">Sign Up &nbsp; <img src={arrowfoward} alt="" width={15} height={15} /></button>
                </div>
              </form>
            </div>
            <div className='auth-center'>
              <div className='vertical-line'></div>
              <h6>OR</h6>
              <div className='vertical-line'></div>
            </div>
            <div className='auth-right'>
              <button type='button' className='facebook'>
                <img src={facebook} alt="" width={14} height={14} />
                Continue with Facebook
              </button>
              <button type='button' className='google'>
                <img src={google} alt="" width={14} height={14} />
                Continue with Google
              </button>
              <button type='button' className='github'>
                <img src={github} alt="" width={14} height={14} />
                Continue with GitHub
              </button>
            </div>
          </div>
          <div className='auth-bottom'>
            <span>Already have an account?</span>
            <Link to='/signin' type='button' className='button'>Sign In</Link>
          </div>
        </div>
      </div>
    </>
  )
}
