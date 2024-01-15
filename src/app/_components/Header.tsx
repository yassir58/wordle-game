import { getServerSession } from "next-auth";
import GameNavbar from './GameNavbar'
interface props {}
const Header: React.FC<props> =  async ({}) => {

const session = await getServerSession ();

console.log (session)
  return (
    <div className="w-90% flex items-center justify-center py-2">
      <GameNavbar />
    </div>
  );
};

export default Header