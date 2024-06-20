import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface AddRequestModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAddRequest: (newRequest: RequestItem) => void;
}

interface RequestItem {
    id: number;
    requestType: string;
    dates: string;
    duration: string;
    Reason: string;
    status: string;
}

const AddRequestModal: React.FC<AddRequestModalProps> = ({ isOpen, onClose, onAddRequest }) => {
    const [requestType, setRequestType] = useState('Leave');
    const [duration, setDuration] = useState('Single Day');
    const [date, setDate] = useState<Date | null>(null);
    const [comments, setComments] = useState('');
    const [typeDropdownOpen, setTypeDropdownOpen] = useState(false);
    const [daysDropdownOpen, setDaysDropdownOpen] = useState(false);

    const handleAddRequest = () => {
        onAddRequest({
            id: Date.now(),
            requestType,
            dates: date ? date.toISOString().split('T')[0] : '',
            duration,
            Reason: comments,
            status: 'Pending',
        });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
                <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                    <div className="bg-[#CFDEFE] px-5 py-6 flex items-center justify-between">
                        <p className="text-base font-bold">Create a New Request</p>
                    </div>
                    <div className="px-6 py-4 text-left">
                        <label className="block">Request Type</label>
                        <div className="relative my-2 max-w-[271px]">
                            <div className="bg-white p-1 flex items-center border border-[#14244B] h-[50px] rounded cursor-pointer" onClick={() => setTypeDropdownOpen(!typeDropdownOpen)}>
                                <span className="p-1 px-2 w-full text-gray-800">{requestType}</span>
                                <div className="text-gray-300 w-8 py-1 pl-2 pr-1 flex items-center">
                                    <i className={`fa-solid text-[#14244B] ${typeDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                                </div>
                            </div>
                            {typeDropdownOpen && (
                                <div className="absolute border border-gray-500 top-[50px] z-40 w-full rounded max-h-select overflow-y-auto bg-white">
                                    <div className="cursor-pointer w-full border-b border-[#656D80]" onClick={() => { setRequestType('Leave'); setTypeDropdownOpen(false); }}>
                                        <div className="flex items-center p-2 hover:bg-[#F4F7FE] hover:text-gray-800">
                                            <div className="mx-2 leading-6">Leave</div>
                                        </div>
                                    </div>
                                    <div className="cursor-pointer w-full border-b border-[#656D80]" onClick={() => { setRequestType('Work From Home'); setTypeDropdownOpen(false); }}>
                                        <div className="flex items-center p-2 hover:bg-[#F4F7FE] hover:text-gray-800">
                                            <div className="mx-2 leading-6">Work From Home</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <label className="block">No: days</label>
                        <div className="relative my-2 max-w-[271px]">
                            <div className="bg-white p-1 flex items-center border border-[#14244B] h-[50px] rounded cursor-pointer" onClick={() => setDaysDropdownOpen(!daysDropdownOpen)}>
                                <span className="p-1 px-2 w-full text-gray-800">{duration}</span>
                                <div className="text-gray-300 w-8 py-1 pl-2 pr-1 flex items-center">
                                    <i className={`fa-solid text-[#14244B] ${daysDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                                </div>
                            </div>
                            {daysDropdownOpen && (
                                <div className="absolute border border-gray-500 top-[50px] z-40 w-full rounded max-h-select overflow-y-auto bg-white">
                                    <div className="cursor-pointer w-full border-b border-[#656D80]" onClick={() => { setDuration('Single Day'); setDaysDropdownOpen(false); }}>
                                        <div className="flex items-center p-2 hover:bg-[#F4F7FE] hover:text-gray-800">
                                            <div className="mx-2 leading-6">Single Day</div>
                                        </div>
                                    </div>
                                    <div className="cursor-pointer w-full border-b border-[#656D80]" onClick={() => { setDuration('Multiple Days'); setDaysDropdownOpen(false); }}>
                                        <div className="flex items-center p-2 hover:bg-[#F4F7FE] hover:text-gray-800">
                                            <div className="mx-2 leading-6">Multiple Days</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <label className="block">Select date</label>
                        <div className="relative my-2 max-w-[271px]">
                            <div className="flex items-center border border-[#14244B] bg-white rounded-md">
                                <DatePicker
                                    selected={date}
                                    onChange={(date: Date | null) => setDate(date)}
                                    minDate={new Date()}
                                    className="flex-grow h-11 bg-transparent border-none outline-none pl-3"
                                />
                                <i className="fas fa-calendar-alt text-[#14244B] mr-2"></i>
                            </div>
                        </div>

                        <label className="block">Comments</label>
                        <div className="relative my-2">
                            <textarea
                                placeholder="Comments"
                                value={comments}
                                onChange={(e) => setComments(e.target.value)}
                                className="w-full h-[110px] p-2 border border-[#14244B] bg-white rounded"
                            />
                        </div>

                        <div className="flex justify-start pt-2 gap-2">
                            <button
                                onClick={handleAddRequest}
                                className="px-4 flex items-center py-2 text-sm font-semibold text-white bg-[#14244B] rounded-md hover:bg-gray-400"
                            >
                                Submit
                            </button>
                            <button
                                onClick={onClose}
                                className="px-4 py-2 text-sm flex font-semibold text-gray-800 ring-1 ring-[#656D80] hover:ring-0 rounded-md hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddRequestModal;
