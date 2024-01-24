import Footer from "../ui/footer/page";
import Navbar from "../ui/navbar/navbar";
import Sidebar from "../ui/sidebar/sidebar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="p-4 lg:ml-64">
        <div className="p-4 rounded-lg mt-14">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
