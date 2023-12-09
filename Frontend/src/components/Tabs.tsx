import TabsComponent from "./Tabs/TabsComponent";
import { FaRegNewspaper } from "react-icons/fa6";
import { FaPeopleRoof } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdForum } from "react-icons/md";
import Novedades from "./Novedades"
import ExcelUploader from "./Subirexcel"

const TabsPage = () => {
  return (
    <div className="bg-white rounded-lg mx-4 p-4">

      <br />
 
      {/* Tabs Component */}
      <TabsComponent items={items} />
    </div>
  );
};

export default TabsPage;

const items = [
  {
    title: "Novedades",
		icon: <FaRegNewspaper/>,
    content: (
      <div className="border-2 border-blue-400 rounded-lg p-4">
				<Novedades></Novedades>
      </div>
    ),
  },
  {
    title: "Organizaciones",
		icon: <FaPeopleRoof />,
    content: (
      <div className="border-2 border-blue-400 rounded-lg p-4">
        <ExcelUploader></ExcelUploader>
      </div>
    ),
  },
  {
    title: "Personas",
		icon: <FaPeopleGroup />,
    content: (
      <div className="border-2 border-blue-400 rounded-lg p-4">
        <h1 className="text-3xl text-blue-600">Title Test 3</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          aperiam asperiores doloribus velit dolore magnam ex consectetur fugit
          earum illum qui similique architecto dolorum, minima enim quidem
          voluptatibus at nulla deleniti harum! Totam, mollitia quos voluptatem
          deleniti provident obcaecati rerum. amet consectetur adipisicing elit.
          Dolores aperiam asperiores doloribus velit dolore magnam ex
          consectetur fugit earum illum qui similiq
        </p>
      </div>
    ),
  },
  {
    title: "Foro",
		icon: <MdForum />,
    content: (
      <div className="border-2 border-blue-400 rounded-lg p-4">
        <h1 className="text-3xl text-blue-600">Title Test 4</h1>
        <p>
          Lorem ipsum dolor sit ue architecto dolorum, minima enim quidem
          voluptatibus at nulla deleniti harum! Totam, mollitia quos voluptatem
          deleniti provident obcaecati rerum.
        </p>
      </div>
    ),
  },
];
