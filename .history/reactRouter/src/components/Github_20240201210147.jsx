import { useEffect, useState } from "react";

function Github() {
  // const {data , setData} = useState([]);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/yuv-raj-25")
    .then(response => {
        if (!response.ok) {
         // throw new Error("Error in fetching the data");
        }
        return response.json();
      })
      .then(data => {
        console.log(`GitHub Followers: ${data.length}`);
        // Process the data as needed
      })
      .catch(error => {
        console.error(error.message);
      });
  }, []);

  return (
    <div
      className="bg-gray-500 text-3xl text-white p-4
     text-center m-4"
    >
      Github Followers : {data.followers }
      <img
        src={data.avatar_url}
        alt="Error in uploading the picture"
        width={300}
      />
    </div>
  );
}

export default Github;
