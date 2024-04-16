import "./subBox.css"
import Ice from "../../assets/ice.svg"
import Telenor from "../../assets/telenor.svg"
import Telia from "../../assets/telia.svg"
import Front from "../front/Front"


// eslint-disable-next-line react/prop-types
const SubBox = ({isPassedP,isPassedPr}) => {
  return (
    <>
    <div className="sub-box">
      <div className="back-box"></div> 
       <div className="front-box">
            <Front img={Ice} frontText="Ice Mobile 10GB" subFrontText="Up to 100Mbit/s" price="299,-" month="/month" /> 
       </div>
    </div>
    <div className="sub-box">
      <div className={`back-box ${isPassedP == true ? "passed" : ""}`}></div> 
       <div className="front-box">
            <Front img={Telia} frontText="Telia Mobil 15GB" subFrontText="Unlimited calls, SMS and MMS" price="953,-" month="/month" />       
       </div>
    </div>
    <div className="sub-box">
      <div className={`back-box ${isPassedPr == true ? "passedPr" : ""}`}></div> 
       <div className="front-box">
            <Front img={Telenor} frontText="Telenor Next Fast" subFrontText="Up to 100Mbit/s" price="1028,-" month="/month" />       
       </div>
    </div>
    </>
  )
}

export default SubBox
