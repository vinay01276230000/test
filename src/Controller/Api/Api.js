export const formApi = async (formdata) => {
    const res = await fetch("http://localhost:9000/formdata/send", {
        method: "Post",
        body: formdata
    })
    return await res.json()
}
