import React from "react";
import "./Home.css"
import Product from "./Product";


function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

          <div className="home__row"> 
          <Product 
          id="987867"
          title="OnePlus Nord 5G (Gray Onyx, 12GB RAM, 256GB Storage)" 
          price={29.99} 
          image="https://m.media-amazon.com/images/I/71zlbKfhFsL._AC_UY218_.jpg"
          rating={5} /> 

          <Product 
          id="987233"
          title="Kenwood KMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough and Whisk, 5 Litre Glass Bowl" 
          price={239.0} 
          image="https://m.media-amazon.com/images/I/51ae8jtSakL._AC_UY218_.jpg"
          rating={5} />
          </div>

          <div className="home__row">
          <Product
          id="987121"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Moniter" 
          price={199.9} 
          image="https://m.media-amazon.com/images/I/71OuxUHNjEL._AC_UY218_.jpg"
          rating={5} />
          <Product 
          id="987812"
          title="Amazon Echo (3rd generation) | Smart Speaker with alexa, Charcoal Fabric" 
          price={98.0} 
          image="https://m.media-amazon.com/images/I/61MbLLagiVL._AC_UY218_.jpg"
          rating={4}/>
          <Product 
          id="987867"
          title="New Apple iPad Pro (12.0inch, Wi-Fi, 128GB) - Silver (4th Generation)" 
          price={578.88} 
          image="https://m.media-amazon.com/images/I/81Dd5ZGiUzL._AC_UY218_.jpg"
          rating={4}/>
          </div>


          <div className="home__row">
          <Product
          id="677867"
          title="ASUS ROG Strix Scar 15 (2021), 15.6' FHD 300Hz/3ms, AMD Ryzen 9 5900HX, GeForce RTX 3080 16GB Graphics, Gaming Laptop (32GB/1TB SSD/Office 2019/Windows 10/Black/2.3 kg), G533QS-HF059TS
          4.0 out of 5 stars" 
          price={978.88} 
          image="https://m.media-amazon.com/images/I/81Xa7ORzWLL._AC_UY218_.jpg"
          rating={4} />
          </div>  
        </div>
    </div>
  );
}

export default Home;
