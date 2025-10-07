import Image from "next/image";
import Navigation from "./components/Nav";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <div className="hero" style={{height:"100vh",width:"100%",boxShadow:"0 1vh 50px"}}>
          
          <video 
            src="/Gabe-highlight-Reel.mp4"
            type="video/mp4"
            className="hero-video"
            preload="auto"
            loop
            playsInline
            autoPlay={true}
            muted={true}
          />
          <Navigation/>
          <div className="Hero-text" style={{width:"100%",display:"flex",flexDirection:"column",height:"80vh",justifyContent:"space-around"}}>
            <div style={{display:"flex",flexDirection:"column", justifyContent:"center",width:"fit-content", alignContent:"center",alignItems:"center", alignSelf:"center"}}>
              <h3 className="gradient-outline text-[clamp(3rem,10vw,8rem)] font-bold"  data-text="Train">
                Train
              </h3>
              <h3 className="gradient-outline text-[clamp(.7rem,4vw,3rem)] font-bold"  data-text="like a">
                like a 
              </h3>
              <h3 className="gradient-outline text-[clamp(3rem,10vw,8rem)] font-bold" style={{lineHeight:"1.1"}} data-text="Champion" >
                Champion
              </h3>
            </div>
            <div style={{display:"flex", justifyContent:"center",height:"40%"}}>
              
                <h4 style={{display:"flex", justifyContent:"center",marginTop:"auto"}} className="gradient-outline-orange text-[clamp(1rem,6vw,2.2rem)] font-bold" data-text="Reserve your training">
                  <a href="/Contact">
                  Reserve your training
                  </a>
                </h4> 
              
              
            </div>
            
          </div>          
        </div>

        <div className="bio" style={{marginTop:"6vw",position:"relative"}}>
          <h2 className="gradient-outline-orange text-[clamp(2rem,8vw,6.5rem)] font-bold" style={{display:"flex",justifyContent:"center",position:"relative",transform:"translateY(clamp(10px,2vw + 1px, 30px))",zIndex:2,lineHeight:1}} >
            Gabe Joseph 
          </h2> 
          <div style={{display:"flex", justifyContent:"center"}}>
            <div className="bio-headshot" style={{aspectRatio:"3/4",position:"relative",marginRight:"8vw",boxShadow:"5px 5px 30px"}}>
              <Image 
              src={"/Gabe-Headshot.jpg"}
              fill
              alt="Headshot of Gabe Joseph with gloves and a stern look"
              style={{objectFit:"cover",zIndex:-1}}
              />
            </div>

            <div style={{width:"41vw",display:"flex",flexDirection:"column"}}>
              {/* <div style={{height:"20%"}}/> */}
              <div style={{display:"flex",justifyContent:"space-between",flexDirection:"column",marginTop:"10%",height:"80%"}}>
                <p className="redText">
                  I became a champ by showing up every day, even when no one was watching. What kept me going was knowing I could be better than I was yesterday. Now I train others because I want them to feel that same fire; that moment you realize you&apos;re stronger than you thought
                </p>
                {/* <div style={{height:"40%"}}/> */}
                <div style={{position:"absolute",bottom:"0",height:"fitContent"}}>
                  <p className="redText credientials text-[clamp(.3rem,.5vw,1rem)]">
                    Ring Masters 154lb Champion 2025 
                  </p>
                  <p className="redText credientials">
                    Certified 5 Year Personal Trainer
                  </p>
                  <p className="redText credientials">
                    5 Years of transformation experience
                  </p>  
                </div>
               
              </div>
             
            </div> 
          </div>

        </div>
        
        <div className="training" style={{position:"relative", marginTop:"clamp(50px,0px + 10vw,500px)"}}>
          <div className="program-container" style={{display:"flex"}}>
            <div className="program-video">
              <div style={{width:"100%",position:"relative"}}>
                <video
                  src="/Gabe-training.mp4"
                  style={{width:"100%", aspectRatio:"4/5",objectFit:"cover", borderRadius:"10px",boxShadow:"0 0 4px"}}
                  preload="auto"
                  loop
                  playsInline
                  playsinline="true"
                  autoPlay
                  muted={true}
                /> 
                <p className="text-2xl font-bold redText" style={{fontSize:"1.5rem",  position:"absolute",top:"30%",right:"50%",transform:"translate(50%, 50%)",width:"100%",textAlign:"center"}}>Boxing Program</p>
              </div>
              <p className="redText" style={{marginTop:"10px", padding:"15px", textAlign:"center"}}>
                1-on 1 Sessions covering fundamentals, conditioning, 
                and personal tips & tricks
              </p>
            </div>
            <div className="border-line" />
            <div className="program-video" >
              <div style={{width:"100%",position:"relative"}}>
              <video
                src="/Gabe-pushups.mp4"
                style={{width:"100%", aspectRatio:"4/5",objectFit:"cover", borderRadius:"10px",textAlign:"center",boxShadow:"0 0 4px" }}
                preload="true"
                loop
                playsInline
                autoPlay={true}
                muted={true}
                alt="gabe doing some push up workouts"
              />
              <p className="text-2xl font-bold redText" style={{fontSize:"1.5rem",position:"absolute",top:"30%",right:"50%",transform:"translate(50%, 50%)",textAlign:"center",width:"100%"}}>Wellness Program</p>  
              </div>
            
              <p className="redText" style={{marginTop:"10px", padding:"15px",textAlign:"center"}}>
                Physique sculpting, strength training, and assisted discipline.
              </p>
            </div>
          </div>
          <p className="redText" style={{textAlign:"center"}}>
            5 or 8 session packages designed to give get results fast!
          </p>
          <div style={{display:"flex",justifyContent:"center", marginTop:"10px"}}>
           <a href="/Contact"> <button className="redText button" href="/contact" style={{border:"1px solid", padding:"5px",borderRadius:"10px"}}>
              Get your FREE consolutation today!
            </button> </a> 
          </div>
          
        </div>

        <div className="banner" style={{width:"100%",overflow:"hidden",position:"relative",marginTop:"clamp(50px,0px + 1vw,500px)"}}>
          <p style={{position:"absolute",color:"white",bottom:"0",zIndex:"10"}}>
            Ring Masters at MSG - Train with the best
          </p>
          <div style={{width:"100%",height:"clamp(100px, 100px + 15vw, 350px)",position:"relative",zIndex:"-1"}}>
            <Image 
          fill
          alt="Gabe Jospeh in the ring"
          src="/Gabe-in-the-ring.jpg"
          style={{objectFit:"cover",objectPosition:"0px 5%"}}
          />
          </div>
          
        </div>
      </main>
  </div>
  );
}
