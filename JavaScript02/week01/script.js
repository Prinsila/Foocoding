// task 01
console.log('task - 01');

// Declare an array with book titles
const bookTitles = [
  'harry_potter_chamber_secrets',
  'lord_of_the_rings_fellowship_ring',
  'game_of_thrones',
  'pride_and_prejudice'
];

// Output the array to the console for debugging
console.log(bookTitles);

// Object containing information for each book
const booksInfo = {
  harry_potter_chamber_secrets: {
    title: 'Harry Potter and the Chamber of Secrets',
    language: 'English',
    author: 'J.K. Rowling'
  },
  lord_of_the_rings_fellowship_ring: {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    language: 'English',
    author: 'J.R.R. Tolkien'
  },
  game_of_thrones: {
    title: 'A Game of Thrones',
    language: 'English',
    author: 'George R.R. Martin'
  },
    pride_and_prejudice: {
        title: 'pride and prejudice',
        language: 'English',
        author: 'jane austen'
      }
  };


// Object containing paths to book covers
const bookCovers = {
  harry_potter_chamber_secrets: "\img\\harry potter.jpg",
  lord_of_the_rings_fellowship_ring: './img/lord of the ring.jpg',
  game_of_thrones: './img/game of thrones.jpg',
  pride_and_prejudice: './img/1885.png'
};

// Function to generate a ul with li elements for each book ID
function generateBookList() {
  const ul = document.createElement('ul');

  // Loop through book titles and create li elements
  for (const bookId of bookTitles) {
    const bookInfo = booksInfo[bookId];

    // Check if bookInfo exists before creating li
    if (bookInfo) {
      const li = document.createElement('li');
      li.textContent = bookInfo.title;

      // Create HTML elements for each piece of info
      const titleHeading = document.createElement('h2');
      titleHeading.textContent = bookInfo.title;

      const languageParagraph = document.createElement('p');
      languageParagraph.textContent = `Language: ${bookInfo.language}`;

      const authorParagraph = document.createElement('p');
      authorParagraph.textContent = `Author: ${bookInfo.author}`;

      // Append elements to li
      li.appendChild(titleHeading);
      li.appendChild(languageParagraph);
      li.appendChild(authorParagraph);

      // Append li to ul
      ul.appendChild(li);
    }
  }

  // Append the ul to the body
  document.body.appendChild(ul);
}

// Call the function to generate and display the book list
generateBookList();


