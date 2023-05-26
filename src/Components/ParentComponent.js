import React from 'react'
import axios from 'axios'
import ChildComponent from './ChildComponent'

import { useState } from 'react';

const ParentComponent = () => {

  const [submissionStatus, setSubmissionStatus] = useState(null);

 
  const onSubmit = async (data) => {
     axios
      .post("https://dashboard.omnisellcrm.com/api/store", data)
      .then((response) => {
        console.log(response);

        setSubmissionStatus("success");
      })
      .catch((error) => {
        console.log(error);
        setSubmissionStatus("failed");
      });
  };
  return (
    <div>
      
      <ChildComponent onSubmit={onSubmit} submissionStatus={submissionStatus} />
    </div>
  )
}

export default ParentComponent
