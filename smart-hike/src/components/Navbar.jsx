import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    navigate("/");
  };

  return (
    <div className="bg-green-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Smart Hike</h1>

      <button
        onClick={handleLogout}
        className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;
