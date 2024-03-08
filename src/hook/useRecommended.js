import { useEffect, useState } from 'react'
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore"
import { default as app } from '../firebase/config'
// import { getProducts } from '../redux/reducers/productReducer'
import { useDispatch } from 'react-redux'
// import axios from 'axios'

export default function useRecommendedProducts () {

  // const dispatch = useDispatch()

  const [recommendedProducts, setRecommendedProducts] = useState([])
  const [recommendedLoading, setRecommendedLoading] = useState(true)
  const [recommendedError, setRecommendedError] = useState('')

  const getData = async () => {
    const db = getFirestore(app)
    try {

      const q = query(collection(db, "products"), where("isRecommended", "==", true))
      var list = []
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        const obj = {
          productid: doc.id, ...doc.data()
        }
        list.push(obj)
      })

      setRecommendedProducts([...list])
      console.log('list:', list)
      console.log('products:', recommendedProducts)
      setRecommendedLoading('')
      setRecommendedError(false)
    } catch (error) {
      setRecommendedError(error)
      setRecommendedLoading(false)
    }

  }

  // const getData = () => {
  //   axios.get(`http://localhost:8080/product/products`)
  //     .then(res => {
  //       console.log('res', res)
  //       // c onst persons = res.data
  //       // this.setState({ persons })
  //       const { data, code } = res.data
  //       if (code == 200) {
  //         setRecommendedProducts([...data])
  //         const list = data
  //         dispatch(getProducts({ list }))
  //       }
  //     })
  // }

  useEffect(() => {
    getData()

  }, [])

  return {
    recommendedProducts, recommendedLoading, recommendedError, getData
  }
}