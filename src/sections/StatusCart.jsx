/* eslint-disable react/prop-types */
function StatusCart(props) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
        <div className={`${props.bgColor} px-4 py-5 font-inter font-medium text-2xl text-white flex justify-between mb-6`}>
            <span>Active Token</span>
            <span>5</span>
        </div>
        <ul>
            <li className="flex p-3 bg-[#EEEEEE] rounded-md mx-4 mb-3">
                <div>
                    <p className="font-medium font-inter text-xl text-[#00BD56]">Ahmad Maimun</p>
                    <span>01616025832</span>
                </div>
                <button className={`${props.bgColor} font-inter font-medium text-lg text-white ml-auto px-3 rounded-[5px]`}>Token No: 01</button>
            </li>
        </ul>
    </div>
  )
}

export default StatusCart