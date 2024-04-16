import "./front.css"

// eslint-disable-next-line react/prop-types
const Front = ({img, frontText, subFrontText,price,month}) => {
  return (
    <div className="front">
        <div className="front-box">
            <div className="box1">
            <img src={img} alt="icon" className="front-img" />
            <span className="front-text">{frontText}</span>
            <span className="front-sub-text">{subFrontText}</span>
            <div className="text-area"> <span className="front-price">{price} </span>
            <span className="front-month">{month}</span></div>
            </div>
            <button>Add subscription</button>
        </div>
    </div>
  )
}

export default Front
