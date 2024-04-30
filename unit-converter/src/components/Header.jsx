import { iconHeader } from '../assets/icons'

export function Header () {
  return (
    <div className='header'>
      <div>
        {iconHeader()}
        <h3 id='titleHeader'>unit converter</h3>
      </div>
    </div>
  )
}
