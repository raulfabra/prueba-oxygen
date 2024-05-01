import { useState } from 'react'
import { iconConverter, iconLike } from '../assets/icons'
import { checkMeasurement, checkQuantity, getReverseConversion } from '../logic/logic'
import { Saved } from './Saved'

export function UnitConverter () {
  const [option, setOption] = useState('kmAmiles')
  const [quantity, setQuantity] = useState(0)
  const [unity, setUnity] = useState('km')
  const [unityTransform, setUnityTransform] = useState('miles')
  const [result, setResult] = useState(0)
  const [likes, setLikes] = useState({})

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

  const handleLike = () => {
    const itemObject = {
      quantity,
      unity,
      result,
      unityTransform
    }

    setLikes(itemObject)
    setQuantity(0)
    setResult(0)
  }

  return (
    <main>
      <article className='convert'>
        <h2>convert</h2>
        <div className='form'>

          <div id='unidades'>
            <select name='opciones' id='opciones' value={option} onChange={handleSelectChange}>
              <option value='kmAmiles'>km → miles</option>
              <option value='milesAkm'>miles → km</option>
              <option value='piesAmetros'>feet → meters</option>
              <option value='metrosApies'>meters → feet</option>
              <option value='cmApulgadas'>cm → inches</option>
              <option value='pulgadasAcm'>inches → cm</option>
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
          <button id='iconLike' onClick={handleLike}>
            {iconLike()}
          </button>
          <div className='resultado'>
            <p>{result}<span> {unityTransform}</span> </p>
          </div>

        </div>
      </article>

      <Saved e={likes} />
    </main>
  )
}
