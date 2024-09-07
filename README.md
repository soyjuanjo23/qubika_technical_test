# qubika_technical_test

# solution approach
the solution has been thought to ensure the functionality of creating a category and a sub-category,
along with this solution some sections an api's have been set under test at the same time, I'll explain it below:
- create a new user as of /api/auth/register, here we can validate that the api looks healthy and can provide us an expected response
- log into the platform through the UI, here we can validate inputs such like the user input, password input and the authentication button
- I've made sure that the automation is on the correct page through a simple method called isAt()
- I've used the page object model pattern to ease the maintainable and readable of the code from other teammates
- I've used two fixtures in this solution:
    - setup: to navigate to the platform
    - pageManager: to centralize the pages call through one page class (PageManager)


# toughts 
- there are other ways to authenticate through to the platform but i think that for this test is a good approach to authenticated through the UI for the reasons mentioned previously 


# To get started
npm install 
npm install playwright
npx playwright test