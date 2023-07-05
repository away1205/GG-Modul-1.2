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