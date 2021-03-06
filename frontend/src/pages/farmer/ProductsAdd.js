import React,{useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {Form, Button} from "react-bootstrap";


function ProductsAdd(){

  const [productName, setproductName] = useState("");
  const [category, setcategory] = useState("");
  const [price, serprice] = useState("");
  const [description, setdescription] = useState("");
  const [manufacDate, setmanufacDate] = useState("");
  const [image, setimage] = useState("");

  function sendData(e){
    if(description.trim().length < 2){
      alert("Please insert a good Description");
      return
      
  }
    e.preventDefault();

    const newProduct ={

      productName,
      category,
      price,
      description,
      manufacDate,
      image

    }

    axios.post("http://localhost:5000/products/create",newProduct).then(()=>{

      alert("Product Added Successfully");
    window.location = `/allproducts`;


    
    setproductName("");
    setcategory("");
    serprice("");
    setdescription("");
    setmanufacDate("");
    setimage("");

    

    }).catch((err=>{

      alert(err)
    }))

   
  }



    return(

      <div>
    

      <center>
              <Form onSubmit={sendData}>
                <Form.Group className="container" controlId="vehicleNo">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control type="text" required placeholder="Enter Product Name"  maxlength="20" onChange={(e)=>{

              setproductName(e.target.value);

                  }}/>
                  <Form.Text className="text-muted">
                    ex : cucumber plant at 3 weeks
                  </Form.Text>
                </Form.Group>

                <Form.Group className="container" controlId="vModel">
                  <Form.Label>Category</Form.Label>
                  <Form.Control type="text" required placeholder="Enter Category" onChange={(e)=>{

              setcategory(e.target.value);

              }}/>
                </Form.Group>

                <Form.Group className="container" controlId="nicNo">
                  <Form.Label>Price</Form.Label>
                  <Form.Control type="number" required placeholder="ex :550LKR"   onChange={(e)=>{

              serprice(e.target.value);

              }}/>
                </Form.Group>

                <Form.Group className="container" controlId="ownerName">
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="text" required placeholder="Enter Description" onChange={(e)=>{

              setdescription(e.target.value);

              }}/>
                </Form.Group>

                <Form.Group className="container" controlId="manufacYear">
                  <Form.Label>Manufactured Date</Form.Label>
                  <Form.Control type="date" required placeholder="Enter Manufactured Date" maxlength="8" onChange={(e)=>{

              setmanufacDate(e.target.value);

              }}/>
                </Form.Group>

                <Form.Group className="container" controlId="vType">
                  <Form.Label>image</Form.Label>
                  <Form.Control type="text" required placeholder="input image link" onChange={(e)=>{

              setimage(e.target.value);

              }}/>
                </Form.Group>
                


                <Form.Group className="container" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" required label="Product details checked" />

                  <Button variant="primary" type="submit">
                  Submit
                </Button>
                <Link to ="/"> <Button variant="info">home</Button></Link>


                </Form.Group>
              
              </Form>
      </center>

      </div>

);

}
export default ProductsAdd;