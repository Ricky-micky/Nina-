import React, { useState, useEffect } from 'react';
// import './Activities.css'
function Activities() {
  const [activities, setActivities] = useState([]);
  const [userName, setUserName] = useState('');
  const [selectedActivity, setSelectedActivity] = useState('');
  const [date, setDate] = useState('');
  const [participants, setParticipants] = useState(1);

  // Fetch activities from the mock server (json-server)
  useEffect(() => {
    fetch('http://localhost:5000/activities')
      .then((response) => response.json())
      .then((data) => setActivities(data))
      .catch((error) => console.error('Error fetching activities:', error));
  }, []);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Create booking data
    const bookingData = {
      userName,
      activity: selectedActivity,
      date,
      participants,
    };

    // Post the booking data to the mock API
    fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Booking successful:', data);
        // Optionally reset the form
        setUserName('');
        setSelectedActivity('');
        setDate('');
        setParticipants(1);
      })
      .catch((error) => {
        console.error('Error submitting booking:', error);
      });
  };

  return (
    <div className="activities">
      <h1>Activities with Jozz Tembo Tours</h1>
      <p>Explore the best of Watamu and beyond with our exciting range of activities!</p>

      <h2>Popular Activities</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <strong>{activity.name}</strong> - {activity.description}
            <br />
            <strong>Price:</strong> ${activity.price} | <strong>Duration:</strong> {activity.duration}
          </li>
        ))}
      </ul>

      <h2>Book an Activity</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="activity-type">Choose an Activity:</label>
        <select
          id="activity-type"
          value={selectedActivity}
          onChange={(e) => setSelectedActivity(e.target.value)}
          required
        >
          <option value="">Select an Activity</option>
          {activities.map((activity) => (
            <option key={activity.id} value={activity.name}>
              {activity.name}
            </option>
          ))}
        </select>

        <label htmlFor="user-name">Your Name:</label>
        <input
          type="text"
          id="user-name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter your name"
          required
        />

        <label htmlFor="date">Preferred Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <label htmlFor="participants">Number of Participants:</label>
        <input
          type="number"
          id="participants"
          value={participants}
          onChange={(e) => setParticipants(e.target.value)}
          min="1"
          required
        />

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default Activities;
