export const loadActiveUser = async (email) => {
    // console.log(email)
    const res = await fetch(`http://localhost:5000/users?email=${email}`)
    const data = await res.json()
    // console.log(data)
    return data[0].user_role
}