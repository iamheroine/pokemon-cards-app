"use client"

interface GlobalErrorProps {
  error: Error;
}

const GlobalError: React.FC<GlobalErrorProps> = ({ error }) => {
  return (
    <div>
      <h2>Error</h2>
      <p>{error.message}</p>
    </div>
  );
};

export default GlobalError;
