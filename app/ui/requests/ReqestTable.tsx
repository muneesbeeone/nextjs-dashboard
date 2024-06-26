import React, { useState, useEffect } from 'react';
import { fetchFilteredRequests } from '@/app/lib/data';
import { RequestTable } from '@/app/lib/definitions';



interface RequestTableProps {
  onView: (item: RequestTable) => void;
  onEdit: (item: RequestTable) => void;
}

const RequestsTable: React.FC<RequestTableProps> = ({ onView, onEdit }) => {
  const [data, setData] = useState<RequestTable[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchFilteredRequests();
        debugger
        setData(response);
        setLoading(false);
      } catch (error) {
        setError('Error fetching data.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-[#0B0B0B] bg-[#DBE4F8] border-b border-gray-200 cursor-pointer">
              Request Type
            </th>
            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-[#0B0B0B] bg-[#DBE4F8] border-b border-gray-200 cursor-pointer">
              Dates
            </th>
            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-[#0B0B0B] bg-[#DBE4F8] border-b border-gray-200 cursor-pointer">
              Duration
            </th>
            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-[#0B0B0B] bg-[#DBE4F8] border-b border-gray-200 cursor-pointer">
              Reason
            </th>
            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-[#0B0B0B] bg-[#DBE4F8] border-b border-gray-200 cursor-pointer">
              Status
            </th>
            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-[#0B0B0B] bg-[#DBE4F8] border-b border-gray-200">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {data.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                <div className="text-sm font-medium leading-5 text-gray-900">{item.type}</div>
              </td>
              <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                <div className="text-sm leading-5 text-gray-900">{item.date}</div>
              </td>
              <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                <div className="text-sm leading-5 text-gray-900">{item.days}</div>
              </td>
              <td className="px-6 py-4 text-sm leading-5 text-gray-900 border-b border-gray-200 whitespace-nowrap">{item.reason}</td>
              <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                <span className={`inline-flex px-2 text-sm leading-5 items-center gap-2 ${getStatusColorClass(item.status)}`}>
                  {item.status}
                </span>
              </td>
              <td className="px-6 py-4 flex gap-2 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap">
                <button onClick={() => onEdit(item)} className="bg-[#CFDEFE] text-[#14244B] h-[46px] w-[46px] rounded-xl flex items-center justify-center">
                  Edit
                </button>
                <button onClick={() => onView(item)} className="bg-[#CFDEFE] text-[#14244B] h-[46px] w-[46px] rounded-xl flex items-center justify-center">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Helper function to determine status color
const getStatusColorClass = (status: 'pending' | 'paid'): string => {
  switch (status) {
    case 'pending':
      return 'bg-[#2ED648]';
    case 'paid':
      return 'bg-[#F1C40F]';
    default:
      return 'bg-[#E74C3C]';
  }
};

export default RequestsTable;