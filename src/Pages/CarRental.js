import React, { useState, useEffect } from 'react';



function CarRental() {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch data from json-server API
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch('http://localhost:5000/cars'); // json-server URL
        if (!response.ok) {
          throw new Error('Failed to fetch cars');
        }
        const data = await response.json();
        setCars(data); // Store car data in state
        setFilteredCars(data); // Initially show all cars
        setIsLoading(false); // Set loading to false
      } catch (error) {
        setError(error.message); // Set error message
        setIsLoading(false);
      }
    };

    fetchCars();
  }, []);

  // Handle search query change
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    const filtered = cars.filter((car) =>
      car.name.toLowerCase().includes(event.target.value.toLowerCase()) || 
      car.description.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredCars(filtered);
  };

  const handleAddCar = async (newCar) => {
    try {
      const response = await fetch('http://localhost:5000/cars', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newCar),
      });
      if (response.ok) {
        const addedCar = await response.json();
        setCars([...cars, addedCar]); // Add new car to the list
        setFilteredCars([...cars, addedCar]); // Update filtered cars list
      } else {
        throw new Error('Failed to add car');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="car-rental">
      <h1>Explore Our Fleet</h1>

      {/* Search Bar */}
      <div>
        <input
          type="text"
          placeholder="Search by car name or description"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      {/* Display Filtered Cars */}
      <div className="car-grid">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <div key={car.id} className="car-card">
              <img src={car.imageUrl} alt={car.name} />
              <h3>{car.name}</h3>
              <p>${car.price} / day</p>
              <p>{car.description}</p>
              <button disabled={!car.availability}>Book Now</button>
            </div>
          ))
        ) : (
          <p>No cars found matching your search</p>
        )}
      </div>

      {/* Add New Car Form */}
      <div>
        <h2>Add New Car</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const newCar = {
              name: e.target.name.value,
              price: parseInt(e.target.price.value),
              description: e.target.description.value,
              availability: true, // You can set this dynamically based on user input
              imageUrl: e.target.imageUrl.value,
            };
            handleAddCar(newCar); // Add car to the database
          }}
        >
          <input type="text" name="name" placeholder="Car Name" required />
          <input type="number" name="price" placeholder="Price per day" required />
          <input type="text" name="description" placeholder="Description" required />
          <input type="text" name="imageUrl" placeholder="Image URL" required />
          <button type="submit">Add Car</button>
        </form>
      </div>
    </div>
  );
}

export default CarRental;
