import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Projectt = () => {

  const [foods,setFood]=useState([
    {
      img:"https://bootstrapmade.com/content/demo/Yummy/assets/img/hero-img.png",
      name:"Magnam Tiste",
      p:"Lorem, deren, trataro, filede, nerada",
      amount:"$5.95" 
      },
      {
        img:"https://bootstrapmade.com/content/demo/Yummy/assets/img/menu/menu-item-2.png ",
        name:"Aut Luia",
        p:"Lorem, deren, trataro, filede, nerada",
        amount:"$14.95" 
        },{
          img:"https://bootstrapmade.com/content/demo/Yummy/assets/img/menu/menu-item-3.png",
          name:"Est Eligendi",
          p:"Lorem, deren, trataro, filede, nerada",
          amount:"$8.95" 
          },{
            img:"https://bootstrapmade.com/content/demo/Yummy/assets/img/menu/menu-item-4.png",
            name:"Eos Luibusdam",
            p:"Lorem, deren, trataro, filede, nerada",
            amount:"$12.95" 
            },{
              img:"https://bootstrapmade.com/content/demo/Yummy/assets/img/menu/menu-item-5.png",
              name:"Eos Luibusdam",
              p:"Lorem, deren, trataro, filede, nerada",
              amount:"$12.95" 
              },{
                img:"https://bootstrapmade.com/content/demo/Yummy/assets/img/menu/menu-item-6.png",
                name:"Laboriosam Direva",
                p:"Lorem, deren, trataro, filede, nerada",
                amount:"$9.95" 
                },

               
  ])
  return (
  
   <div>
  
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><h4><b>Yummy</b> <span style={{color:'red'}}>.</span></h4>
      
       
        </Navbar.Brand>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
       
          <Nav className="me-auto " style={{marginLeft:'150px'}}>
            
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Menu</Nav.Link>
            <Nav.Link href="#link">Events</Nav.Link>
            <Nav.Link href="#link">Chefs</Nav.Link>
            <Nav.Link href="#link">Gallery</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
           
              <NavDropdown.Item href="#action/3.1">Dropdown 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Dropdown 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Dropdown 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Dropdown 4 
              </NavDropdown.Item>
              
            </NavDropdown>
            <button type="button" class="btn btn-danger" style={{marginLeft:"100px"}}>Book a Table</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

<div className="container-fluid mt-5">
  <div className="row justify-content-between">
  <div className='col-md-5' style={{paddingTop:"100px", paddingLeft:"100px"}}>
<h1 >Enjoy Your Healthy<br></br>
Delicious Food</h1>
<p>We are team of talented designers making<br></br> websites with Bootstrap</p>
<button type="button" class="btn btn-danger btn-lg  rounded-pill"> Book a Table  </button>
<button  type="button" class="btn btn- btn-lg rounded-pill"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red"  class="bi bi-play-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
</svg> Watch Vidoe</button>

</div>
<div className='col-md-5' >
  <img src="https://bootstrapmade.com/content/demo/Yummy/assets/img/hero-img.png" height={450} width={450} className='animated'/>

 

   </div>
  </div>
</div>
<div className="container-fluid mt-5">
  <div className="row justify-content-between">
  <div className='col-md-12 text-center' >
    <p >ABOUT UP</p>
    <h1 style={{fontFamily: "Amatic SC", sansSerif: "sans-serif"}}>LEARN MORE <span style={{color:'red'}}>ABOUT US</span></h1>

    </div></div>
  </div>
  <div className="container-fluid mt-5">
  <div className="row justify-content-between">
  <div className='col-md-6 text-center'>
    <img src='https://bootstrapmade.com/content/demo/Yummy/assets/img/about.jpg' height={550} width={750}  style={{paddingTop:"45px", paddingLeft:"100px"}}>
    </img>
   <h3 style={{ border:'3px solid black', marginTop:'20px ', paddingTop:'20px',  display:'grid', marginLeft:'200px', justifyContent:'center', paddingBottom:'20px'}}>BOOK A TABLE <br></br><span style={{color:'red',}}>+1 5589 55488 55</span></h3>
   
    </div>
    <div className='col-md-5'>

      <p style={{paddingTop:'40px'}}><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> sed do eiusmod tempor incididunt ut labore et dolore<br></br> magna aliqua.</i></p>
      <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>

</svg>&nbsp;
Ullamco laboris nisi ut aliquip ex ea commodo consequat.<br></br><br></br>



      <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>

</svg>&nbsp;Duis aute irure dolor in reprehenderit in voluptate velit.<br></br><br></br>

<svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>

</svg>&nbsp;Ullamco laboris nisi ut aliquip ex ea commodo <br></br>consequat. Duis aute irure dolor in reprehenderit in<br></br> voluptate trideta storacalaperda mastiro dolore eu<br></br> fugiat nulla pariatur.<br></br><br></br>
     
<p>Ullamco laboris nisi ut aliquip ex ea commodo<br></br> consequat. Duis aute irure dolor in reprehenderit in<br></br> voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br></br> Excepteur sint occaecat cupidatat non proident

</p>
<img src="https://bootstrapmade.com/content/demo/Yummy/assets/img/about-2.jpg" class="img-fluid" height={50} width={400} ></img>
<a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" class="glightbox pulsating-play-btn"></a>
      </div></div>
  </div>
  <div className="container-fluid mt-5">
  <div className="row justify-content-between">
  <div className='col-md-12 text-center' >
   <p>Our Menu</p>
    <h1 style={{fontFamily: "Amatic SC", sansSerif: "sans-serif"}}>CHECK OUR <span style={{color:'red'}}>YUMMY MENU</span></h1>
   </div>
    <div className='col-md-3 text-center' href='#link'>
    <p >Starters</p></div>
    <div className='col-md-3 text-center'>
   <p>Breakfast</p></div>
   <div className='col-md-3 text-center'>
   <p>Lunch</p></div>
   <div className='col-md-3 text-center'>
   <p>Dinner</p></div>
    
 </div></div> 
  <div className="container mt-5">
  <div className="row justify-content-around">
    
  {
          foods.map(variable => ((
      <div className="col-md-4 text-center mt-5 ">
        <div  style={{ width: '18rem' }}>
          <img src={variable.img}  height={250} width={250}/>
          <h3>{variable.name}</h3>
   <p>{variable.p}</p>
   <h3 style={{color:'red'}}>{variable.amount}</h3><br></br><br></br>
            
        </div></div>
          )))}
 

   </div>
    </div>
  
   <div className="container ">
  <div className="row justify-content-around">

  <div className='col-md-12 text-center' >
   <p>Book A Table</p>
    <h1 style={{fontFamily: "Amatic SC", sansSerif: "sans-serif"}}>Book Your <span style={{color:'red'}}>Stay With Us</span></h1>
   </div>
  
    <div className='col-md-5 text-center' >
      <img src="https://bootstrapmade.com/content/demo/Yummy/assets/img/reservation.jpg" height={500} width={400}/>
   
    </div>
   
    <div className='col-md-7 ' >

    <br></br><br></br><br></br><br></br><br></br>

      <div className="row">
        <div className="col"> <input type="text" placeholder='Your Name' style={{paddingBottom:10}} /></div><br></br><br></br><br></br>
        <div className="col"> <input type="text" placeholder='Your Phone' style={{paddingBottom:10}} /></div><br></br><br></br><br></br>
        <div className="col"> <input type="text" placeholder='Your Email' style={{paddingBottom:10}} /> </div><br></br><br></br><br></br>
      </div>
      <div className="row">
        <div className="col">  <input type="date" style={{paddingRight:47, paddingBottom:10}} /></div>
        <div className="col"> <input type='time' style={{paddingRight:110,paddingBottom:10}} /></div>
        <div className="col"> <input type="number" style={{paddingBottom:10}} /></div> <br></br><br></br> <br></br>
      </div>
     
      <div className="row">
        

        <textarea >Message</textarea> 
  
  </div>
  
 

        <button type="button" class="btn btn-danger  mt-5 "  style={{justifyContent:"center"}}>Book a Table  </button>

     
   
  
  </div></div></div><br></br><br></br><br></br><br></br>

  <div className='row justify-content-around'>

    <div className='col-md-12 text-center'>

      <p>Contact</p>
      <h1 style={{fontFamily: "Amatic SC", sansSerif: "sans-serif"}}>Need Help? <span style={{color:'red'}}>Contact Us</span></h1>

    </div>
  </div>
  
  </div>

   
    

  
   
    

  )
}

export default Projectt

