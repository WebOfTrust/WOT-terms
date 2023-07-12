import React, { useEffect } from 'react';
import axios from 'axios';

function Gpt4ApiExample() {
  useEffect(() => {
    async function callGpt4Api(inputText) {
      console.log('inputText: ', inputText);
      try {
        const apiKey = process.env.OPENAI_API_KEY;
        const apiUrl = 'https://api.openai.com/v1/models/gpt-4';

        const response = await axios.post(apiUrl, {
          input: inputText
        }, {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          }
        });

        console.log("test");
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    // Call the GPT-4 API
    callGpt4Api('What would be your defintion of KERI');
  }, []);

  return (
    <div>
      <h1>GPT-4 API Example</h1>
      <p>Check the console for the API response.</p>
    </div>
  );
}

export default Gpt4ApiExample;