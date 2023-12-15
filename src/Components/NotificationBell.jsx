
import React, { useState } from 'react';
import { FaBell } from 'react-icons/fa';

const NotificationBell = () => {
  const [notificationCount, setNotificationCount] = useState(0);

  const handleBellClick = () => {
    setNotificationCount(0);
  };

  return (
    <div>
      <span>
        <FaBell size={30} onClick={handleBellClick} style={{ cursor: 'pointer' }} />
      </span>
      {notificationCount > 0 && <span className="notification-count">{notificationCount}</span>}
    </div>
  );
};

export default NotificationBell;
