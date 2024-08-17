//external css
import "./app.css"

//internal css
const header = {
    color:"rgb(116, 4, 75)",
    textAlign:"center",
    fontFamily: 'Courier New, Courier, monospace '
}

function HeaderFile(){
    return(<h1 style={header}>Self Introduction</h1>)
}
const MyIntro = (probs) =>{
     const {name ,city} =probs ;
    return(
        <div className="intro-card">
            <b>My Name is {probs.name} Babasaheb Dumbare.I am resident of sinnar which is subdivision of {probs.city}.Cureently I am pursuing Bachleor of enginerring in IT branch from Sir Visvesvaraya Institude Of Technology,Nashik.</b>
        </div>
    )
}

function Greeting(){
  return(
    <div>
        {/* inline css */}
        <p style={{
            color:"rgb(70, 3, 37)" ,
            textAlign:"center",
            fontSize:"30px",
            fontFamily:'Courier New, Courier, monospace'

        }}>
            Thank uhh !!!</p>
   </div>
  )
}

export default HeaderFile;
export{ MyIntro,Greeting }
  