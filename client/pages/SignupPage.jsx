import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

const initialValues = {
    name: "",
    breed: "",
    age: "",
    size: "",
    sex: "",
    image: ""
};

const ageOptions = [];
for (let i = 1; i <= 50; i++) {
    ageOptions.push(<option value={i}>{i}</option>)
}
  
export default function SignupPage() {
    // const username = useSelector(state => state.user.user);
    //name, userName, owner, breed, size, age, gender
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [breed, setBreed] = useState("");
    const [size, setSize] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
   

    const handleChange= (e) => {
        const { name, value } = e.target;
        // Files from target are in e.target.files which returns an object 'FileList'
        if (name === 'image') {
            console.log(e.target.files)
            // setValues({
            //     ...values,
            //     [name]: e.target.files[0]
            // })
        }
        
        if (name === 'sex') {
            setSex(value);
        }

        if (name === 'age') {
            setAge(value);
        }

        if (name === 'size') {
            setSize(value);
        }

        if (name === 'breed') {
            setBreed(value);
        }

        if (name === 'name') {
            setName(value);
        }

        if (name === 'userName') {
            setUsername(value);
        }

        

    };

    const handleClick = async () => {

        const values = {
            name,
            username,
            breed,
            size,
            age,
            gender
     }
    
        fetch('/api/dog/', {
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(values)
            })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(error => console.log(error))
        }

    //     // Check if all of the inputs are submitted, then we fetch
    //     if (values.name && values.breed && values.age && values.size && values.sex && values.upload) {

    // }

    return (

<div className='flex justify-center'>
       
            <div className="flex flex-col items-center box-content h-1/3 w-1/2 pt-10 pb-4 px-20 border-2">
                <h1 className='text-4xl mb-5'>Sign Up</h1>
                <div className='my-3'>
                <div>Username</div>
                <input type="text"  name="username" placeholder="Username" className="input input-bordered w-80 max-w-xs text-base" disabled />
                </div>
                <div className='my-3'>
                    <input type="text" name='name' value={name} onChange={handleChange} placeholder="Name" className="input input-bordered input-info w-80 max-w-xs text-base" />
                </div>
                <div className='my-3'>
                    <select name='breed' value={breed} onChange={handleChange} className="select select-info w-80 max-w-xs text-base">
                    <option disabled selected>Breed</option>
                    <option value="Mixed">Mixed</option>
                    <option value="Australian Shepherd">Australian Shepherd</option>
                    <option value="Beagle">Beagle</option>
                    <option value="Boxer">Boxer</option>
                    <option value="Bulldog">Bulldog</option>
                    <option value="Cavalier King Charles Spaniel">Cavalier King Charles Spaniel</option>
                    <option value="Corgi">Corgi</option>
                    <option value="Dachshund">Dachshund</option>
                    <option value="Doberman">Doberman</option>
                    <option value="French Bulldog">French Bulldog</option>
                    <option value="German Shepherd">German Shepherd</option>
                    <option value="Golden Retriever">Golden Retriever</option>
                    <option value="Great Dane">Great Dane</option>
                    <option value="Labrador Retriever">Labrador Retriever</option>
                    <option value="Miniature Schnauzer">Miniature Schnauzer</option>
                    <option value="Pointer">Pointer</option>
                    <option value="Poodle">Poodle</option>
                    <option value="Rottweiler">Rottweiler</option>
                    <option value="Shih Tzu">Shih Tzu</option>
                    <option value="Siberian Husky">Siberian Husky</option>
                    <option value="Yorkshire Terrier">Yorkshire Terrier</option>
                    </select>
                </div>
                <div className='my-3'>
                    <select name='age' value={age} onChange={handleChange} className="select select-info w-80 max-w-xs text-base">
                    <option disabled selected>Age</option>
                    {ageOptions}
                    </select>
                </div>
                {/* <div className='my-3'>
                    <input type="text" name={size} value={size} onChange={handleChange} placeholder="Size" className="input input-bordered input-info w-80 max-w-xs text-base" />
                </div> */}
                <div className='my-3'>
                    <select name='size' value={size} onChange={handleChange} className="select select-info w-80 max-w-xs text-base">
                    <option disabled selected>Size</option>
                    <option>Loved</option>
                    <option>Extra-Loved</option>
                    <option>Extra-Extra-Loved</option>
                    </select>
                </div>
                <div className='my-3'>
                    <select name='gender' value={gender} onChange={handleChange} className="select select-info w-80 max-w-xs text-base">
                    <option disabled selected>Sex</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Unspecified</option>
                    </select>
                </div>
                <div className='my-3'>
                    <input type="file" id="image" name='image' /*value={image}*/ onChange={handleChange} className="file-input file-input-bordered file-input-sm w-80 max-w-xs" />
                </div>
                <button onClick={handleClick} className="btn btn-info my-10">Create Account</button>
                </div>

        </div>



    )
}
