import { useState } from 'react';

interface RequestItem {
  id: number;
  requestType: string;
  dates: string;
  duration: string;
  Reason: string;
  status: string;
}

interface FilterCriteria {
  status: string;
  type: string;
  date: string;
}

const RequestTable: React.FC<{ data: RequestItem[] }> = ({ data }) => {
  const [filters, setFilters] = useState<FilterCriteria>({ status: '', type: '', date: '' });

  const applyFilters = (item: RequestItem) => {
    return (
      (filters.status === '' || item.status === filters.status) &&
      (filters.type === '' || item.requestType === filters.type) &&
      (filters.date === '' || item.dates === filters.date)
    );
  };

  const filteredData = data.filter(applyFilters);

  return (
    <div>
      <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-[#0B0B0B] bg-[#DBE4F8] border-b border-gray-200">Request Type</th>
              <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-[#0B0B0B]  bg-[#DBE4F8] border-b border-gray-200">Dates</th>
              <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-[#0B0B0B]  bg-[#DBE4F8] border-b border-gray-200">Duration</th>
              <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-[#0B0B0B]  bg-[#DBE4F8] border-b border-gray-200">Reason</th>
              <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-[#0B0B0B]  bg-[#DBE4F8] border-b border-gray-200">Status</th>
              <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-[#0B0B0B]  bg-[#DBE4F8] border-b border-gray-200">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {filteredData.map((u) => (
              <tr key={u.id}>
                <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="">
                      <div className="text-sm font-medium leading-5 text-gray-900">{u.requestType}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                  <div className="text-sm leading-5 text-gray-900">{u.dates}</div>
                </td>
                <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                  <div className="text-sm leading-5 text-gray-900">{u.duration}</div>
                </td>
                <td className="px-6 py-4 text-sm leading-5 text-gray-900 border-b border-gray-200 whitespace-nowrap">{u.Reason}</td>
                <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                  <span className="inline-flex px-2 text-sm leading-5 flex items-center gap-2">
                    <div className={`h-3 w-3 rounded-full ${u.status === 'Approved' ? 'bg-[#2ED648]' : u.status === 'Pending' ? 'bg-[#F1C40F]' : 'bg-[#E74C3C]'}`}></div>
                    <span>{u.status}</span>
                  </span>
                </td>
                <td className="px-6 py-4 flex gap-2 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap">
                  <button className="bg-[#CFDEFE] text-[#14244B] h-[46px] w-[46px] rounded-xl flex items-center justify-center">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.66667 21.3333H4.34867L17.9973 7.68466L16.3153 6.00266L2.66667 19.6513V21.3333ZM1.87201 23.3333C1.53045 23.3333 1.24423 23.2178 1.01334 22.9867C0.782227 22.7558 0.666672 22.4695 0.666672 22.128V19.818C0.666672 19.4929 0.729116 19.183 0.854005 18.8883C0.978672 18.5937 1.15045 18.3369 1.36934 18.118L18.254 1.24099C18.4556 1.05788 18.6781 0.916434 18.9217 0.816656C19.1654 0.716656 19.421 0.666656 19.6883 0.666656C19.9557 0.666656 20.2146 0.714102 20.465 0.80899C20.7157 0.903879 20.9376 1.05477 21.1307 1.26166L22.759 2.91032C22.9659 3.10343 23.1133 3.32566 23.2013 3.57699C23.2893 3.82832 23.3333 4.07966 23.3333 4.33099C23.3333 4.59921 23.2876 4.8551 23.196 5.09866C23.1045 5.34243 22.9588 5.5651 22.759 5.76666L5.882 22.6307C5.66312 22.8495 5.40634 23.0213 5.11167 23.146C4.81701 23.2709 4.50712 23.3333 4.182 23.3333H1.87201ZM17.1417 6.85832L16.3153 6.00266L17.9973 7.68466L17.1417 6.85832Z" fill="currentColor" />
                    </svg>
                  </button>
                  <button className="bg-[#CFDEFE] text-[#14244B] h-[46px] w-[46px] rounded-xl flex items-center justify-center">
                    <svg width="20" height="14" viewBox="0 0 28 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.003 14.7693C15.5139 14.7693 16.7971 14.2406 17.8527 13.183C18.9082 12.1254 19.436 10.8412 19.436 9.33033C19.436 7.81944 18.9072 6.53622 17.8497 5.48067C16.7921 4.42511 15.5079 3.89733 13.997 3.89733C12.4861 3.89733 11.2029 4.42611 10.1473 5.48367C9.09178 6.54122 8.564 7.82544 8.564 9.33633C8.564 10.8472 9.09278 12.1304 10.1503 13.186C11.2079 14.2416 12.4921 14.7693 14.003 14.7693ZM14 12.9333C13 12.9333 12.15 12.5833 11.45 11.8833C10.75 11.1833 10.4 10.3333 10.4 9.33333C10.4 8.33333 10.75 7.48333 11.45 6.78333C12.15 6.08333 13 5.73333 14 5.73333C15 5.73333 15.85 6.08333 16.55 6.78333C17.25 7.48333 17.6 8.33333 17.6 9.33333C17.6 10.3333 17.25 11.1833 16.55 11.8833C15.85 12.5833 15 12.9333 14 12.9333ZM14 18.6667C11.1931 18.6667 8.626 17.9179 6.29867 16.4203C3.97133 14.923 2.11367 12.953 0.725668 10.5103C0.614556 10.3188 0.533334 10.1258 0.482001 9.93133C0.43089 9.73689 0.405334 9.53733 0.405334 9.33267C0.405334 9.128 0.43089 8.92867 0.482001 8.73467C0.533334 8.54067 0.614556 8.34789 0.725668 8.15633C2.11367 5.71367 3.97133 3.74367 6.29867 2.24633C8.626 0.748778 11.1931 0 14 0C16.8069 0 19.374 0.748778 21.7013 2.24633C24.0287 3.74367 25.8863 5.71367 27.2743 8.15633C27.3854 8.34789 27.4667 8.54089 27.518 8.73533C27.5691 8.92978 27.5947 9.12933 27.5947 9.334C27.5947 9.53867 27.5691 9.738 27.518 9.932C27.4667 10.126 27.3854 10.3188 27.2743 10.5103C25.8863 12.953 24.0287 14.923 21.7013 16.4203C19.374 17.9179 16.8069 18.6667 14 18.6667ZM14 16.6667C16.5111 16.6667 18.8167 16.0056 20.9167 14.6833C23.0167 13.3611 24.6222 11.5778 25.7333 9.33333C24.6222 7.08889 23.0167 5.30556 20.9167 3.98333C18.8167 2.66111 16.5111 2 14 2C11.4889 2 9.18334 2.66111 7.08333 3.98333C4.98333 5.30556 3.37778 7.08889 2.26667 9.33333C3.37778 11.5778 4.98333 13.3611 7.08333 14.6833C9.18334 16.0056 11.4889 16.6667 14 16.6667Z" fill="currentColor" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestTable;
