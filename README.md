# GG-Modul-1.2
The provided code represents an exercise from Module 1.2 of the Generasi Gigih program

Here's the documentation for the provided code that explains the concept of promises and async functions in JavaScript:

```javascript
// Assumed Song Schema with the following format:
// { title: "song title", artists: [{ name: "artist name 1" }], duration: 200 }

// Creating a songSchema object
const songSchema = {
  title: 'song title',
  artists: [{ name: 'artist name 1' }],
  duration: 200,
};

// Converting songSchema to JSON format to imitate API data
const SongSchemaJson = JSON.stringify(songSchema);

// Function to simulate a fake asynchronous request
const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    // Simulating random request time
    const chance = Math.random();
    setTimeout(() => {
      // Resolving the promise with 20% chance
      if (chance < 0.2) {
        resolve(SongSchemaJson);
      } else {
        reject('Request Failed');
      }
    }, 2000);
  });
};

// Using Promises to handle the fakeRequest
fakeRequest('promise')
  .then((data) => {
    const response = data;
    return JSON.parse(response); 
  })
  .then((data) => {
    console.log('RESOLVED', data); 
  })
  .catch((error) => {
    console.log('REJECTED', error); 
  });

// Using Async/Await to handle the fakeRequest
const printSongAsync = async () => {
  try {
    const response = await fakeRequest('async');
    const song = JSON.parse(response); 
    console.log('RESOLVED', song); 
  } catch (error) {
    console.log('REJECTED', error);
  }
};
```

Explanation:
- The code demonstrates the usage of promises and async/await to handle asynchronous operations in JavaScript.
- The `fakeRequest` function simulates an asynchronous request that returns a promise.
- The `fakeRequest` function has a 20% chance of resolving or rejecting the promise based on the value of `chance`.
- The `fakeRequest` function returns a promise that resolves with the `SongSchemaJson` in case of a successful request, or rejects with an error message if the request fails.
- Using promises, the `fakeRequest` is called with the `'promise'` argument. The `.then()` method is used to handle the resolved promise by parsing the JSON response and logging the result. If the promise is rejected, the `.catch()` method is used to handle the error and log the rejection message.
- Using async/await, the `printSongAsync` function is defined as an asynchronous function. It calls the `fakeRequest` function with the `'async'` argument using the `await` keyword. The response is then parsed into a JSON object, and the result is logged if the promise is resolved. If the promise is rejected, the error is caught and logged using the `try...catch` block.

This code demonstrates how promises and async/await can be used to handle asynchronous operations in JavaScript, providing a more readable and structured approach to deal with asynchronous code execution.
