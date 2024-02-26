import { defineRoute, router } from "./utils/define-route.js";

let users = [ 
{ id: 1, fName: 'Anna', email: 'anna@gmail.com' },
{ id: 2, fName: 'Maria', email: 'maria@gmail.com' },
{ id: 3, fName: 'Sara', email: 'sara@gmail.com' },
{ id: 4, fName: 'Tony', email: 'tony@gmail.com' }
  
];


// GET all users
defineRoute('GET', '/users', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.end(JSON.stringify(users));
});


// GET user by ID
defineRoute('GET', '/users/:id', (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find(user => user.id === userId);
  if (user) {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify(user));
    return;
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify('User not found'));
  }
});





// Create a new user
defineRoute('POST', '/users', (req, res) => {
  const { name, email } = req.body;
  if (!name.req,body || !email.req.body) {
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 400;
      res.end(JSON.stringify({ message: 'Name and email are required' }));
      return;
  }

  const newUser = {
    id: users.length + 1,
    ...req.body
  };

  users.push(newUser);

  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 201;
  res.end(JSON.stringify(newUser));
});




// Update user by ID
defineRoute('PUT', '/users/:id', (req, res) => {
  const userId = Number(req.params.id);
  const updateUser = users.find((user) => userId === user.id);
  if (updateUser) {
    const updatedUser = req.body;
    Object.assign(updateUser, updatedUser);
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify(updateUser));
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'User not found' }));
  }
})


// Delete user by ID
defineRoute('DELETE', '/users/:id', (req, res) => {
  const userId = Number(req.params.id);
  const index = users.findIndex((user) => userId === user.id);
  if (index !== -1) {
    users.splice(index, 1);
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 204;
    res.end();
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'User not found' }));
  }
});

let posts = [
  {
    id: 1,
    destination: "Paris, France",
    description: "Explore the romantic streets of Paris, visit the Eiffel Tower, enjoy French cuisine, and experience the rich culture and history of the City of Light.",
    tips: [
      "Try authentic French pastries at local bakeries.",
      "Take a boat cruise on the Seine River for stunning views of the city.",
      "Visit the Louvre Museum to see famous artworks like the Mona Lisa."
    ],
    userId: 4,
    tags: [
      "Travel",
      "Paristravelguide"
    ]
   
  },
  {
    id: 2,
    destination: "Kyoto, Japan",
    description: "Discover the ancient capital of Japan, explore traditional temples and gardens, experience Japanese tea ceremonies, and savor delicious cuisine.",
    tips: [
      "Visit Fushimi Inari Shrine and hike through thousands of torii gates.",
      "Stroll through Arashiyama Bamboo Grove for a serene experience.",
      "Try kaiseki ryori, a traditional multi-course Japanese meal."
    ],
   userId:3,
   tags: [
    "Travel",
    "Kyototravelguide"
   ],
  },
  {
    id: 3,
    destination: "Sri Lanka",
    description: "Experience the lush landscapes, pristine beaches, ancient ruins, and vibrant culture of Sri Lanka. From exploring historic sites to encountering wildlife in national parks, Sri Lanka offers a diverse range of experiences for travelers.",
    tips: [
      "Visit Sigiriya Rock Fortress for panoramic views of the surrounding landscape.",
      "Take a safari in Yala National Park to spot elephants, leopards, and other wildlife.",
      "Relax on the beaches of Unawatuna and Mirissa for sun, sea, and sand."
    ],
    userId:1,
    tags: [
      "Travel",
      "srilankatravelguide"
    ]
  }
];

// GET all posts
defineRoute('GET', '/posts', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.end(JSON.stringify(posts));
});

// GET post by ID
defineRoute('GET', '/posts/:id', (req, res) => {
  const postId = Number(req.params.id);
  const post = posts.find((post) => postId === post.id);
  if (post) {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify(post));
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 404;
    res.end(JSON.stringify(post)({ message: 'Post not found' }));
  }
});

// Create a new post
defineRoute('POST', '/posts', (req, res) => {
  const newPost = req.body;
  const postId = posts.length > 0 ? posts[posts.length - 1].id + 1 : 1;
  newPost.id = postId;
  posts.push(newPost);
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 201;  
  res.end(JSON.stringify(newPost));
});


// Update post by ID
defineRoute('PUT', '/posts/:id', (req, res) => { 
  const postId = Number(req.params.id);
  const updatedPost = posts.find((post) => postId === post.id);
  if (updatedPost) {
    const updatedData = req.body;
    Object.assign(updatedPost, updatedData);
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify(updatedPost));
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Post not found' }));
  }
});

// Delete post by ID
defineRoute('DELETE', '/posts/:id', (req, res) => {
  const postId = Number(req.params.id);
  const index = posts.findIndex((post) => postId === post.id);
  if (index !== -1) {
    posts.splice(index, 1);
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 204; 
    res.end();
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Post not found' }));
  }
});
  

export default router;
