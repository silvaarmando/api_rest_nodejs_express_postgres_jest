const axios = require('axios');
test('Should test posts', async function () {
  const response = await axios({
    url: 'http://localhost:3000/posts',
    method: 'get'
  });

  const posts = response.data;
})
