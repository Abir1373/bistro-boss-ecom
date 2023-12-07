export const deleteCart = async (email) => {
    const res = await fetch(`http://localhost:5000/carts?email=${email}`,{
        method : 'DELETE'
    })
}