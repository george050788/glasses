import React from 'react'
import { ProductList, Message } from '../../components'
import featuredguy from '../../images/featured-guy.png'
import { useSelector } from 'react-redux'
import { useFeatureProducts } from '../../hook'

export default function Featured () {

  // const [products, setProducts] = useState([
  //   { name: 'Sipon Malapot', brand: "Salt Maalat", img: "https://firebasestorage.googleapis.com/v0/b/solelyecommercereact.appspot.com/o/products%2F9RfK593o2iyGv1NnMCXL?alt=media&token=e92e8f2d-a180-4b00-b7cd-301e9585b23b" },
  //   { name: 'Pitaklan', brand: "Black Kibal", img: "https://firebasestorage.googleapis.com/v0/b/solelyecommercereact.appspot.com/o/products%2FC0jArrxjHBOHY9WuanAb?alt=media&token=4455e7de-9ba4-4cc8-9a23-5752132618b2" },
  //   { name: 'Very Nice', brand: "Salt Maalat", img: "https://firebasestorage.googleapis.com/v0/b/solelyecommercereact.appspot.com/o/products%2FDTY9xWsUVP2GGl1mMMC1?alt=media&token=5c094dd5-703d-48cb-90bc-d967dcd12d3d" },
  //   { name: 'Tiktialok Manok', brand: "Sexbomb", img: "https://firebasestorage.googleapis.com/v0/b/solelyecommercereact.appspot.com/o/products%2FHsCpVBSXGUVLRipBOYUF?alt=media&token=d5717432-ce93-49f1-922b-6dafa5354bf2" },
  //   { name: 'Burnikk', brand: "Sexbomb", img: "https://firebasestorage.googleapis.com/v0/b/solelyecommercereact.appspot.com/o/products%2FPys23DmmhxpJTcTWz0BJ?alt=media&token=f70e56dd-8ca2-40c3-bd74-44f8ca021b5f" },
  //   { name: 'Quake Overload', brand: "Sexbomb", img: "https://firebasestorage.googleapis.com/v0/b/solelyecommercereact.appspot.com/o/products%2FjnUox83j2BlKRP2xqAxD?alt=media&token=1f2b5678-7f8c-4871-b711-78555c934bf2" },
  //   { name: 'Pitaklan', brand: "Black Kibal", img: "https://firebasestorage.googleapis.com/v0/b/solelyecommercereact.appspot.com/o/products%2Fr0eRiXJuZP6dnwK9xhAf?alt=media&token=45b6a2d7-807c-4e3e-8ba2-e518f4e99ddb" },
  // ])

  const { featureProducts, featureLoading, featureError, getData } = useFeatureProducts()

  const list = useSelector(state => state.product.products)
  const products = list.filter((product) => {
    return product.isFeatured
  })

  return (
    <>
      <div className='main'>
        <div className='featured'>
          <div className='featured-left'>
            <h1>Featured Products</h1>
          </div>
          <div className='featured-right'>
            <img src={featuredguy} alt="" />
          </div>
        </div>
        <div className='display'>
          {
            featureLoading ? (<Message msg='Loading...'></Message>) : featureError ? (<Message action={getData} msg={featureError}></Message>) : (<ProductList products={featureProducts} />)
          }
        </div>
      </div>
    </>
  )
}
