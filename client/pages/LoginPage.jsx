import React from 'react';

export default function LoginPage() {
    return (
        <div>
            <h1>Login</h1>
            <a
              className="px-7 py-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
              style={{ backgroundColor: "#3b5998" }}
              href={""}
              role="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              {/* <img
                className="pr-2"
                src={GoogleLogo}
                alt=""
                style={{ height: "2rem" }}
              /> */}
              Continue with Google
            </a>
            <a
              className="px-7 py-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
              style={{ backgroundColor: "#3b5998" }}
              href={""}
              role="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              {/* <img
                className="pr-2"
                src={GoogleLogo}
                alt=""
                style={{ height: "2rem" }}
              /> */}
              Continue with Facebook
            </a>
            <a
              className="px-7 py-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
              style={{ backgroundColor: "#3b5998" }}
              href={""}
              role="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              {/* <img
                className="pr-2"
                src={GoogleLogo}
                alt=""
                style={{ height: "2rem" }}
              /> */}
              Continue with Github
            </a>
        </div>
    )
}