import React from 'react'

function Page() {
  return (
    <div>
    <div className =" bg-white p-4 pb-8 relative rounded-2xl">
      <div>
        <span className="text-base">Leaves and Work from home</span>
        <div className="flex flex-wrap md:flex-nowrap gap-6 mt-[12px]">
          <div className="w-full  max-w-[432px] max-h-28">
            <div className="flex items-center p-[2px] bg-gradient-to-r from-[#DACEEE] to-[#F3EBFF] rounded-xl shadow-none">
              <div
                className="flex items-center px-6 py-3 bg-gradient-to-r w-full from-[#D5BBFF] to-[#F9F7FC] rounded-xl shadow-none">
                <div className="sm:w-1/2 xl:w-1/2">
                  <h4 className="text-[32px] leading-10 font-semibold text-[#17264F]">10</h4>
                  <div className="text-[#17264F] text-sm md:text-base font-normal">Available Paid leaves</div>
                </div>
                <div className="bg-[#00000021] p-[0.5px] h-[100px]"></div>
                <div className="mx-5 sm:w-1/2 xl:w-1/2">
                  <h4 className="text-[32px] leading-10 font-semibold text-[#17264F]">12</h4>
                  <div className="text-[#17264F] text-sm md:text-base font-normal">Total Paid leaves</div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full w-full  max-w-[507px] max-h-28">
            <div className="flex items-center p-[2px] bg-gradient-to-r from-[#CEE1EE] to-[#F7FAFC] rounded-xl shadow-none">
              <div
                className="flex items-center px-5 py-3 bg-gradient-to-r w-full from-[#C3E5FF] to-[#F7FAFC] rounded-xl shadow-none">
                <div className=" sm:w-1/2 xl:w-1/2">
                  <h4 className="text-[32px] leading-10 font-semibold text-[#17264F]">5</h4>
                  <div className="text-[#17264F] text-sm md:text-base font-normal">Available Work From Home</div>
                </div>
                <div className="bg-[#00000021] p-[0.5px] h-[100px]"></div>
                <div className="ml-5 sm:w-1/2 xl:w-1/2">
                  <h4 className="text-[32px] leading-10 font-semibold text-[#17264F]">9</h4>
                  <div className="text-[#17264F] text-sm md:text-base font-normal">Total Work From Home</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Page