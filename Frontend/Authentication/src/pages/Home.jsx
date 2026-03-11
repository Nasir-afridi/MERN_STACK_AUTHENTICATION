const Home = ({ user }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome, {user?.username}!
        </h1>
        <p className="text-gray-500">{user?.email}</p>
      </div>
    </div>
  );
};

export default Home;
