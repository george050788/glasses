import { useEffect, useState } from 'react'
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore"
import { default as app } from '../firebase/config'
// import { getProducts } from '../redux/reducers/productReducer'
// import { useDispatch } from 'react-redux'
// import axios from 'axios'
export default function useFeatureProducts () {

  // const dispatch = useDispatch()

  const [featureProducts, setFeatureProducts] = useState([])
  const [featureLoading, setFeatureLoading] = useState(true)
  const [featureError, setFeatureError] = useState('')

  const getData = async () => {
    const db = getFirestore(app)
    try {

      const q = query(collection(db, "products"), where("isFeatured", "==", true))
      var list = []
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        const obj = {
          productid: doc.id, ...doc.data()
        }
        list.push(obj)
      })

      setFeatureProducts([...list])
      console.log('list:', list)
      console.log('products:', featureProducts)
      setFeatureLoading('')
      setFeatureError(false)
    } catch (error) {
      setFeatureError(error)
      setFeatureLoading(false)
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
  //         setFeatureProducts([...data])
  //         const list = data
  //         dispatch(getProducts({ list }))
  //       }
  //     })
  // }

  useEffect(() => {
    getData()

  }, [])

  return {
    featureProducts, featureLoading, featureError, getData
  }
}
