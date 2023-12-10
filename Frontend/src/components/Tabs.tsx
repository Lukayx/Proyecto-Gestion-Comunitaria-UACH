import TabsComponent from "./Tabs/TabsComponent";
import { FaRegNewspaper } from "react-icons/fa6";
import { FaPeopleRoof } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdForum } from "react-icons/md";
import Novedades from "./Novedades"
import ExcelUploader from "./Subirexcel"
import Ciudadanos from "./Ciudadanos";
import Foro from "./Foro";

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
          <Ciudadanos></Ciudadanos>
      </div>
    ),
  },
  {
    title: "Foro",
		icon: <MdForum />,
    content: (
      <div className="border-2 border-blue-400 rounded-lg p-4">
        <Foro></Foro>
      </div>
    ),
  },
];
