import React from "react";
import NavBar from './nav';

function Ext({
    layout: Layout,
    nav: Nav,
}: {
    layout: Function,
    nav?: boolean | undefined,
}): React.ReactElement<any, any> {
    const ele = Layout();
    return (
        <div className="AppMain">
          {function (): React.ReactElement<any, any> {
            if (Nav) {
              return <NavBar />
            } else {
              return (
                <>
                </>
              )
            }
          }()}
          {ele}
        </div>
    );
}

export default Ext;

// import React, { useState, useEffect } from "react";

// function Ext({
//     layout: Layout,
//     component: Component,
//     // navbar: navBool,
//     // footer: footBool,
// }: {
//     layout: React.ComponentType,
//     component?: React.ComponentType,
//     // navbar?: boolean,
//     // footer?: boolean
// }): {

// } {
//     // const [ls, setLs] = useState(<NavBar Home About Login />);
//     // useEffect(() => {
//     //     if (typeof localStorage !== 'undefined') {
//     //         setLs(localStorage.getItem("token") != null ? <NavBar Home About My /> : <NavBar Home About Login />);
//     //     }
//     // }, [])
//     return (
//         <>
//           {/* {function () {
//             if (navBool === true || navBool == null) {
//               return ls;
//             }
//           }()} */}
//           <Layout >
//             {function () {
//               if (Component) {
//                 return <Component />
//               } else {
//                 return (
//                   <>
//                   </>
//                 )
//               }
//             }()}
//           </Layout>
//           {/* {function () {
//             if (footBool === true || footBool == null) {
//               return <Footer id="footer" />
//             }
//           }()} */}
//         </>
//     );
// }

// export default Ext;