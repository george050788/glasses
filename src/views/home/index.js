import React from 'react'
import { ProductList, Message } from '../../components'
import homegirl from '../../images/home-girl.png'
import arrowfoward from '../../images/arrow_forward.png'
import { useRecommendedProducts, useFeatureProducts, useProducts } from '../../hook'

export default function Home () {

  const { featureProducts, featureLoading, featureError, getData } = useFeatureProducts()
  const {
    recommendedProducts, recommendedLoading, recommendedError
  } = useRecommendedProducts()
  const { products } = useProducts()

  // const [products, setProducts] = useState([
  //   { name: 'Sipon Malapot', brand: "Salt Maalat", img: "https://firebasestorage.googleapis.com/v0/b/solelyecommercereact.appspot.com/o/products%2F9RfK593o2iyGv1NnMCXL?alt=media&token=e92e8f2d-a180-4b00-b7cd-301e9585b23b" },
  //   { name: 'Pitaklan', brand: "Black Kibal", img: "https://firebasestorage.googleapis.com/v0/b/solelyecommercereact.appspot.com/o/products%2FC0jArrxjHBOHY9WuanAb?alt=media&token=4455e7de-9ba4-4cc8-9a23-5752132618b2" },
  //   { name: 'Very Nice', brand: "Salt Maalat", img: "https://firebasestorage.googleapis.com/v0/b/solelyecommercereact.appspot.com/o/products%2FDTY9xWsUVP2GGl1mMMC1?alt=media&token=5c094dd5-703d-48cb-90bc-d967dcd12d3d" },
  //   { name: 'Tiktialok Manok', brand: "Sexbomb", img: "https://firebasestorage.googleapis.com/v0/b/solelyecommercereact.appspot.com/o/products%2FHsCpVBSXGUVLRipBOYUF?alt=media&token=d5717432-ce93-49f1-922b-6dafa5354bf2" },
  //   { name: 'Burnikk', brand: "Sexbomb", img: "https://firebasestorage.googleapis.com/v0/b/solelyecommercereact.appspot.com/o/products%2FPys23DmmhxpJTcTWz0BJ?alt=media&token=f70e56dd-8ca2-40c3-bd74-44f8ca021b5f" },
  //   { name: 'Quake Overload', brand: "Sexbomb", img: "https://firebasestorage.googleapis.com/v0/b/solelyecommercereact.appspot.com/o/products%2FjnUox83j2BlKRP2xqAxD?alt=media&token=1f2b5678-7f8c-4871-b711-78555c934bf2" },
  // ])




  return (
    <>
      <div className='main'>
        <div className='home'>
          <div className='home-left'>
            <h1><strong>See</strong> everything with <strong>Clarity</strong></h1>
            <p>Buying eyewear should leave you happy and good-looking, with money in your pocket. Glasses, sunglasses, and contacts—we’ve got your eyes covered.</p>
            <br />

            <a href="/shop">Shop Now &nbsp; <img src={arrowfoward} alt="" width={15} height={15} /></a>

          </div>
          <div className='home-right'>
            <img src={homegirl} alt="" />
          </div>
        </div>


        <div className='display'>
          <div className='display-header'>
            <h1>Featured Products</h1>
            <a href="/featured">See All</a>
          </div>
          {
            featureLoading ? (<Message msg='Loading...'></Message>) : featureError ? (<Message action={getData} msg={featureError}></Message>) : (<ProductList products={featureProducts} />)
          }
        </div>


        <div className='display'>
          <div className='display-header'>
            <h1>Recommened Products</h1>
            <a href="/recommended">See All</a>
          </div>
          {
            recommendedLoading ? (<Message msg='Loading...'></Message>) : recommendedError ? (<Message action={getData} msg={recommendedError}></Message>) : (<ProductList products={recommendedProducts} />)
          }
        </div>
      </div>




    </>
  )
}
