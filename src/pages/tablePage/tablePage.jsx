import React, { useState } from 'react';
import axios from 'axios';
import '../tablePage/tablePage.css';
import Header2 from '../../components/header2/header2';
import Footer from '../../components/footer/footer';
import img from '../../assets/mainpage/common/Frame 34.svg'
import { NavLink } from 'react-router-dom';


export default function TablePage() {
  const [spreadsheetUrl, setSpreadsheetUrl] = useState('');
  const [days, setDays] = useState('');
  const [timeSlotsPerDay, setTimeSlotsPerDay] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (spreadsheetUrl && days && timeSlotsPerDay) {
  //     const data = {
  //       spreadsheet_url: spreadsheetUrl,
  //       days: parseInt(days, 10),
  //       time_slots_per_day: parseInt(timeSlotsPerDay, 10)
  //     };

  //     axios.post('http://127.0.0.1:8000/generate-timetable/', data, {
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     })
  //       .then(response => {
  //         console.log('Schedule generated:', response.data);
  //         setIsModalOpen(true);
  //       })
  //       .catch(error => {
  //         console.error('Error:', error);
  //         alert('An error occurred while generating the schedule.');
  //       });
  //   } else {
  //     alert('Please fill out all fields!');
  //   }
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (spreadsheetUrl && days && timeSlotsPerDay) {
      const data = {
        spreadsheet_url: spreadsheetUrl,
        days: parseInt(days, 10),
        time_slots_per_day: parseInt(timeSlotsPerDay, 10) 

      };
      console.log(data)

  
      axios.post('http://127.0.0.1:8000/generate-timetable/', data, {
        headers: {
          'Content-Type': 'application/json'
        }
        
      })
            console.log(data)

        .then(response => {
          console.log('Schedule generated:', response.data);
          setIsModalOpen(true);
        })
        .catch(error => {
          console.error('Error:', error);
          alert('An error occurred while generating the schedule.');
        });
    } else {
      alert('Please fill out all fields!');
    }
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <Header2 />
      <div className="table_box" >
        <div className="title-table">
          Create schedule here
        </div>
        <form className="table" onSubmit={handleSubmit}>
          {/* <div className="left_table"> */}
           
            <div className="input_table">
              Spreadsheet URL
              <input 
                type="text" 
                className='input_tab'
                value={spreadsheetUrl} 
                onChange={(e) => setSpreadsheetUrl(e.target.value)} 
                required 
              />
            </div>
            <div className="input_table">
              Number of days
              <input 
                type="number" 
                className='input_tab'
                value={days} 
                onChange={(e) => setDays(e.target.value)} 
                required 
              />
            </div>
            {/* </div> */}
{/* <div className="right_table"> */}
            <div className="input_table">
              Number of time slots per day
              <input 
                type="number" 
                className='input_tab'
                value={timeSlotsPerDay} 
                onChange={(e) => setTimeSlotsPerDay(e.target.value)} 
                required 
              />
            </div>
            <div className="btns_table">
            <div className="btn_modal" onClick={openModal}>
              Rules
            </div>
            <NavLink to = '/result'>
          <div className="btn_subm">
            <button type="submit">Generate Schedule</button>
            </div>
            </NavLink>
          </div>
          {/* </div> */}
        </form>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
          <div className="modal_wrap">
            <div className="left_modal">
              <div className="subt_modal">
              example: 
              </div>
              <img src={img} alt="" />
            </div>
            <div className="right_modal">
<div className="title_modal">
Rules of creating shedules
</div>
<div className="rules_modal">
Google Sheets Columns: <br />

Group: Group name (e.g., "CS-101").<br />
Teacher: Teacher's name with initials (e.g., "John D.").<br />
Course: Full course name (e.g., "Mathematics").<br />
Lessons: Date and time of the lesson (e.g., "09/01/2024, 10:00 AM - 11:30 AM").<br />
Requirements:<br />
<br />
One row per lesson.<br />
No merged cells.<br />
No empty rows.<br />
Formatting:<br />
Date: "MM/DD/YYYY".<br />
Time: "HH<br />
AM/PM - HH<br />
AM/PM".<br />
Input Field Rules:<br />
<br />
Group: Full group name (e.g., "CS-101").<br />
Teacher: Full name with initials (e.g., "John D.").<br />
Course: Full name, no abbreviations.<br />
Lessons: Provide exact date and time.<br />
Recommendations:<br />
<br />
Double-check data before submitting.<br />
Avoid errors and duplication.</div>
          </div>
          </div>
          
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}


// import React, { useState } from 'react';
// import axios from 'axios';
// import '../tablePage/tablePage.css';
// import Header2 from '../../components/header2/header2';
// import Footer from '../../components/footer/footer';

// export default function TablePage() {
//   const [schoolDays, setSchoolDays] = useState('');
//   const [lessons, setLessons] = useState('');
//   const [link, setLink] = useState('');
//    const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (link && schoolDays && lessons) {
//       const data = {
//         schoolDays: schoolDays,
//         lessons: lessons,
//         link: link  // Отправляем ссылку
//       };

//       axios.post('http://127.0.0.1:8000/generate-timetable/', data, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       })
//         .then(response => {
//           console.log('Schedule generated:', response.data);
//         })
//         .catch(error => {
//           console.error('Error:', error);
//           alert('An error occurred while generating the schedule.');
//         });
//     } else {
//       alert('Please fill out all fields!');
//     }
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);  // Закрыть модальное окно
//   };

//   const openModal = () => {
//     setIsModalOpen(true);  // Закрыть модальное окно
//   };
//   return (
//     <div>
//       <Header2 />
//       <div className="table_box">
//         <div className="title-table">
//         Create shedule here         </div>
//         <form className="table" onSubmit={handleSubmit}>
//           <div className="left_table">
//             <div className="btn_modal" onClick={openModal}>
// rules
//             </div>
//             <div className="input_table">
//               Number of school days
//               <input 
//                 type="number" 
//                 className='input_tab'
//                 value={schoolDays} 
//                 onChange={(e) => setSchoolDays(e.target.value)} 
//                 required 
//               />
//             </div>
//             <div className="input_table">
//               Maximum number of lessons
//               <input 
//                 type="number" 
//                 className='input_tab'
//                 value={lessons} 
//                 onChange={(e) => setLessons(e.target.value)} 
//                 required 
//               />
//             </div>
//           </div>
//           <div className="right_table">
//             <div className="excel_file">
//               Upload Excel file link
//               <input 
//                 type="text" 
//                 onChange={(e) => setLink(e.target.value)} 
//                 required 
//                 className='input_tab'

//                 value={link} 
//               />
//             </div>
//             <div className="btn_subm">
//               <button type="submit">generate schedule</button>
//             </div>
//           </div>
//         </form>
//       </div>
//       {isModalOpen && (
//         <div className="modal">
//           <div className="modal-content">
//             <h2>Schedule Generated</h2>
//             <p>Your schedule has been successfully generated.</p>
//             <button onClick={closeModal}>Close</button>
//           </div>
//         </div>
//       )}
//       <Footer />
//     </div>
//   );
// }
