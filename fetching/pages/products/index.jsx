

function ProductList({products}){
    return(
        <>
            <h1>list of products</h1>
            {
                products.map(  product =>(
                    <div key={  product.id}>
                        <h2>{  product.id} {  product.price}</h2>
                        <hr />
                    </div>
                ))
            }
        </>

    )   


}

export default ProductList

export async function getStaticProps(){
    const response = await fetch('http://localhost:4000/products')
    const data = await response.json();

    return{
        props : {
            products : data
        },
        revalidate: 10 ///products (ISR: 10 Seconds)

    }
}