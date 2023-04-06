import { Link } from 'react-router-dom'
import { BsCalculator } from 'react-icons/bs'

function Header() {
  return (
    <div className='flex justify-center bg-blue-700 p-3 mb-8 rounded-3xl text-white'>
      <Link to='/'>
        <BsCalculator size={25} />
      </Link>
    </div>
  )
}

export default Header
