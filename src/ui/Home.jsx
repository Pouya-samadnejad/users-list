import UpperSection from "../components/UpperSection";
import UserTable from "../components/UserTable";
import { TableProvider } from "../contexts/TableContext";

function Home() {
  return (
    <div className="mx-11">
      <TableProvider>
        <UpperSection />
        <UserTable />
      </TableProvider>
    </div>
  );
}
export default Home;
