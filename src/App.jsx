import { useDispatch } from 'react-redux'
import { handleAllProductAction, handleSingleProductAction } from './store/productSlice';
import ShowInfo from './components/ShowInfo';
import {Link, Outlet} from 'react-router-dom'
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(
      handleSingleProductAction({
      title:'Tihomir je car',
      desc:'Bingo Redux',
      price:'$9999',
    }))
  },[])

  return <div className='flex flex-col justify-center items-center mt-5'>
    <h1 className='text-2xl'>Redux Toolkit</h1>

  <ul className='flex gap-4 font-bold'>
    <Link to={'/'}>Home</Link>
    <Link to={'/products'}>Products</Link>
  </ul>
    <Outlet />
  </div>
   
}

export default App
