import { useEffect,useState } from "react";

const Dashbord = ({data}) => {
    const  [loading, setLoading] = useState(true);
    const [dashBord, setDashBord] = useState(null)

    useEffect(()=>{
        async function dataFetching(){
            const pull = await fetch('http://localhost:4000/dashbord');
            const data = await pull.json();
            setDashBord(data);
            setLoading(false)
        }
        dataFetching();
    },[])

    if(loading){
        return <h1>Loading</h1>
    }


  return (
    <div>
        <h2>Dashbord</h2>
        <h3>Post : {dashBord.posts}</h3>
        <br />
        <h3>Likes : {dashBord.likes}</h3>
        <br />
        <h3>Followers : {dashBord.followers}</h3>


    </div>
  )
}


export default Dashbord

