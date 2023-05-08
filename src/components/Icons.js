import Image from "./Image"
import icon1 from "../images/icon1.png"
import icon2 from "../images/icon2.png"
import icon3 from "../images/icon3.png"
import icon4 from "../images/icon4.png"

const Icons = () => {
  return (
    <div className="icons-row">
        <div className="icons-column">
            <Image source={icon1} specificClass="iconImages"/>
            <h2>Declarative</h2>
            <p>Text1</p>
        </div>
        <div className="icons-column">
            <Image source={icon2} specificClass="iconImages"/>
            <h2>Components</h2>
            <p>Text2</p>
        </div>
        <div className="icons-column" specificClass="iconImages">
            <Image source={icon3} />
            <h2>Single-Way</h2>
            <p>Text3</p>
        </div>
        <div className="icons-column" specificClass="iconImages">
            <Image source={icon4} />
            <h2>JSX</h2>
            <p>Text4</p>
        </div>
    </div>
  )
}

export default Icons
