import {createRoot}  from "react-dom/client";
import Header,{MyIntro,Greeting} from "./app.js"

const root=createRoot(document.getElementById("root"));

root.render(<>
    <Header/>
    <MyIntro name="Vaishnavi" city="Nashik"/>
    <Greeting/>
   
    </>
)