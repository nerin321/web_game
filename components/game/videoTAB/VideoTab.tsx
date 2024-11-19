"use client";
import React, { useState } from "react";
// interface tabInfo {
//   video: string;
//   requiments: string[];
// }
// const VideoTab: React.FC<tabInfo> = (video, requiments) => {

const tabProps = {
  video:
    "https://www.youtube.com/watch?v=jk7LbXUpmz0&list=RDjk7LbXUpmz0&start_radio=1&rv=jk7LbXUpmz0https://www.youtube.com/live/oo9QH6ui95M?si=IJ945n6DLxQe4ii-",
  requirements: [
    "Yêu cầu vi xử lý và hệ điều hành đều chạy 64-bit",
    "HĐH: Windows10 64bit",
    "Bộ xử lý: Intel(R) Core(TM) i3-8100",
    "Bộ nhớ: 8 GB RAM",
    "Đồ họa: NVIDIA GeForce GTX 1060",
    "Lưu trữ: 26 GB chỗ trống khả dụng",
  ],
};

const VideoTab = () => {
  const [tab, setTab] = useState(true);

  return (
    <div className="border bg-white rounded-lg overflow-hidden">
      <div className="grid grid-cols-2 text-xs text-white">
        <button
          onClick={() => setTab(true)}
          className={`py-2 uppercase font-semibold ${
            tab == true ? "bg-secondry" : "bg-primary"
          }`}
        >
          Video trailer và gameplay
        </button>
        <button
          onClick={() => setTab(false)}
          className={`py-2 uppercase font-semibold ${
            tab == false ? "bg-secondry" : "bg-primary"
          }`}
        >
          system requirements
        </button>
      </div>
      <div className="px-5 py-2.5">
        {tab ? (
          <div>
            <video controls className="w-full">
              <source src="/video/videoTest.mp4" type="video/mp4" />
            </video>
          </div>
        ) : (
          <div className="space-y-6 text-base">
            <p className="text-lg uppercase font-bold">Tối thiểu :</p>
            <ul className="list-disc pl-10">
              {tabProps.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoTab;
