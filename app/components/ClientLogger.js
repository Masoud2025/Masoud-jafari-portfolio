// app/ClientLogger.js
'use client'; // This component will run on the client side

import { useEffect } from 'react';

const customLog = message => {
  console.log(
    `%c${message}`,
    'color: #00ff00; font-size: 20px; font-weight: bold; background-color: #000; padding: 5px; border-radius: 5px;',
  );
};

const ClientLogger = () => {
  useEffect(() => {
    customLog('MASOUD JAFARI SOFTWARE ENGINEER PORTFOLIO 🚀');
  }, []);

  return null; // This component does not render anything
};

export default ClientLogger;
