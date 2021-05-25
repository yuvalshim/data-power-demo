import { createGlobalStyle } from "styled-components";

export type Sizes = "xs" | "sm" | "md" | "xl" | "xxl";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Barlow:300,400,500,700');
 
    :root {
      --color-primary: #4a148c;
      --color-primary-100: rgb(106, 27, 154);

      --color-secondary: #091547;
      --color-secondary-100: #12296D;
      --color-secondary-900: #0d1a52;

      --color-success: #00a699;
      --color-error: #F61515;
      --color-warning: #FFCF00;

      --color-background: #F0F0F0;

      --color-gray-100: hsl(225deg, 25%, 95%);
      --color-gray-200: hsl(225deg, 16%, 90%);
      --color-gray-300: hsl(225deg, 8%, 80%);
      --color-gray-400: hsl(225deg, 8%, 70%);
      --color-gray-500: hsl(225deg, 7%, 60%);
      --color-gray-600: hsl(225deg, 15%, 50%);
      --color-gray-700: hsl(225deg, 12%, 40%);

      --white: #fff;

      --shadow: rgb(0 0 0 / 15%) 0px 1px 3px 0px;

      --gap-xs: 5px;
      --gap-sm: 10px;
      --gap-md: 15px;
      --gap-xl: 20px;
      --gap-xxl: 40px;
    }


    body, html {
        margin: 0px;
        height: 100%;
        font-size: 16px;
        overflow: hidden;
        font-weight: normal;
        line-height: normal;
        font-family: 'Barlow', 'Helvetica', sans-serif;
        -webkit-font-smoothing: antialiased;

        color: var(--color-secondary);
        background: var(--color-background);
    }

    * {
      box-sizing: border-box;
     }

    #root {
      height: 100%;
    }

    h1, h2, h3 {
      margin: 0px;
     }

     * div {
       position: relative;
     }

`;

export default GlobalStyle;
