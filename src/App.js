// import React, { Component } from 'react';
import React from 'react';
import withFetching from './FetchApp';
import ClientForm from './Forms/ClientForm'
import Constants from './Constants';



const App = ({ data, isLoading, error }) => {
  // const hits = data.hits || [];

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    // <div><pre>{data }</pre></div>
    // <div>
    //   {appointments.map(appointments =>
    //     <div key={appointments.id}>
    //       <a>{appointments.id}</a>
    //       <a>{appointments.name}</a>
    //     </div>
    //   )}
    // </div>
    
    <div>
      <ClientForm />
      {/* <div key={data.id}>
        <a>{data.id}</a>
        <a>{data.name}</a>
      </div> */}
    </div>
  );
}

export default withFetching(Constants.API + "1")(App);
