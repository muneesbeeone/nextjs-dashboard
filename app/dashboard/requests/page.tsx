"use client"
import { useState } from 'react';
import AddRequestModal from '@/app/ui/requests/AddRequestModal';
import FilterDropdown from '@/app/ui/requests/FilterDropdown';
import ViewRequestModal from '@/app/ui/requests/ViewRequestModal';
import RequestsTable from '@/app/ui/requests/ReqestTable';
import { RequestTable } from '@/app/lib/definitions';



const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState<RequestTable | null>(null);

  const openModal = () => {
    setSelectedRequest(null); // Reset selectedRequest for adding a new request
    setIsModalOpen(true);
  };

  const editModalOpen = (item: RequestTable) => {
    setSelectedRequest(item);
    setIsModalOpen(true);
  };

  const viewModalOpen = (item: RequestTable) => {
    setSelectedRequest(item);
    setIsViewModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
  };

  // const handleAddRequest = (newRequest: RequestTable) => {
  //   setData([...data, newRequest]);
  //   closeModal();
  // };

  // const handleEditRequest = (updatedRequest: RequestTable) => {
  //   const updatedData = data.map(request => 
  //     request.id === updatedRequest.id ? updatedRequest : request
  //   );
  //   setData(updatedData);
  //   closeModal();
  // };

  return (
    <div className="mx-auto px-4">
      <FilterDropdown openModal={openModal} />
      <RequestsTable  onView={viewModalOpen} onEdit={editModalOpen}/>
      {/* <AddRequestModal 
        isOpen={isModalOpen} 
        onClose={closeModal}  
      /> */}
      {/* <AddRequestModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        onAddRequest={handleAddRequest}
        onEditRequest={handleEditRequest} 
        existingRequest={selectedRequest} 
      /> */}
      {/* {selectedRequest && (
        <ViewRequestModal isOpen={isViewModalOpen} onClose={closeViewModal} request={selectedRequest} />
      )} */}
    </div>
  );
};

export default Home;
