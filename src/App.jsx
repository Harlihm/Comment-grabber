import React, { useEffect, useState } from 'react';

const App = () => {
  const [identifier, setIdentifier] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          api_key: 'NEYNAR_API_DOCS'
        }
      };

      const params = new URLSearchParams({
        identifier: identifier,
        type: 'url', // or 'hash' depending on your requirement
        reply_depth: 2,
        include_chronological_parent_casts: false
      });

      const url = `https://api.neynar.com/v2/farcaster/cast/conversation?${params}`;

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [identifier]);

  const handleInputChange = (event) => {
    setIdentifier(event.target.value);
  };

  return (
    <div>
      <h1>Fetching Data from API</h1>
      <input type="text" value={identifier} onChange={handleInputChange} placeholder="Enter Identifier" />
    </div>
  );
};

export default App;
