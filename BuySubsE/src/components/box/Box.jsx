// import Ice from "../../assets/ice.svg"
// import Telia from "../../assets/telia.svg"
// import Telenor from "../../assets/telenor.svg"
import SubBox from "../sub-box/SubBox"
import "./box.css"

const Box = () => {
  return (
    <div className="box">
       <SubBox isPassedP={true} isPassedPr={true}/>
    </div>
  )
}

export default Box
