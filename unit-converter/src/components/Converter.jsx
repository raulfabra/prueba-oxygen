import { useEffect, useState } from 'react'
import { iconConverter, iconLike } from '../assets/icons'
import { checkMeasurement, checkQuantity, getReverseConversion } from '../logic/logic'
import { Saved } from './Saved'

export function Converter () {
  const [option, setOption] = useState('kmAmiles')
  const [quantity, setQuantity] = useState(0)
  const [unity, setUnity] = useState('km')
  const [unityTransform, setUnityTransform] = useState('miles')
  const [result, setResult] = useState('0')

  const [click, setClick] = useState(false)
  const [like, setLike] = useState({})

  const handleSelectChange = (e) => {
    const newOption = e.target.value
    const newResult = checkQuantity(newOption, quantity)
    const firstUnity = checkMeasurement(newOption).firstUnity
    const secondUnity = checkMeasurement(newOption).secondUnity

    setUnity(firstUnity)
    setUnityTransform(secondUnity)
    setOption(newOption)
    setResult(newResult)
  }

  const handleInputChange = (e) => {
    const newQuantity = e.target.value
    const newResult = checkQuantity(option, newQuantity)

    setQuantity(newQuantity)
    setResult(newResult)
  }

  const handleTransformChange = () => {
    setQuantity(result)
    setUnity(unityTransform)

    setResult(quantity)
    setUnityTransform(unity)

    const newOption = getReverseConversion(unityTransform)
    setOption(newOption)
  }

  const handleClickLike = () => {
    setClick(!click)
  }

  useEffect(() => {
    if (quantity === 0) return

    const q = quantity
    const u = unity
    const r = result
    const ut = unityTransform

    const items = { q, u, r, ut }

    setLike(items)
  }, [click])
  return (
    <>
      <article className='convert'>
        <h2>convert</h2>
        <div className='form'>

          <div id='unidades'>
            <select name='opciones' id='opciones' value={option} onChange={handleSelectChange}>
              <option value='kmAmiles'>km → miles</option>
              <option value='milesAkm'>miles → km</option>
              <option value='piesAmetros'>pies → metros</option>
              <option value='metrosApies'>metros → pies</option>
              <option value='cmApulgadas'>cm → pulgadas</option>
              <option value='pulgadasAcm'>pulgadas → cm</option>
            </select>
            <button onClick={handleTransformChange}>
              {iconConverter()}
            </button>
          </div>
          <div id='conversion'>
            <input type='number' name='unidadMedida' id='unidadMedida' value={quantity} onChange={handleInputChange} />
            <label htmlFor='unidadMedida'> {unity}</label>
          </div>

        </div>

        <div className='footerConvert'>
          <button id='iconLike' onClick={handleClickLike}>
            {iconLike()}
          </button>
          <div className='resultado'>
            <p>{result}<span> {unityTransform}</span> </p>
          </div>

        </div>
      </article>
      <section>
        <h4>saved</h4>
        <Saved like={like} />
      </section>
    </>
  )
}
