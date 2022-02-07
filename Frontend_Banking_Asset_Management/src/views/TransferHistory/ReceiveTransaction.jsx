import React from 'react';

function ReceiveTransaction({transaction}) {


  return <div key={transaction._id}>
                     <p></p>
                <p>Date: 
                {`${new Date(transaction.createdOn).toLocaleDateString()} / ${new Date(transaction.createdOn).toLocaleTimeString()}`},
                
              
                </p>
                {/* <p>From:{user.firstname} {user.lastname}</p> */}
                <p>From</p>
                <p> {transaction.recipient.firstname} {transaction.recipient.lastname}</p>
                <p>Amount {transaction.transmittedValue}</p>
                </div>
            ;
}

export default ReceiveTransaction;
