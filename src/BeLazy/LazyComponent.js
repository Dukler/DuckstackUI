// import React, { Suspense } from 'react';

// const LazyComponent = props => {
//     const getImport = () => {
//         switch (props.type) {
//             case 'mIcon':
//                 return () => import(
//                     `@material-ui/icons/${props.className}`
//                 )
//             default:
//                 return () => import(
//                     `../${props.root}/${props.className}`
//                 );
//         }
//     }

//     const component =   <Suspense fallback={<div>Loading...</div>}>
//                             {React.lazy(getImport())}
//                         </Suspense>

//     return component
// };

// export default LazyComponent;