import React from 'react';

export default function LoginPage() {
    return (
        <div className='grid h-screen place-items-center'>
            <div className="box-content h-1/3 w-1/2 pt-10 pb-4 px-20 border-4">
                <h1 className='text-4xl mb-5'>Login</h1>
                <p className='mb-4'>Choose the account you want to login with</p>
                <div className='btn-google'>
                <a
                className="px-6 py-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                style={{ backgroundColor: "#DB4437" }}
                href={""}
                role="button"
                //   data-mdb-ripple="true"
                //   data-mdb-ripple-color="light"
                >
                Continue with Google
                </a>
                </div>

                <div className='btn-facebook'>
                <a
                className="px-6 py-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                style={{ backgroundColor: "#4267B2" }}
                href={""}
                role="button"
                //   data-mdb-ripple="true"
                //   data-mdb-ripple-color="light"
                >
                Continue with Facebook
                </a>
                </div>

                <div className='btn-github'>
                <a
                className="px-6 py-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                style={{ backgroundColor: "#171515" }}
                href={""}
                role="button"
                //   data-mdb-ripple="true"
                //   data-mdb-ripple-color="light"
                >
                Continue with Github
                </a>
                </div>
            </div>
        </div>
    )
}