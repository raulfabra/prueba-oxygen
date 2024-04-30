import { useState } from 'react'
import { iconConverter, iconLike } from '../assets/icons'

export function Converter () {
  const [option, setOption] = useState('kmAmiles')
  const [quantity, setQuantity] = useState('0')
  const [unity, setUnity] = useState('km')
  const [unityTransform, setUnityTransform] = useState('miles')
  const [result, setResult] = useState('x')

  const handleSelectChange = (e) => {
    const newOption = e.target.value
    setOption(newOption)
    switch (newOption) {
      case ('kmAmiles'):
        setUnity('km')
        setUnityTransform('miles')
        break
      case ('milesAkm'):
        setUnity('miles')
        setUnityTransform('km')
        break
      case ('piesAmetros'):
        setUnity('pies')
        setUnityTransform('metros')
        break
      case ('metrosApies'):
        setUnity('metros')
        setUnityTransform('pies')
        break
      case ('cmApulgadas'):
        setUnity('cm')
        setUnityTransform('pulgadas')
        break
      case ('pulgadasAcm'):
        setUnity('pulgadas')
        setUnityTransform('cm')
        break
    }
  }

  const handleInputChange = (e) => {
    const newQuantity = e.target.value
    setQuantity(newQuantity)
    switch (option) {
      case ('kmAmiles'):
        setResult(newQuantity * 0.6214)
        break
    }
  }

  const handleTransformChange = () => {
    setUnity(unityTransform)
    setUnityTransform(unity)
  }

  return (
    <>
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
        {iconLike()}
        <div className='resultado'>
          <p>{result}<span> {unityTransform}</span> </p>
        </div>

      </div>
    </>
  )
}
