import React from 'react';
import { Button } from '../button';
import CustomButton from '../customButton';
interface RequestItem {
    id: number;
    requestType: string;
    dates: string;
    duration: string;
    Reason: string;
    status: string;
  }
interface ViewRequestModalProps {
    isOpen: boolean;
    onClose: () => void;
    request: RequestItem | null;
}

const ViewRequestModal: React.FC<ViewRequestModalProps> = ({ isOpen, onClose, request }) => {
    if (!isOpen || !request) {
        return null;
    }

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
                <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                    <div className="bg-[#CFDEFE] px-5 py-6 flex items-center justify-between">
                        <p className="text-base font-bold">View Request</p>
                    </div>
                    <div className="px-6 py-4 text-medium text-left">
                        <div className='flex justify-between items-center py-3 border-b-1 border-[#656D80]'>
                            <p><span className="text-[#656D80] font-normal">Leave type :</span> {request.requestType}</p>
                            <p className="flex gap-2 items-center"><div className={`h-3 w-3 rounded-full ${request.status === 'Approved' ? 'bg-[#2ED648]' : request.status === 'Pending' ? 'bg-[#F1C40F]' : 'bg-[#E74C3C]'}`}></div>{request.status}</p>
                        </div>
                        <div className='flex justify-between py-3 border-b-1 border-[#656D80]'>
                        <div className='flex flex-col'><span>Dates</span> <span>{request.dates}</span></div>
                        <div className='flex flex-col text-right'><span>Duration</span> <span>{request.duration}</span></div>
                        </div>
                        <div className="flex flex-col py-3"><span>Comments</span><span className="ring-1 rounded-lg mt-3 ring-[#656D80] p-5">{request.Reason}</span></div>
                        <div className="flex justify-end w-full">
                        <CustomButton onClick={onClose} text="Close" primary={true} fill={true} border={false} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewRequestModal;
