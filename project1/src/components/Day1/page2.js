import { useEffect, useState } from 'react';

const axios = require('axios').default;

function Api_call()
{
    var [details,setDetails]=useState({})
    useEffect(()=>{
        async function fetchdata(){
            var response=await axios.get('https://randomuser.me/api/')
            setDetails(response.data.results[0])
            console.log(response.data.results[0])
        }
        fetchdata()
    },[])
return(
    <>
    <div>{Object.keys(details).length==0?"":details.name.first}</div>
    </>
)
}
export default Api_call;