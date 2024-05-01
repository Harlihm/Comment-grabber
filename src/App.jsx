import React, { useEffect } from 'react';

const App = () => {
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
        identifier: 'YOUR_IDENTIFIER_HERE',
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
  }, []);

  return (
    <div>
      <h1>Fetching Data from API</h1>
    </div>
  );
};

export default App;
