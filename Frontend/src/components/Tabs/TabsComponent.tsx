import React, { useState, useEffect, useRef, ReactElement } from "react";

interface TabItem {
  icon: ReactElement;
  title: string;
  content: ReactElement;
}

interface TabsComponentProps {
  items: TabItem[];
}

const TabsComponent: React.FC<TabsComponentProps> = ({ items }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const firstBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (firstBtnRef && firstBtnRef.current) {
      firstBtnRef.current.focus();
    }
  }, []);

  return (
    <div className="bg-sky-100 flex justify-center items-center py-12">
      <div className="w-xl mx-4 flex flex-col gap-y-2 w-full">
        <div className="bg-[#ADD1B9] p-1  rounded-xl flex justify-between items-center gap-x-2 font-bold text-white">
          {items.map((item, index) => (
            <button
              ref={index === 0 ? firstBtnRef : null}
              key={index}
              onClick={() => setSelectedTab(index)}
              className={`outline-none w-full p-2 hover:bg-blue-300 rounded-xl text-cneter focus:ring-2 focus:bg-white focus:text-blue-600 ${
                selectedTab === index ? "ring-2 bg-white text-blue-600" : ""
              } `}
            >
              {item.icon}
              {item.title}
            </button>
          ))}
        </div>

        <div className="bg-white p-2 rounded-xl">
          {items.map((item, index) => (
            <div className={`${selectedTab === index ? "" : "hidden"}`}>
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabsComponent;