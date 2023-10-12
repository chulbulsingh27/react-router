import React from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/chulbulsingh27')
    //     .then(response => response.json())
    //     .then(data=> {
    //         console.log(data);
    //         setData(data)
    //     })

    // },[])
  return (
    <div className='text-center p-4 m-2 bg-gray-700 mb-4 text-white font-serif text-xl'>Github followers:{data.followers}
    <img src={data.avatar_url} alt='git dp' width={300} className='mx-auto md:mx-[38%] mt-4'/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/chulbulsingh27')  
    return response.json();
}