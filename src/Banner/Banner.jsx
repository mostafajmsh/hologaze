import RightSec from "./RightSec/RightSec"
import LeftSec from "./LeftSec/LeftSec"

export default function Banner() {
    return(
        <div className="flex flex-col md:flex-row justify-center z-50">
            <RightSec />
            <LeftSec />
        </div>
    )
}