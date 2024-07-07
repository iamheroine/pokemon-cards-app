const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h2 className="text-xl mb-4">Loading...</h2>
        <div className="loading loading-spinner text-info"></div>
      </div>
    </div>
  );
};

export default Loading;
