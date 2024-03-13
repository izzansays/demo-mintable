# Demo Mintable

Assignment for Mintable, a React app for a marketplace to buy and sell NFTs.

## Integration with alchemy-sdk

Data is retrieved via alchemy's SDK and APIs to view an address and all the NFTs associated with it.

## React and Vite

As Next JS data fetching doesn't allow for undefined in the response, I have used React and Vite instead. Each collection is on its own subdomain and clicking on a single NFT will lead to a new page for that token.

## Authentication with Clerk

Authentication is handled by Clerk. Sign in details are as below.

```json
Email: test@example.com
Password: demomintable
```

On Sign In, the user profile avatar will be shown. Clicking on it and selecting the account will link to the user page where the user would be able to view their NFTs in their wallet.

## Missing features due to time constraints

- Pagination/Fetching more data from API
- Brand deals/offers
