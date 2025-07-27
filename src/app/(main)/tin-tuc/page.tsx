'use client'

import { useEffect, useState } from "react";
import { fetchPosts } from '@/lib/api';
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const title : {
  type: string,
  name: string,
}[] = [
  {
    type: "NEWS",
    name: "Tin Tức",
  },
  {
    type: "EVENT",
    name: "Sự Kiện",
  },
  {
    type: "FEATURE",
    name: "Tính Năng",
  },
  {
    type: "INSTRUCTION",
    name: "Hướng Dẫn",
  },
]

const NewsPage = () => {
  const [activeItemTab, setActiveItemTab] = useState<string>(title[0].type);
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6; // Adjust as needed
  const [totalPages, setTotalPages] = useState<number>(1);
  const router = useRouter();
  
  useEffect(() => {
    // Check if the active tab is one of the supported types
    const supportedTypes = ['NEWS', 'EVENT', 'FEATURE', 'INSTRUCTION'];
    if (supportedTypes.includes(activeItemTab)) {
      setLoading(true);
      fetchPosts(activeItemTab as unknown as 'NEWS' | 'EVENT', (currentPage - 1) * itemsPerPage, itemsPerPage)
        .then((data) => {
          setData(data.data);
          const totalCount = data.extraData.count;
          const totalPages = Math.ceil(totalCount / itemsPerPage);
          setTotalPages(totalPages);
        })
        .catch((error) => {
          console.error('Error fetching posts:', error);
          setData([]);
          setTotalPages(1);
        })
        .finally(() => setLoading(false));
    }
  }, [activeItemTab, currentPage]);


  return (
    <div className="relative flex flex-col items-center">
      <h1 className="mt-[3%] md:text-4xl font-extrabold text-[#0E99FF]">Tin tức - sự kiện</h1>
      <div className="mt-[3%] w-[58.3%] aspect-[700/48] grid grid-cols-4 gap-[1%]">
        {Object.values(title).map((item, idx) => (
          <button key={idx} className={`px-2 py-1 rounded-full font-bold text-sm md:text-xl transition border-3
          flex justify-center items-center border-[#0A0F99]
          ${activeItemTab === item.type ? "bg-[linear-gradient(180deg,_#00B3FF_36.06%,_#0073FF_63.94%)] shadow-[inset_0px_5px_2px_#9BE9FF,_inset_0px_-5px_2px_rgba(0, 77, 255, 0.9)] text-white" : "bg-white text-[#0E99FF] hover:bg-yellow-300 hover:cursor-pointer hover:scale-105"}`} 
          onClick={() => setActiveItemTab(item.type)}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="w-full px-[3%] mt-[3%]">
        {loading ? <div className="w-full mb-[3%] flex justify-center items-center">
          <span className="text-xl font-bold text-[#0E99FF]">Đang tải dữ liệu...</span>
        </div> : 
        data.length > 0 ? <div className="w-full flex flex-col">
          {data.map((item, idx) => (
            <div key={item.postId || idx} className="flex w-full bg-transparent mb-[3%] gap-[2%]">
              {/* Thumbnail */}
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-[37.11%] aspect-[5/3] object-cover shadow-lg"
              />
              {/* Content */}
              <div className="flex flex-col justify-between">
                <div className="w-full flex flex-col gap-4">
                  {/* Label Bar */}
                  <div className="w-full rounded-r-full bg-[#DBF0FF] font-extrabold text-lg text-[#0E0F10] hover:cursor-pointer hover:text-[#0E99FF] transition-all duration-100" onClick={() => router.push(`/tin-tuc/${item.postId}`)}>
                    {item.title}
                  </div>
                  <div className="w-full text-lg text-[#202020]">
                    {item.description}
                  </div>
                </div>
                {/* Button */}
                <div className="w-full flex justify-between items-center">
                  <span className="text-md text-[#202020]">
                    {new Date(item.time).toLocaleDateString('vi-VN', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric'
                    })}
                  </span>
                  <button className="bg-gradient-to-b from-[#AEE6FF] to-[#0E99FF] text-white font-bold px-8 py-2 rounded-full shadow-md hover:brightness-105 hover:cursor-pointer hover:scale-105 transition-all duration-100">
                    Xem Thêm
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div> : 
        <div className="w-full flex justify-center items-center">
          <span className="text-2xl font-bold text-[#0E99FF]">Không có dữ liệu</span>
        </div>}
      </div>

      {/* Pagination */}
      <div className="w-full flex justify-center items-center gap-2 select-none">
        {/* Left Arrow */}
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className={`p-0.5 rounded transition ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'}`}
        >
          <FaAnglesLeft className="text-[#0D99FF] text-3xl font-extrabold hover:cursor-pointer hover:scale-110 hover:brightness-105 hover:text-[#0E99FF] transition-all duration-100" />
        </button>
                 {/* Page Numbers */}
         {(() => {
           const pages = [];
           const showPages = 2; // Number of pages to show on each side
           
           // Always show first page
           pages.push(1);
           
           // Calculate start and end of visible range
           const start = Math.max(2, currentPage - showPages);
           const end = Math.min(totalPages - 1, currentPage + showPages);
           
           // Add ellipsis after first page if there's a gap
           if (start > 2) {
             pages.push('...');
           }
           
           // Add pages in the middle range
           for (let i = start; i <= end; i++) {
             if (i !== 1 && i !== totalPages) {
               pages.push(i);
             }
           }
           
           // Add ellipsis before last page if there's a gap
           if (end < totalPages - 1) {
             pages.push('...');
           }
           
           // Always show last page (if different from first)
           if (totalPages > 1) {
             pages.push(totalPages);
           }
           
           return pages.map((page, idx) => (
             <button
               key={idx}
               onClick={() => typeof page === 'number' && setCurrentPage(page)}
               disabled={page === '...'}
               className={`w-[4%] aspect-square flex items-center justify-center rounded text-lg font-bold transition
                 ${page === '...' ? 'cursor-default' : 'cursor-pointer'}
                 ${currentPage === page ? 'bg-[#0D99FF] text-white' : 'bg-[#C3E6FF] text-white/70 hover:bg-[#0E99FF]/80'}
               `}
             >
               {page}
             </button>
           ));
         })()}
        {/* Right Arrow */}
        <button
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className={`p-0.5 rounded transition ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'}`}
        >
          <FaAnglesRight className="text-[#0D99FF] text-3xl font-extrabold hover:cursor-pointer hover:scale-110 hover:brightness-105 hover:text-[#0E99FF] transition-all duration-100" />
        </button>
      </div>
    </div>
  );
};

export default NewsPage;