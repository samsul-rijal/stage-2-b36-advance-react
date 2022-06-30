import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import { users } from "../dataDummy";

// import necessary hooks from react-router-dom 
import {useParams} from 'react-router-dom'

const DetailUser = () => {
  const [data, setData] = useState();
  
  // call that hooks here and store to variable
  const params = useParams()
  console.log(params.id);

  const index = params.id

  // don't worry about this, we'll cover later
  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  //     .then((response) => response.json())
  //     .then((json) => setData(json));
  //   return () => {
  //     setData();
  //   };
  // }, []);

  // console.log(data);

  

  return (
    // code element inside Container
    // display information that stored in data 
    // console.log first to see what information that you get from fetching
    <Container className="text-center">
      <h2>Halaman Detail User</h2>
      <p>{users[index].nama}</p>
      <p>{users[index].alamat}</p>
    </Container>
  );
};

export default DetailUser;
