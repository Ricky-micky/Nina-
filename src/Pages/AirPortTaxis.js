import React, { useState } from 'react';
// import './AirPort'

function AirPortTaxis() {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');
  const [passengerCount, setPassengerCount] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();

    const bookingData = {
      pickupLocation,
      dropLocation,
      passengerCount,
    };

    // Send the booking data to the mock API
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
        // Optionally, show a success message or redirect the user
      })
      .catch((error) => {
        console.error('Error booking taxi:', error);
      });
  };

  return (
    <div className="airport-taxis">
      <h1>Airport Taxi Services</h1>
      <p>Welcome to Jozz Tembo Tours! We offer reliable and affordable airport taxi services to ensure you reach your destination comfortably and on time.</p>

      <h2>Available Taxi Options</h2>
      <ul>
        <li>Standard Taxi - For 1-4 passengers</li>
        <li>Luxury Taxi - For 1-4 passengers (Air-conditioned)</li>
        <li>Van Taxi - For larger groups or families</li>
      </ul>

      <h2>Pricing</h2>
      <ul>
        <li>Airport to Watamu: $30</li>
        <li>Airport to Malindi: $40</li>
        <li>Airport to Mombasa: $60</li>
      </ul>

      <h2>Book Your Taxi</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pickup-location">Pickup Location:</label>
        <input
          type="text"
          id="pickup-location"
          name="pickup-location"
          value={pickupLocation}
          onChange={(e) => setPickupLocation(e.target.value)}
          placeholder="Enter your pickup location"
          required
        />

        <label htmlFor="drop-location">Drop Location:</label>
        <input
          type="text"
          id="drop-location"
          name="drop-location"
          value={dropLocation}
          onChange={(e) => setDropLocation(e.target.value)}
          placeholder="Enter your drop location"
          required
        />

        <label htmlFor="passenger-count">Number of Passengers:</label>
        <input
          type="number"
          id="passenger-count"
          name="passenger-count"
          value={passengerCount}
          onChange={(e) => setPassengerCount(e.target.value)}
          min="1"
          required
        />

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default AirPortTaxis;
