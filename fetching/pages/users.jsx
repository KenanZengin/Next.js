import User from '../components/user'
const Users = ({data}) => {
    
    return (
    <>
        <h1>Users list</h1>
        {data.map((user)=>(
            <div key={user.id}>
               <User user={user} />
            </div>
        ))}
    
    </>
  )
}

export default Users

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
  
    return{
        props : {
            data,
        },
    }

}