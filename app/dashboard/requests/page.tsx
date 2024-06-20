"use client"
import { useState } from 'react';
import AddRequestModal from '@/app/ui/requests/AddRequestModal';
import FilterDropdown from '@/app/ui/requests/FilterDropdown';
import RequestTable from '@/app/ui/requests/ReqestTable';
interface RequestItem {
  id: number;
  requestType: string;
  dates: string;
  duration: string;
  Reason: string;
  status: string;
}

const mockData: RequestItem[] = [
  { id: 1, requestType: 'LOP Leave', dates: '25 to 30/05/2024', duration: '6 Days', Reason: 'Attending a family function...', status: 'Pending' },
  { id: 2, requestType: 'LOP Leave', dates: '25 to 30/05/2024', duration: '6 Days', Reason: 'Attending a family function...', status: 'Pending' }
];

const Home: React.FC = () => {
  const [data, setData] = useState<RequestItem[]>(mockData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddRequest = (newRequest: RequestItem) => {
    setData([...data, newRequest]);
  };

  return (
    <div className=" mx-auto px-4">
      <FilterDropdown openModal={openModal} />
      <RequestTable data={data} />
      <AddRequestModal isOpen={isModalOpen} onClose={closeModal} onAddRequest={handleAddRequest} />
    </div>
  );
};

export default Home;
