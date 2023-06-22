import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

const breedArr = ['Mixed', 'Australian Shepherd', 'Beagle', 'Boxer', 'Bulldog', 'Cavalier King Charles Spaniel', 'Corgi', 'Dachshund', 'Doberman', 'French Bulldog', 'German Shepherd', 'Golden Retriever', 'Great Dane', 'Labrador Retriever', 'Miniature Schnauzer', 'Pointer', 'Poodle', 'Rottweiler', 'Shih Tzu', 'Samoyed','Siberian Husky', 'Yorkshire Terrier'];

const breedOptions = [];

for (const breed of breedArr) {
    breedOptions.push(<option value={breed}>{breed}</option>)
}
  
export default function SignupPage() {
    // const username = useSelector(state => state.user.user);
    const [values, setValues] = useState(initialValues);

    const handleChange= (e) => {
        const { name, value } = e.target;
        // Files from target are in e.target.files which returns an object 'FileList'
        if (name === 'image') {
            console.log(e.target.files)
            setValues({
                ...values,
                [name]: e.target.files[0]
            })
        } else {
            setValues({
              ...values,
              [name]: value,
            });
        }
    };

    const handleClick = () => {
        // Check if all of the inputs are submitted, then we fetch
        // if (values.name && values.breed && values.age && values.size && values.sex && values.upload) {
            // console.log(values);
            // fetch('/dog/', {
            //     method: 'POST',
            //     body: JSON.stringify({username, ...values})
            // })
            // .then(res => res.json())
            // .then(res => console.log(res))
            // .catch(error => console.log(error))
        // }
    }

    return (
        <div className='flex justify-center'>
            <div className="flex flex-col items-center box-content h-1/3 w-1/2 pt-10 pb-4 px-20 border-2">
                <h1 className='text-4xl mb-5'>Sign Up</h1>
                <div className='my-3'>
                <div>Username</div>
                <input type="text" placeholder="Username" className="input input-bordered w-80 max-w-xs text-base" disabled />
                </div>
                <div className='my-3'>
                    <input type="text" name='name' value={values.name} onChange={handleChange} placeholder="Name" className="input input-bordered input-info w-80 max-w-xs text-base" />
                </div>
                <div className='my-3'>
                    <select name='breed' onChange={handleChange} className="select select-info w-80 max-w-xs text-base">
                    <option disabled selected>Breed</option>
                    {breedOptions}
                    </select>
                </div>
                <div className='my-3'>
                    <select name='age' onChange={handleChange} className="select select-info w-80 max-w-xs text-base">
                    <option disabled selected>Age</option>
                    {ageOptions}
                    </select>
                </div>
                {/* <div className='my-3'>
                    <input type="text" name={size} value={values.size} onChange={handleChange} placeholder="Size" className="input input-bordered input-info w-80 max-w-xs text-base" />
                </div> */}
                <div className='my-3'>
                    <select name='size' onChange={handleChange} className="select select-info w-80 max-w-xs text-base">
                    <option disabled selected>Size</option>
                    <option>Loved</option>
                    <option>Much-Loved</option>
                    <option>Very-Loved</option>
                    </select>
                </div>
                <div className='my-3'>
                    <select name='sex' onChange={handleChange} className="select select-info w-80 max-w-xs text-base">
                    <option disabled selected>Sex</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Unspecified</option>
                    </select>
                </div>
                <div className='my-3'>
                    <input type="file" name='image' /*value={values.image}*/ onChange={handleChange} className="file-input file-input-bordered file-input-sm w-80 max-w-xs" />
                </div>
                <button onClick={handleClick} className="btn btn-info my-10">Create Account</button>
            </div>
        </div>
    )
}
