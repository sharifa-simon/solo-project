import React from 'react';

export default function TodayDate() {
        let tempDate = new Date();
        let date = (tempDate.getMonth()+1) + '-' + tempDate.getDate() + 
        '-' + tempDate.getFullYear() +' '+ tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();
        const currDate = "Today's Date: "+date; 
        
            
  return (
    <p>{currDate}</p>
  );
}