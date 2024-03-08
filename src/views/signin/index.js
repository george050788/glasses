import React, { useState } from 'react'
import arrowfoward from '../../images/arrow_forward.png'
import facebook from '../../images/facebook.png'
import google from '../../images/google.png'
import github from '../../images/github.png'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import app from '../../firebase/config'
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfo } from '../../redux/reducers/userReducer'

export default function Signin () {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const docId = useSelector(state => state.user.docId)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const Signin = () => {
    console.log({ email, password })
    const db = getFirestore(app)
    const auth = getAuth(app)
    signInWithEmailAndPassword(auth, email, password)
      .then(async () => {
        const querySnapshot = await getDocs(collection(db, "users"))
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`)
          if (docId === doc.id) {
            console.log(doc.data())
            const user = doc.data()
            dispatch(getUserInfo({ user }))
          }
        })
        navigate('/')
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
              <h3>Sign in to Salinaka</h3>
              <form method='post'>
                <label htmlFor="email">* Email</label><br />
                <input type="email" name='email' id='email' placeholder='test@example.com' value={email} onChange={(e) => { setEmail(e.target.value) }} /><br />
                <label htmlFor="password">* Password</label><br />
                <input type="password" name='password' id='password' placeholder='Your Password' value={password} onChange={(e) => { setPassword(e.target.value) }} /><br />
                <div className='signin-button'>
                  <a href="https://solely-ecommerce-react.netlify.app/forgot_password">Forgot password?</a>
                  <button onClick={Signin} type="button">Sign In &nbsp; <img src={arrowfoward} alt="" width={15} height={15} /></button>
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
            <span>Don't have an account?</span>
            <Link to='/signup' type='button' className='button'>Sign Up</Link>
          </div>
        </div>
      </div>






    </>
  )
}
