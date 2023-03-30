## Getting Started

Install the dependencies using either of the below code blocks:

```bash
yarn
```
or 

```bash
npm install
```

Follow the steps [here](https://github.com/clarencepenz/scraper/tree/main#readme) to set up the scraper.

In the root directory of the project, create `.env.local` and add the following to it:

 ```bash
NEXT_PUBLIC_SUPABASE_URL=REPLACE_WITH_YOUR_PROJECT_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=REPLACE_WITH_YOUR_ANON_PUBLIC_KEY
 ```

 The keys are the same with the one you got [here](https://github.com/clarencepenz/scraper/tree/main#get-keys). The only difference is the variable name starting with `NEXT_PUBLIC`


Run `yarn test` 

Next, start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
