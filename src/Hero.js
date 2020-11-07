import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContex } from "./context";

const Hero = () => {
  const data = useGlobalContex()
  console.log(data)
  return <h2>hero component</h2>
}

export default Hero
