import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import Product from './Product'
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img 
        className="home__image"
          src="https://th.bing.com/th/id/R.eace4116a9309c26ca3329759744d339?rik=QyzJxztL3aOlJA&riu=http%3a%2f%2ffhan.org.np%2fassets%2fgallery%2fOur_Products%2fbamboo.jpg&ehk=6KCw3%2bPvTvo9pZq6QD9yH9BCfwEOdWTHth9rn0vDxmw%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
          alt=""
        />
    
      
        <div className="home__row">
          <Product
          id="100" 
          title="Porcelin Vase" 
          price={1500} 
          image="https://lh6.googleusercontent.com/proxy/kAveWcrved-hsdUmXFN3G8KmgRahJf8oYuTugMSsMZ-CLPt7WaCWW9dNz7QaTrEup9IEwVzXGRcOGenRQvioo1yZIwnmQR82V54lKSB6FNf_H_Ys10uJuHtHbx3PTnVue2AOezJGvXbvsfOoGvLLbqvZnlJ52u1nj_qVRLwBokWvH_awcS8tSz200EAb-42gt5odPVtZ91_lHJo0WLOomIRlq5Zwc182FermVrtA045FT9SjcqL7yQ=s0-d"
          rating={4}/>  
      
          <Product
          id="101" 
          title="Jute and Glass vase"
          price={1000}
          image="https://www.ssalibd.com/wp-content/uploads/2015/09/11935574_10206509858521487_1346780210_n-copy.jpg"
          rating={5}
          />
          
          <Product
          id="102" 
          title="Bamboo basket ball"
          price={600}
          image="https://res.cloudinary.com/purnesh/image/upload/f_auto/v1498809469/tripura-handloom--handicraft-development-corporation0.jpg"
          ratings={2}
          />
        </div>

        <div className="home__row">
        <Product
          id="103" 
          title="Brass flask" 
          price={3000} 
          image="https://n3.sdlcdn.com/imgs/a/4/x/Mewar-Handicrafts-Glossy-Brass-Handicrafts-SDL834807460-1-24a1c.jpg"
          rating={5}/>
  

        <Product 
          id="104"
          title="Wood carving tool" 
          price={1200} 
          image="https://ftaelectronics.com/image/catalog/Tools/Cutting%20Tools/12pc%20Set%20Carbon%20Steel%20Cutting%20Wood%20Carving%20Tools%20Knife%20Chisel%20Woodwork%20(1).jpg"
          rating={4}/> 
               
        
        
          <Product
          id="105" 
          title="Product 6" 
          price={1500} 
          image="https://1.bp.blogspot.com/-P1v2hP2gugo/WrFXUOZQ8II/AAAAAAAAAHc/Wm5sjWutTScqjUZ32ySX2ImDjsASJnGpwCLcBGAs/s1600/wooden%2Bwood%2Bhandicraft%2Bitems%2Bdesign%2Bpicture%2Bmanufacturers%2Bexporters%2B65.jpg"
          rating={4}/>

          <Product
          id="107" 
          title="Bamboo basket" 
          price={1200} 
          image="https://th.bing.com/th/id/OIP._xqC9_T9RVILpYv2MJufqgHaFj?pid=ImgDet&rs=1"
          rating={4}/>  
             

        </div>
        <div className="home__row">
        <Product
          id="108" 
          title="Colorfull Pots" 
          price={300} 
          image="https://th.bing.com/th/id/OIP.spgkm45OnKMLeergkp6DwwHaEK?pid=ImgDet&rs=1"
          rating={4}/>
  

        <Product 
          id="109"
          title="Wooden carved camel" 
          price={1500} 
          image="https://th.bing.com/th/id/OIP.1CPzA9_qWIwpw6zc8AN-XQHaHa?pid=ImgDet&rs=1"
          rating={5}/> 
               
        
        
          <Product
          id="110" 
          title="Handmade Jute bag" 
          price={1200} 
          image="https://th.bing.com/th/id/R.0b943e94f0357f4a0ad116e2ebffdf46?rik=2tLZFwZbn3u2DA&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2017%2f03%2fHandicraft-PNG-File.png&ehk=ZCELhvknrWE1Y8DgnKnQytFKYABqWGIeLzKN6jC9jAQ%3d&risl=&pid=ImgRaw&r=0"
          rating={4}/>

          <Product
          id="111" 
          title="Bamboo basket " 
          price={1300} 
          image="https://th.bing.com/th/id/OIP.KnsBaEjM3MSKdxYJ0EM1qwHaEj?pid=ImgDet&rs=1"
          rating={4}/>  
             

        </div>
        <div className="home__row">
        <Product
          id="112" 
          title="Wooden Key chain" 
          price={500} 
          image="https://th.bing.com/th/id/OIP.-Dse2MZUCCQeTwRvyfnuVwHaE8?pid=ImgDet&rs=1"
          rating={4}/>
  

        <Product 
          id="113"
          title="Tingkop" 
          price={1700} 
          image="https://th.bing.com/th/id/OIP.X4FgDHRPHdW_I4K5u6oj6gHaHa?pid=ImgDet&rs=1"
          rating={5}/> 
               
        
        
          <Product
          id="114" 
          title="Elephant Wood Idol" 
          price={2500} 
          image="https://th.bing.com/th/id/OIP.L2mWPUS6RF5BuqWI-kgh6QHaIq?pid=ImgDet&rs=1"
          rating={4}/>

          <Product
          id="115" 
          title="Saraswati Wood Idol" 
          price={2500} 
          image="https://n4.sdlcdn.com/imgs/f/u/e/Artistic-Handicrafts-Saraswati-Wood-Idol-SDL783205690-1-f48be.jpg"
          rating={4}/>  
             

        
        </div>
      </div>  
    </div>
  );
}

export default Home;