## Getting Started

I used Node version 18.18.2 to develop this project.

First, create a ".env" file in the root directory and fill in the correct values using .env.example as a template.

Then install the dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev

```

## Testing

You can run the tests using the following commands:

```bash
npm run test
```

or

```bash
npm run test:watch
```

## Further improvements

- Could have used typescript for better type checking instead of regular javascript, but I chose Javascript for quicker development and to avoid spending too much time with type checking issues.
- Perhaps populate the the website's title and description with some content from the API but at the same time its better to keep the website's title and description static in case the API is down.
- Ran into an issue with installing eslint-plugin-jest so I had to disable the eslint rule for jest. It would have been preferable to have the eslint rule enabled.
