import { useEffect, useState } from "react";

function Github() {
  // const {data , setData} = useState([]);

  const { data, setData } = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/yuv-raj-25")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div
      className="bg-gray-500 text-3xl text-white p-4
     text-center m-4"
    >
      Github Followers : {data.f}
    </div>
  );
}

export default Github;
