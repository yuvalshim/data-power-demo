import { createGlobalStyle } from "styled-components";

export type Sizes = "xs" | "sm" | "md" | "xl" | "xxl";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Barlow:300,400,500,700');
 
    :root {
      --color-primary: #4a148c;
      --color-secondary: #091547;
      --color-background: #F0F0F0;

      --white: #fff;



      --gap-xs: 5px;
      --gap-sm: 10px;
      --gap-md: 15px;
      --gap-xl: 20px;
      --gap-xxl: 25px;
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
