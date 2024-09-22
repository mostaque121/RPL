'use client';

import { SessionProvider } from 'next-auth/react';
import PropTypes from 'prop-types'; // For prop type validation

// Define the ClientSessionProvider component
const ClientSessionProvider = ({ children }) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
};

// Define prop types for the component
ClientSessionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ClientSessionProvider;
