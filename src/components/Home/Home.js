import Header from "./Header";
import Body from "./Body";
import "aos/dist/aos.css";

import "./Home.css";
import { useEffect } from "react";
import Aos from "aos";


export default function Home() {
    useEffect(() => {
        Aos.init();
      },[]);

    return(
        <div className="mainHomeContainer">
            <Header/>
            <Body/>
        </div>
    )
}