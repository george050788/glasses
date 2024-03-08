import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { default as app } from '../firebase/config'
import { useDispatch } from 'react-redux'
import { getProducts } from '../redux/reducers/productReducer'
import axios from 'axios'

export default function useProducts () {

  const dispatch = useDispatch()

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  // const getData = async () => {
  //   const db = getFirestore(app)
  //   try {
  //     const querySnapshot = await getDocs(collection(db, "products"))
  //     const list = []
  //     querySnapshot.forEach(async (doc) => {
  //       const obj = {
  //         productid: doc.id,
  //         ...doc.data()
  //       }
  //       list.push(obj)
  //       // list.push(doc.data())
  //     })
  //     setProducts([...list])

  //     dispatch(getProducts({ list }))
  //   } catch (error) {
  //     setError(true)
  //     setLoading(false)
  //   }

  // }

  const getData = () => {
    axios.get(`http://localhost:8080/product/products`)
      .then(res => {
        console.log('res', res)
        // c onst persons = res.data
        // this.setState({ persons })
        const { data, code } = res.data
        if (code == 200) {
          setProducts([...data])
          const list = data
          dispatch(getProducts({ list }))
        }
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return {
    products
  }
}