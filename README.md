# LambdaTest Assignment

Implemented automated test cases using Playwright and JavaScript.

Scenarios Covered:

1. Search iPhone on Amazon, capture price and validate product navigation.
2. Search Samsung Galaxy on Amazon, capture price and validate product navigation.

Parallel execution configured using 2 workers.

How to run:
npm install
npx playwright test

Note:
Product navigation is validated after search while printing product prices. This approach was used to keep tests stable against dynamic product/cart behavior.
