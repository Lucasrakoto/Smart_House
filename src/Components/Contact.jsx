import Lio from "./../Assets/Lio.jpg"
import MANOHISOA from "./../Assets/MANOHISOA.pdf"
import lionel from "./../Assets/lionel.jpg"
import {
    FaGithub,
    FaLinkedin,
    FaFacebook,
} from "react-icons/fa"


export default function Home() {




    return(
       
<div class="wrapper">

<div class="title">
    <h4>Our Team Section</h4>
</div>

<div class="card_Container">

    <div class="card">

        <div class="imbBx">
            <img src={Lio}/>
        </div>

        <div class="content">
            <div class="contentBx">
                <h3>James Henry <span>Web Analyst</span></h3>
            </div>
            <ul class="sci">
                
            </ul>
        </div>

    </div>

    <div class="card">

        <div class="imbBx">
        <img src={Lio}/>
        </div>

        <div class="content">
            <div class="contentBx">
                <h3>John Doe <span>UI/UX Designer</span></h3>
            </div>
            <ul class="sci">
               
            </ul>
        </div>

    </div>

    <div class="card">

        <div class="imbBx">
        <img src={Lio}/>
        </div>

        <div class="content">
            <div class="contentBx">
                <h3>Mykel Smith <span>Front-End Web Developer</span></h3>
            </div>
            <ul class="sci">
               
            </ul>
        </div>

    </div>

    <div class="card">

        <div class="imbBx">
        <img src={Lio}/>
        </div>

        <div class="content">
            <div class="contentBx">
                <h3>Alex Morgan <span>Back-End Web Developer</span></h3>
            </div>
            <ul class="sci">
               
            </ul>
        </div>

    </div>
    <div class="card">

        <div class="imbBx">
        <img src={Lio}/>
        </div>

        <div class="content">
            <div class="contentBx">
                <h3>Alex Morgan <span>Back-End Web Developer</span></h3>
            </div>
            <ul class="sci">
               
            </ul>
        </div>

    </div>
    <div class="card">

        <div class="imbBx">
        <img src={Lio}/>
        </div>

        <div class="content">
            <div class="contentBx">
                <h3>Alex Morgan <span>Back-End Web Developer</span></h3>
            </div>
            <ul class="sci">
               
            </ul>
        </div>

    </div>
</div>

</div>

    

     
    )
}