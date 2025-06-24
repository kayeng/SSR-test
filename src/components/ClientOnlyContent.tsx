// src/components/ClientOnlyContent.tsx
import React, { useState, useEffect } from 'react';

interface ClientOnlyContentProps {
  children: React.ReactNode;
}

const ClientOnlyContent: React.FC<ClientOnlyContentProps> = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This effect runs only once on the client after the component mounts
    // and has been hydrated.
    setIsClient(true);
  }, []); // Empty dependency array means it runs once on mount

  if (!isClient) {
    // On the server, and before hydration on the client, render nothing.
    // This avoids a hydration mismatch.
    return null;
  }

  // Once `isClient` is true, we know we are on the client and hydrated,
  // so we can render the actual client-specific content.
  return <>{children}</>;
};

export default ClientOnlyContent;