import React, { useState } from 'react';
import { updateDoc, doc } from 'firebase/firestore';
import { db } from '../../../Firebase';
import './StatusDropdown.css';

const StatusDropdown = ({ userId, onUpdateStatus, statusAction }) => {
  const [updateStatus, setUpdateStatus] = useState('');

     const updateStatusHandler = async (status) => {
     try {
       const updateStatusRef = doc(db, 'user', userId);
       await updateDoc(updateStatusRef, { status });
       setUpdateStatus(status); // Update local state
       onUpdateStatus(status); // Notify parent component about the update
       statusAction(true)
       alert('Updated successfully');
     } catch (error) {
       console.log('Error updating status', error.message);
       statusAction(true)
     }
   };


  return (
    <div className="statusdropdown">
      <ul>
      <li
  onClick={() => updateStatusHandler('Active')}
  className={updateStatus === 'Active' ? 'active' : ''}
>
  Active
</li>

<li
  onClick={() => updateStatusHandler('Inactive')}
  className={updateStatus === 'Inactive' ? 'inactive' : ''}
>
  Inactive
</li>
      </ul>
    </div>
  );
};

export default StatusDropdown;












// import React, { useState } from 'react';
// import { updateDoc, doc } from 'firebase/firestore';
// import { db } from '../../Firebase';
// import './StatusDropdown.css';

// const StatusDropdown = ({ userId }) => {
//   const updateStatusHandler = async (status) => {
//     try {
//       const updateStatusRef = doc(db, 'user', userId);
//       await updateDoc(updateStatusRef, { status });
//       alert('Updated successfully');
//     } catch (error) {
//       console.log('Error updating status', error.message);
//     }
//   };

//   return (
//     <div className="statusdropdown">
//       <ul>
//         <li onClick={() => updateStatusHandler('Active')}>Active</li>
//         <li onClick={() => updateStatusHandler('Inactive')}>Inactive</li>
//       </ul>
//     </div>
//   );
// };

// export default StatusDropdown;
