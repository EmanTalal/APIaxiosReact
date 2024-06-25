import { useState } from 'react'
import '../App.css'
import { useEffect } from 'react'
import axios from 'axios'
// import UseInfo from './compmnent/UseInfo'



import { Link } from 'react-router-dom'

function Home() {
  const [imge, setImages] = useState([])

  useEffect(()=>{
    getImage()
  },[])

  const getImage=()=>{
    axios.get('https://finalspaceapi.com/api/v0/character/')
  .then(function (response) {
    // handle success
    console.log(response.data);
    setImages(response.data)
  })  
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });[]}


  const Deletfromapi = (id) => {
    const dondelet = imge.filter(item => item.id !== id);
    setImages(dondelet);
  };


  return (
    <>

<div className='card bg-base-100 flex flex-wrap  bg-gray-200	   '>
  <div className='flex flex-wrap  justify-between m-8 p-3 justify-center space-y-6'>
       {imge.map((item)=>{
        return(
        <div className=''>
             <img src={item.img_url}></img>
             <button className='btn btn-success px-4 max-sm:px-1 rounded-md text-black px-4 m-7 '>
                <Link to={`UseInfo/${item.id}`}>Detials</Link>                
                 </button>
                 <button
                  className='bg-red-400 p-2 mx-3 max-sm:px-1 rounded-md text-black px-4'
                  onClick={() => Deletfromapi(item.id)}
                >
                  Delete
                </button>
        </div>
        )
        })}</div>  
        </div>
        </>
  )
}

export default Home
