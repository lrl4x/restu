import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Orderc from '../component/Orderc'

function Order() {
  const [PickUp, setPickUp] = useState(false)

  const handlebutton = () => {
    setPickUp(!PickUp)
  }
  return (
    <div>
      <Navbar />
      <Orderc />
      <Footer />

    </div>
  )
}

export default Order