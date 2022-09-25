import React, { useState } from 'react';
import {
  Accordion,
} from 'reactstrap';

import SingleFine from './SingleFine';

function FineCollected(props) {
  const [open, setOpen] = useState('0');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  const [data, setdata] = useState([
    {id:'1', ViolationType:'no helment', FineAmount:'500', PaymentStatus:'paid'},
    {id:'2', ViolationType:'no driving licence', FineAmount:'1000', PaymentStatus:'not paid'}
  ])


  return (
    <div>
      <br/><h2 className='text-center'>Fine Collection Data</h2><br/>
      <Accordion open={open} toggle={toggle}>
        <Accordion open={open} toggle={toggle}>
        {
          (data.length > 0) ? data.map((item) => <SingleFine data={item}/>): "No data"
        }
        
      </Accordion>
      </Accordion>
    </div>
  );
}

export default FineCollected;