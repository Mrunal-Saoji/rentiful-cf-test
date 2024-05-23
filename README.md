## Setup:

1. Clone this repository.
2. Install dependencies: npm install (or yarn install)

## Example Usage (using Postman):

1. Send a message to the queue:
   POST request to http://localhost:8000/toQueue
2. Body: Your message content (e.g., {"message": "Hello, world!"})
3. Response: {"msg": "Success"}


