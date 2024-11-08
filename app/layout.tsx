
// import { Children } from "react";
import "./globals.css";

type RootLayout = {
     children: React.ReactNode;
};
const RootLayout: React.FC<RootLayout> = (props) => {   //function type
  console.log(props, "props");
  return(
    <html>
   <head></head>
    <body>{props.children}
    </body>
  </html>
  );
};

export default  RootLayout;


