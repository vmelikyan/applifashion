# 🛍 Applitools Holiday Shopping Hackathon Submission

## ⚙️ Installation/setup

1. 🤖 Clone repo
  
   ```sh
   git clone https://github.com/vmelikyan/applifashion.git
   ```

2. 🛠  Install dependencies
  
    with `yarn`

   ```sh
    yarn
   ```

      or with `npm`
  
    ```sh
    npm i
    ```

3. 🚀 Run the test (update the api key)

    ```sh
    APPLITOOLS_API_KEY=<your_api_key> yarn test  
    ```

## 🔧 Test configuration

1. 🎯 To target different environments/pages (e.g. v1, dev-branch, master)

    | Environment | Page                      |
    |-------------|---------------------------|
    | v1          | tlcHackathonMasterV1.html |
    | dev-branch  | tlcHackathonDev.html      |
    | master      | tlcHackathonMasterV2.html |

    update the `browser.url()` in `specs/test.js` with the desired page from the above table.
2. 🎉 run `yarn test`
3. Sit back and 🍻
