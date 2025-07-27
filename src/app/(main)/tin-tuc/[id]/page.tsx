'use client'

import { fetchPostDetail } from "@/lib/api";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { decodeHTMLEntities } from "@/utils/helpers";

const NewsDetailPage = () => {
  const { id } = useParams();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchPostDetail(id as string).then((data) => {
      setData(data.data);
    });
  }, [id]);

  return (
    <div className="relative flex flex-col items-center">
      <h1 className="mt-[3%] md:text-4xl font-extrabold text-[#0E99FF]">Tin tức - sự kiện</h1>
      {data && <div className="mt-[3%] w-[67.5%] aspect-[700/48] rounded-l-full rounded-r-full bg-[#0684FF] border-3 border-[#0A1199] text-white font-bold text-lg flex items-center justify-center">
          <h1>{data.title}</h1>
      </div>}

      {data && <div className="mt-[3%] px-[3%] w-full overflow-x-hidden overflow-y-scroll hide-scroll">
        <div dangerouslySetInnerHTML={{ __html: decodeHTMLEntities(data?.content) || ''}}></div>
      </div>}
    </div>
  );
};

export default NewsDetailPage;