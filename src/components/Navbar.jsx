import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-[80%] mx-auto mt-4 mb-6'>
        <div className='flex md:flex-row  flex-col justify-between items-center'>
            <Link to={'/'} className="text-center w-40  mb-4 backdrop-blur-lg border-2 p-4 rounded-[30px] ">
                <h1 className="text-center text-5xl  text-[#4e37aa]">Movy</h1>
            </Link>
            <div>
                <ul className='flex w-[100%] backdrop-blur-md justify-between box-border items-center border-2 border-[#4e37aa] p-0 rounded-[30px]'>
                    <li className='text-xl text-slate-300 hover:text-cyan-700 bg-transparent active:bg-slate-400 box-border px-9 py-1 rounded-l-2xl w-[50%]'><Link to={'/about'}>About</Link></li>
                    <li className='text-xl  text-slate-300 hover:text-cyan-700 bg-transparent box-border px-9 py-1  active:bg-slate-400  rounded-r-2xl w-[50%]'><Link to={'/contact'}>Contact</Link></li>
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Navbar

