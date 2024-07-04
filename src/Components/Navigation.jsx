import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const [menu, setmenu] = useState(false)
    const menuopen = () => {
        setmenu(!menu)
    }
    const menuclose=()=>{
        setmenu(!menu)
    }
    return (
        <>
            <nav className="text-white bg-green-600 flex justify-between items-center p-8 z-50">
                <h1 className="text-2xl font-extrabold">Nature Farm</h1>
                <div>
                </div>
                {
                    menu && <div className=' absolute right-1 top-5 bg-white text-green-600 w-1/2'>
                        <p onClick={menuclose} className='text-right pt-2 pr-3 text-red-600 cursor-pointer text-xl font-semibold'>X</p>
                        <div className='pl-8'>
                            <p className='mb-4 hover:underline cursor-pointer'><Link to="/">Home</Link></p>
                            <p className='mb-4 hover:underline cursor-pointer'><Link to="/contact">Contact Us</Link></p>
                            <p className='mb-4 hover:underline cursor-pointer'><Link to="/about">About Us</Link></p>
                        </div>
                    </div>
                }
                <i onClick={menuopen} className=" cursor-pointer fa-solid fa-bars md:hidden"></i>
                <ul className="hidden gap-3 md:flex">
                    <li className="transition-transform transform hover:scale-105 cursor-pointer">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="transition-transform transform hover:scale-105 cursor-pointer">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="transition-transform transform hover:scale-105 cursor-pointer">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation;
