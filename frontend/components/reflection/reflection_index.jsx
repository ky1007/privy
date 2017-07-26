import React from 'react';

const ReflectionIndexItem = ({ reflection }) => (
  <article key={reflection.id}>
    {reflection.body}
  </article>
);

export default ReflectionIndexItem;


// class ReflectionIndex extends React.Component {

//   render () {
//     return (
      // <section>
      //   {reflections.map(reflection => <ReflectionIndexItem reflection={reflection} />)}
      //   <ReflectionIndexItem />
      // </section>
//     );
//   }
// }


// const ReflectionIndex = ({ reflections }) => 
// DELETE once reflections is working 