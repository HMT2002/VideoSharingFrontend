import axios from "axios";

export const GETThreadAction = async (slug) => {
  if (!slug) {
    return { status: "fail" };
  }
  // const storedToken = localStorage.getItem('token');
  const response = await axios.get("/api/v1/threads/" + slug,{ 'Access-Control-Allow-Origin': '*',baseURL: 'https://videosharingbackend-production.up.railway.app' });
  if (!response.status || response.status === "error") {
    throw new Error("Something went wrong!");
  }
  //   console.log(data);
  return response.data;
};

export const GETAllThreadAction = async () => {
  const response = await axios.get("/api/v1/threads",
  {
    baseURL: 'https://videosharingbackend-production.up.railway.app',
    mode: 'no-cors',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  });

  if (!response.status || response.status === "error") {  
    console.log(response);
    const data = await response.json();
    console.log(data);
    return { status: "fail" };
  }
  console.log(response)
  console.log('data data')
  console.log(response.data);
  return response.data;
};
export const POSTThreadAction = async (thread, token) => {
  if (!thread) {
    return { status: "fail" };
  }

  const response = await fetch("/api/v1/threads", {
    crossDomain:true,
    mode: "cors", // no-cors, *cors, same-origin

    method: "POST",
    body: JSON.stringify(thread),
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  const data = await response.json();
  // console.log(data);


  return data;
};

export const POSTVideoUploadAction = async (formData) => {
  if (!formData) {
    return { status: "fail" };
  }
  const response = await fetch("/api/v1/threads/upload-video", {
    crossDomain:true,
    mode: "cors", // no-cors, *cors, same-origin

    method: "POST",
    body: formData,
  });

  const data = await response.json();
  // console.log(data);

  return data;
};
