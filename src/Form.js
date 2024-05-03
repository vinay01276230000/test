import { useState } from "react"
import { formApi } from "./Controller/Api/Api"


const Form = () => {
    const [street3, setStreet3] = useState("")
    const [street4, setStreet4] = useState("")
    const [checked, setChecked] = useState(false)
    const [data, setData] = useState([])
    const [inputList, setInputList] = useState([{ fileName: "", typeOfFile: "", uploadDocument: "" }])

    const handlechange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });

    }

    const handleCheckBox = (e) => {
        setChecked(e.target.checked);
        if (!checked) {
            setStreet3(data.street1);
            setStreet4(data.street2);
        } else {
            setStreet3("");
            setStreet4("");
        }
    }

    const handleAdd = (e) => {
        e.preventDefault()
        setInputList([...inputList, { fileName: "", typeOfFile: "", uploadDocument: "" }])
    }

    const handleFile = (event) => {
        console.log(setData({ ...data, [event.target.name]: event.target.files[0] }))

    }

    const handleSummit = async (event) => {
        event.preventDefault()
        const makhhi = new FormData();
        Object.keys(data).forEach(key => {
            makhhi.append(key, data[key])
        })
        const res = await formApi(makhhi)
        if (res.status === "Success") {
            window.alert("Form Fill Successfully")
        }

    }


    return (
        <form className='form' onSubmit={handleSummit}  >
            <div className='divOne' >
                <label className='formLabel'>First Name*</label><br></br>
                <input type='text' placeholder='Entrer Your First Name Here' name="firstName" className='formInput' onChange={handlechange} />
            </div>
            <div className=' divTwo'>
                <label className='formLabel'>Last Name*</label><br></br>
                <input type='text' placeholder='Entrer Your First Name Here' name="lastName" className='formInput' onChange={handlechange} />
            </div>
            <div className='divOne'>
                <label className='formLabel'>E-mail*</label><br></br>
                <input type='email' placeholder='Entrer Your First Name Here' name="email" onChange={handlechange}
                    className='formInput' />
            </div>
            <div className=' divTwo'>
                <label className='formLabel'>Date Of Birth*</label><br></br>
                <input type='date' placeholder='Entrer Your First Name Here' name="dob" onChange={handlechange} className='formInput' />
            </div>

            <div className='divLabel'>
                <label className='formLabel'>Residential Address</label>
            </div>
            <div className='divOne'>
                <label>Street 1*</label><br></br>
                <input type='text' placeholder='Entrer Your First Name Here' name="street1" className='formInput' onChange={handlechange} />
            </div>
            <div className=' divTwo'>
                <label>Street 2*</label><br></br>
                <input type='text' placeholder='Entrer Your First Name Here' name="street2" className='formInput' onChange={handlechange} />
            </div>
            <div className='divLabel'>
                <input type='checkbox' className='button' onClick={handleCheckBox} checked={checked} />
                <label className='formLabel'>Same as Residential Address</label>
            </div>
            <div className='divOne'>
                <label >Street 1</label><br></br>
                <input type='text' placeholder='Entrer Your First Name Here' name='street3' value={street3} className='formInput' onChange={handlechange} />
            </div>
            <div className=' divTwo'>
                <label>Street 2</label><br></br>
                <input type='text' placeholder='Entrer Your First Name Here' name='street4' value={street4} className='formInput' onChange={handlechange} />
            </div>
            <div className='divLabel' >
                <label className='formLabel'>Upload Documents</label>
            </div>
            <div className='uploadMain'>
                <div className='uploadDiv1'>
                    <label>File Name*</label>
                    <br></br>
                    <input className="uploadInput" name="fileName" type='text' onChange={handlechange} />
                </div>
                <div className='uploadDiv2'>
                    <label>Type Of File*</label>

                    <select className="uploadInput" aria-label=".form-select-sm example" name="typeOfFile" onChange={handlechange}>
                        <option selected>Please Select</option>
                        <option value="Image">Image</option>
                        <option value="Pdf">Pdf</option>
                    </select>
                </div>
                <div className='uploadDiv3' >
                    <label>Upload Document*</label>
                    <input className="uploadInput" name="file" type='file' onChange={handleFile} />
                </div>
                <div className='uploadDiv4'>
                    <input type="button" className="uploadButton" value="Add" onClick={handleAdd} />
                </div>
            </div>
            <button type='submit' className="summitButton">Submit</button>
        </form >
    )
}

export default Form