"use client"

interface GlobalErrorProps {
  error: string;
}

const GlobalError: React.FC<GlobalErrorProps> = ({ error }) => {
  return (
    <div>
      <h2>Error</h2>
      <p>{error}</p>
    </div>
  );
};

export default GlobalError;
