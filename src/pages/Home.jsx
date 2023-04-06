import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='flex flex-col justify-between w-fit m-auto'>
      <Link
        to='/juros-simples'
        className='bg-blue-700 hover:bg-blue-600 rounded-3xl px-6 py-2 text-center text-white my-3'>
        Juros Simples
      </Link>
      <Link
        to='/capital-inicial'
        className='bg-blue-700 hover:bg-blue-600 rounded-3xl px-6 py-2 text-center text-white my-3'>
        Capital Inicial
      </Link>
      <Link
        to='/taxa-unitaria'
        className='bg-blue-700 hover:bg-blue-600 rounded-3xl px-6 py-2 text-center text-white my-3'>
        Taxa Unitaria
      </Link>
      <Link
        to='/periodo'
        className='bg-blue-700 hover:bg-blue-600 rounded-3xl px-6 py-2 text-center text-white my-3'>
        Periodo
      </Link>
    </div>
  )
}

export default Home
