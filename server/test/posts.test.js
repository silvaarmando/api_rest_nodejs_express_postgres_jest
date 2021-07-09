const axios = require('axios');
test('Should test posts', async function () {
  const response = await axios({
    url: 'http://localhost:3000/posts',
    method: 'get',
  });

  const posts = response.data;

  expect(posts).toHaveLength(5);

  const [firstPost] = posts;

  expect(firstPost.id).toBe(1);

  expect(firstPost.title).toBe('REST API: Métodos');
})
