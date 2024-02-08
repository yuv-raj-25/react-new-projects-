import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


function Github() {
   const data = useLoaderData()
  // const {data , setData} = useState([]);

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/yuv-raj-25")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg text-center">
      {error ? 
        <p className="text-red-500">{error}</p>
      ) : userData ? (
        <>
          <img
            src={userData.avatar_url}
            alt={`Profile of ${username}`}
            className="mx-auto rounded-full mb-4"
            style={{ width: '150px', height: '150px' }}
          />
          <h2 className="text-2xl font-bold mb-2">{userData.name}</h2>
          <p className="text-gray-400 mb-4">@{username}</p>
          <p className="text-lg">
            GitHub Followers: <span className="text-blue-500">{userData.followers}</span>
          </p>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-400"
          >
            View on GitHub
          </a>
        </>
      ) : (
        <p className="text-gray-400">Loading...</p>
      )}
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
 const response =  await fetch('https://api.github.com/users/yuv-raj-25')

 return response.json();

}
