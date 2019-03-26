// import React, {Suspense} from 'react';
//
//
// const LazyComponent = ({componentName, props}) =>  {
//     //let iconName = icon.replace(/Icon$/, '');
//     const LazyItem = React.lazy(() =>
//         import(`../Components/${componentName}`)
//             .catch(() => ({ default:() => <div>puto</div>}))
//     );
//     return  <Suspense fallback={<div>Loading...</div>}>
//                 <LazyItem {...props} key={props.attributes.id}/>
//             </Suspense>
// };
//
// export default LazyComponent;