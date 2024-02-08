import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


function Github() {
  // const data = useLoaderData()
  const {data , setData} = useState([]);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/yuv-raj-25")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div
      className="bg-gray-500 text-3xl text-white p-4
     text-center m-4"
    >
        Github Followers :  {data.followers } 
      <img
        src={data.avatar_url}
        alt="Error in uploading the picture"
        width={300}
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
 const response =  await fetch('https://api.github.com/users/yuv-raj-25')

 return response.json();

}
