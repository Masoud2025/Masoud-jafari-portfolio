// app/ClientLogger.js
'use client'; // This component will run on the client side

import { useEffect } from 'react';

const customLog = message => {
  console.log(
    `%c${message}`,
    'color: #00ff00; font-size: 40px; font-weight: bold; background-color: #000; padding: 50px; border-radius: 5px;',
  );
};

const ClientLogger = () => {
  useEffect(() => {
    customLog('MASOUD JAFARI SOFTWARE ENGINEER🚀');
  }, []);

  return null; // This component does not render anything
};

export default ClientLogger;
