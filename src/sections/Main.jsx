import FormArea from "./FormArea"
import StatusArea from "./StatusArea"

function Main() {
  return (
    <div className="bg-[#F9F9F9]">
      <div className="container w-11/12 mx-auto min-h-screen">
        <h2 className="font-inter font-medium text-3xl text-black text-center pt-12 mb-7">Token Status</h2>
        <div className="w-11/12 mx-auto grid grid-cols-2 gap-4">
            <FormArea />
            <StatusArea />
        </div>
    </div>
    </div>
  )
}

export default Main