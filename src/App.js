// import React, { Component } from 'react';
import React from 'react';
import withFetching from './FetchApp';
import ClientForm from './Forms/ClientForm'

const API = 'http://192.168.0.5:8080/';
const DEFAULT_QUERY = 'api/1';

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

export default withFetching(API + DEFAULT_QUERY)(App);
