
# always-404

A simple Express middleware that ensures every route responds with a 404 status and a "Page Not Found" message. Perfect for pranks, debugging, or just being extra unhelpful. 😄

## Installation

Install the package via npm:

```bash
npm install always-404
```

## Usage

Integrate the middleware into your Express application:

```javascript
const express = require('express');
const always404 = require('always-404');

const app = express();

app.use(always404());

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

Now, every route in your application will respond with:

- HTTP status: `404`
- Message: `404 - Page Not Found!`

## Features

- **Guaranteed 404:** No route will ever work. Ever.
- **Minimal setup:** Just plug it into your Express app.
- **Great for pranks:** Make your friend's website unresponsive for April Fools' Day!

## API

### `always404()`

Returns an Express middleware function that intercepts all requests and responds with a 404 status code and a default message.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
