import { useState } from 'react';
import { DateRangePicker } from "@nextui-org/react";
const FilterDropdown: React.FC<{ openModal: () => void }> = ({ openModal }) => {
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const [typeDropdownOpen, setTypeDropdownOpen] = useState(false);
  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);
  const [selectedType, setSelectedType] = useState('Leave');
  const [selectedStatus, setSelectedStatus] = useState('Pending');
  const [dateRange, setDateRange] = useState('');

  const toggleFilterDropdown = () => {
    setFilterDropdownOpen(!filterDropdownOpen);
  };

  const toggleTypeDropdown = () => {
    setTypeDropdownOpen(!typeDropdownOpen);
  };

  const toggleStatusDropdown = () => {
    setStatusDropdownOpen(!statusDropdownOpen);
  };

  const handleTypeSelection = (type: string) => {
    setSelectedType(type);
    setTypeDropdownOpen(false);
  };

  const handleStatusSelection = (status: string) => {
    setSelectedStatus(status);
    setStatusDropdownOpen(false);
  };

  const handleDateRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateRange(e.target.value);
  };

  const handleSubmit = () => {
    // Here you can use selectedType, selectedStatus, and dateRange to filter data or perform actions
    console.log(`Type: ${selectedType}, Status: ${selectedStatus}, Date Range: ${dateRange}`);
    setFilterDropdownOpen(false); // Close the dropdown after submission
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-end py-5">
        <div className="inline-flex gap-2 mt-6 xs:mt-0">
          <div className="flex-auto flex gap-2">
            <button
              onClick={toggleFilterDropdown}
              className="px-4 py-2 text-sm flex gap-2 font-semibold text-gray-800 ring-1 ring-[#656D80] hover:ring-0 rounded-md hover:bg-gray-400"
            >
              <svg width="17.5" height="17.5" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.99975 17.75C8.78708 17.75 8.609 17.6781 8.4655 17.5343C8.32183 17.3906 8.25 17.2125 8.25 17V13C8.25 12.7875 8.32192 12.6094 8.46575 12.4658C8.60958 12.3219 8.78775 12.25 9.00025 12.25C9.21292 12.25 9.391 12.3219 9.5345 12.4658C9.67817 12.6094 9.75 12.7875 9.75 13V14.25H17C17.2125 14.25 17.3906 14.3219 17.5343 14.4658C17.6781 14.6096 17.75 14.7878 17.75 15.0003C17.75 15.2129 17.6781 15.391 17.5343 15.5345C17.3906 15.6782 17.2125 15.75 17 15.75H9.75V17C9.75 17.2125 9.67808 17.3906 9.53425 17.5343C9.39042 17.6781 9.21225 17.75 8.99975 17.75ZM1 15.75C0.7875 15.75 0.609417 15.6781 0.46575 15.5343C0.321917 15.3904 0.25 15.2122 0.25 14.9998C0.25 14.7871 0.321917 14.609 0.46575 14.4655C0.609417 14.3218 0.7875 14.25 1 14.25H5C5.2125 14.25 5.39058 14.3219 5.53425 14.4658C5.67808 14.6096 5.75 14.7878 5.75 15.0003C5.75 15.2129 5.67808 15.391 5.53425 15.5345C5.39058 15.6782 5.2125 15.75 5 15.75H1ZM4.99975 11.75C4.78708 11.75 4.609 11.6781 4.4655 11.5343C4.32183 11.3906 4.25 11.2125 4.25 11V9.75H1C0.7875 9.75 0.609417 9.67808 0.46575 9.53425C0.321917 9.39042 0.25 9.21225 0.25 8.99975C0.25 8.78708 0.321917 8.609 0.46575 8.4655C0.609417 8.32183 0.7875 8.25 1 8.25H4.25V7C4.25 6.7875 4.32192 6.60942 4.46575 6.46575C4.60958 6.32192 4.78775 6.25 5.00025 6.25C5.21292 6.25 5.391 6.32192 5.5345 6.46575C5.67817 6.60942 5.75 6.7875 5.75 7V11C5.75 11.2125 5.67808 11.3906 5.53425 11.5343C5.39042 11.6781 5.21225 11.75 4.99975 11.75ZM9 9.75C8.7875 9.75 8.60942 9.67808 8.46575 9.53425C8.32192 9.39042 8.25 9.21225 8.25 8.99975C8.25 8.78708 8.32192 8.609 8.46575 8.4655C8.60942 8.32183 8.7875 8.25 9 8.25H17C17.2125 8.25 17.3906 8.32192 17.5343 8.46575C17.6781 8.60958 17.75 8.78775 17.75 9.00025C17.75 9.21292 17.6781 9.391 17.5343 9.5345C17.3906 9.67817 17.2125 9.75 17 9.75H9ZM12.9998 5.75C12.7871 5.75 12.609 5.67808 12.4655 5.53425C12.3218 5.39058 12.25 5.2125 12.25 5V1C12.25 0.7875 12.3219 0.609417 12.4658 0.46575C12.6096 0.321917 12.7878 0.25 13.0003 0.25C13.2129 0.25 13.391 0.321917 13.5345 0.46575C13.6782 0.609417 13.75 0.7875 13.75 1V2.25H17C17.2125 2.25 17.3906 2.32192 17.5343 2.46575C17.6781 2.60958 17.75 2.78775 17.75 3.00025C17.75 3.21292 17.6781 3.391 17.5343 3.5345C17.3906 3.67817 17.2125 3.75 17 3.75H13.75V5C13.75 5.2125 13.6781 5.39058 13.5343 5.53425C13.3904 5.67808 13.2122 5.75 12.9998 5.75ZM1 3.75C0.7875 3.75 0.609417 3.67808 0.46575 3.53425C0.321917 3.39042 0.25 3.21225 0.25 2.99975C0.25 2.78708 0.321917 2.609 0.46575 2.4655C0.609417 2.32183 0.7875 2.25 1 2.25H9C9.2125 2.25 9.39058 2.32192 9.53425 2.46575C9.67808 2.60958 9.75 2.78775 9.75 3.00025C9.75 3.21292 9.67808 3.391 9.53425 3.5345C9.39058 3.67817 9.2125 3.75 9 3.75H1Z"
                  fill="currentColor" />
              </svg>
              <span>Filter</span>
            </button>
            <button
              onClick={openModal}
              className="px-4 flex gap-2 items-center py-2 text-sm font-semibold text-white bg-[#14244B] rounded-md hover:bg-gray-400"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.25 7.75H1.25C1.0375 7.75 0.859417 7.67808 0.71575 7.53425C0.571917 7.39042 0.5 7.21225 0.5 6.99975C0.5 6.78708 0.571917 6.609 0.71575 6.4655C0.859417 6.32183 1.0375 6.25 1.25 6.25H6.25V1.25C6.25 1.0375 6.32192 0.859417 6.46575 0.71575C6.60958 0.571917 6.78775 0.5 7.00025 0.5C7.21292 0.5 7.391 0.571917 7.5345 0.71575C7.67817 0.859417 7.75 1.0375 7.75 1.25V6.25H12.75C12.9625 6.25 13.1406 6.32192 13.2843 6.46575C13.4281 6.60958 13.5 6.78775 13.5 7.00025C13.5 7.21292 13.4281 7.391 13.2843 7.5345C13.1406 7.67817 12.9625 7.75 12.75 7.75H7.75V12.75C7.75 12.9625 7.67808 13.1406 7.53425 13.2843C7.39042 13.4281 7.21225 13.5 6.99975 13.5C6.78708 13.5 6.609 13.4281 6.4655 13.2843C6.32183 13.1406 6.25 12.9625 6.25 12.75V7.75Z"
                    fill="currentColor" />
                </svg>
              <span>Add New</span>
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Content */}
      {filterDropdownOpen && (
        <div className="absolute border bg-white max-w-[271px] border-gray-500 w-full right-0 rounded-lg max-h-select overflow-y-auto">
          <div className="text-left modal-content">
            <div className="flex items-center justify-between px-5 py-6 bg-[#CFDEFE]">
              <p className="text-base font-bold">Filter</p>
            </div>
            <div className="px-6 py-4">
              <label htmlFor="leave-type">Request Type</label>
              <div id="leave-type" className="flex-auto flex flex-col max-w-[271px]">
                <div className="relative w-full my-2">
                  <div className="bg-white p-1 flex border items-center border-[#14244B] h-[50px] rounded">
                    <span
                      className="p-1 px-2 cursor-pointer outline-none w-full text-gray-800"
                      onClick={toggleTypeDropdown}
                    >
                      {selectedType}
                    </span>
                    <div className="text-gray-300 w-8 py-1 pl-2 pr-1 flex items-center">
                      <button
                        onClick={toggleTypeDropdown}
                        className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none"
                      >
                        <i className={!typeDropdownOpen ? 'fa-chevron-down' : 'fa-chevron-up'}></i>
                      </button>
                    </div>
                  </div>
                  {typeDropdownOpen && (
                    <div
                      className="absolute border border-gray-500 top-[50px] z-40 w-full rounded max-h-select overflow-y-auto"
                    >
                      <div
                        className="cursor-pointer w-full border-[#656D80] border-b"
                        onClick={() => handleTypeSelection('Leave')}
                      >
                        <div className="flex w-full items-center p-2 pl-2 bg-white border-l-2 hover:bg-[#F4F7FE] hover:text-gray-800 hover:border-gray-600">
                          <div className="mx-2 leading-6">Leave</div>
                        </div>
                      </div>
                      <div
                        className="cursor-pointer w-full border-[#656D80] border-b"
                        onClick={() => handleTypeSelection('Work From Home')}
                      >
                        <div className="flex w-full items-center p-2 pl-2 bg-white border-l-2 hover:bg-[#F4F7FE] hover:text-gray-800 hover:border-gray-600">
                          <div className="mx-2 leading-6">Work From Home</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <label htmlFor="status">Status</label>
              <div id="status" className="flex-auto flex flex-col max-w-[271px]">
                <div className="relative w-full my-2">
                  <div className="bg-white p-1 flex border items-center border-[#14244B] h-[50px] rounded">
                    <span
                      className="p-1 px-2 cursor-pointer outline-none w-full text-gray-800"
                      onClick={toggleStatusDropdown}
                    >
                      {selectedStatus}
                    </span>
                    <div className="text-gray-300 w-8 py-1 pl-2 pr-1 flex items-center">
                      <button
                        onClick={toggleStatusDropdown}
                        className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none"
                      >
                        <i className={!statusDropdownOpen ? 'fa-chevron-down' : 'fa-chevron-up'}></i>
                      </button>
                    </div>
                  </div>
                  {statusDropdownOpen && (
                    <div
                      className="absolute border border-gray-500 top-[50px] z-40 w-full rounded max-h-select overflow-y-auto"
                    >
                      <div
                        className="cursor-pointer w-full border-[#656D80] border-b"
                        onClick={() => handleStatusSelection('Pending')}
                      >
                        <div className="flex w-full items-center p-2 pl-2 bg-white border-l-2 hover:bg-[#F4F7FE] hover:text-gray-800 hover:border-gray-600">
                          <div className="mx-2 leading-6">Pending</div>
                        </div>
                      </div>
                      <div
                        className="cursor-pointer w-full border-[#656D80] border-b"
                        onClick={() => handleStatusSelection('Approved')}
                      >
                        <div className="flex w-full items-center p-2 pl-2 bg-white border-l-2 hover:bg-[#F4F7FE] hover:text-gray-800 hover:border-gray-600">
                          <div className="mx-2 leading-6">Approved</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex-auto flex flex-col max-w-[271px]">
                <div className="relative w-full my-2">
                  <DateRangePicker
                    key="outside"
                    label="Stay duration"
                    labelPlacement="outside"
                    description="outside"
                    className="date-range-picker-custom"
                  />
                </div>
              </div>

              <div className="flex justify-start pt-2 gap-2">
                <button
                  onClick={handleSubmit}
                  className="px-4 flex items-center py-2 text-sm font-semibold text-white bg-[#14244B] rounded-md hover:bg-gray-400"
                >
                  Submit
                </button>
                <button
                  onClick={() => setFilterDropdownOpen(false)}
                  className="px-4 py-2 text-sm flex font-semibold text-gray-800 ring-1 ring-[#656D80] hover:ring-0 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
