const express = require('express');
const cors = require('cors');
const { resolve } = require('path');

const app = express();
app.use(cors());
const port = 3000;

app.use(express.static('static'));

//BD 2 Assignment

let hotels = [
  {
    id: 1,
    name: 'Romantic Getaway',
    category: 'Resort',
    rating: 2.2,
    reviews: 4572,
    amenity: 'Spa',
    price: 10464,
    country: 'South Africa',
  },
  {
    id: 2,
    name: 'Wellness Retreat',
    category: 'Family',
    rating: 2.8,
    reviews: 2114,
    amenity: 'Pool',
    price: 13243,
    country: 'Australia',
  },
  {
    id: 3,
    name: 'Romantic Getaway',
    category: 'Luxury',
    rating: 3.1,
    reviews: 4359,
    amenity: 'Restaurant',
    price: 3299,
    country: 'Germany',
  },
  {
    id: 4,
    name: 'Luxury Suites',
    category: 'Family',
    rating: 4.9,
    reviews: 3651,
    amenity: 'Bar',
    price: 16359,
    country: 'United Kingdom',
  },
  {
    id: 5,
    name: 'Luxury Suites',
    category: 'Budget',
    rating: 4.6,
    reviews: 688,
    amenity: 'Gym',
    price: 15570,
    country: 'France',
  },
  {
    id: 6,
    name: 'Cultural Heritage Hotel',
    category: 'Boutique',
    rating: 2.0,
    reviews: 219,
    amenity: 'Pet Friendly',
    price: 2321,
    country: 'USA',
  },
  {
    id: 7,
    name: 'Business Hotel',
    category: 'Mid-Range',
    rating: 3.7,
    reviews: 1040,
    amenity: 'Free WiFi',
    price: 4523,
    country: 'India',
  },
  {
    id: 8,
    name: 'Historic Plaza Hotel',
    category: 'Mid-Range',
    rating: 3.5,
    reviews: 300,
    amenity: 'Parking',
    price: 8543,
    country: 'Australia',
  },
  {
    id: 9,
    name: 'Adventure Resort',
    category: 'Boutique',
    rating: 4.2,
    reviews: 1222,
    amenity: 'Gym',
    price: 11894,
    country: 'South Africa',
  },
  {
    id: 10,
    name: 'Mountain Retreat',
    category: 'Resort',
    rating: 4.8,
    reviews: 4015,
    amenity: 'Spa',
    price: 17560,
    country: 'India',
  },
  {
    id: 11,
    name: 'Eco Friendly Lodge',
    category: 'Family',
    rating: 2.4,
    reviews: 528,
    amenity: 'Restaurant',
    price: 3124,
    country: 'Germany',
  },
  {
    id: 12,
    name: 'Urban Boutique Hotel',
    category: 'Mid-Range',
    rating: 3.9,
    reviews: 1401,
    amenity: 'Free WiFi',
    price: 9245,
    country: 'France',
  },
  {
    id: 13,
    name: 'Beachfront Hotel',
    category: 'Luxury',
    rating: 4.5,
    reviews: 489,
    amenity: 'Pool',
    price: 14567,
    country: 'USA',
  },
  {
    id: 14,
    name: 'Ocean View Resort',
    category: 'Budget',
    rating: 3.3,
    reviews: 783,
    amenity: 'Spa',
    price: 7432,
    country: 'United Kingdom',
  },
  {
    id: 15,
    name: 'City Central Hotel',
    category: 'Boutique',
    rating: 4.1,
    reviews: 2133,
    amenity: 'Bar',
    price: 9823,
    country: 'Australia',
  },
  {
    id: 16,
    name: 'Casino Resort',
    category: 'Luxury',
    rating: 4.9,
    reviews: 5000,
    amenity: 'Bar',
    price: 18900,
    country: 'South Africa',
  },
  {
    id: 17,
    name: 'Golf Resort',
    category: 'Mid-Range',
    rating: 4.7,
    reviews: 789,
    amenity: 'Gym',
    price: 16340,
    country: 'France',
  },
  {
    id: 18,
    name: 'Family Fun Hotel',
    category: 'Family',
    rating: 3.2,
    reviews: 1322,
    amenity: 'Pool',
    price: 7500,
    country: 'Germany',
  },
  {
    id: 19,
    name: 'Spa and Relaxation Hotel',
    category: 'Luxury',
    rating: 4.4,
    reviews: 2314,
    amenity: 'Spa',
    price: 14900,
    country: 'United Kingdom',
  },
  {
    id: 20,
    name: 'Country House Hotel',
    category: 'Budget',
    rating: 3.6,
    reviews: 1876,
    amenity: 'Parking',
    price: 6234,
    country: 'Australia',
  },
];

//Endpoint 1: Get the hotels sorted by pricing

function sortByPriceLowToHigh(price1, price2) {
  return price1.price - price2.price;  
  }

function sortByPriceHighToLow(price1, price2) {
  return price2.price - price1.price;  
  }

app.get("/hotels/sort/pricing", (req, res) => {
  let pricing = req.query.pricing;
  let hotelsCopy = hotels.slice();

  if (pricing === 'low-to-high') {
    hotelsCopy.sort(sortByPriceLowToHigh)
  } else {
    hotelsCopy.sort(sortByPriceHighToLow)
  }
  res.json({hotels: hotelsCopy});
});


//Endpoint 2: Get the hotels sorted based on their Ratings

function sortByRatingLowToHigh(rating1, rating2) {
  return rating1.rating - rating2.rating;
}

function sortByRatingHighToLow(rating1, rating2) {
  return rating2.rating - rating1.rating;
}

app.get("/hotels/sort/rating", (req, res) => {
  let hotelsCopy = hotels.slice();
  let rating = req.query.rating;
  
  if (rating === 'low-to-high') {
    hotelsCopy.sort(sortByRatingLowToHigh)
  } else {
    hotelsCopy.sort(sortByRatingHighToLow)
  }
  res.json ({hotels: hotelsCopy})
});


//Endpoint 3: Get the Hotels sorted based on their Reviews

function sortByReviewLeastToMost(review1, review2) {
  return review1.reviews - review2.reviews;
}

function sortByReviewMostToLeast(review1, review2) {
  return review2.reviews - review1.reviews;
}

app.get("/hotels/sort/reviews", (req, res) => {
  let hotelsCopy = hotels.slice();
  let reviews = req.query.reviews;

  if (reviews === 'least-to-most') {
    hotelsCopy.sort(sortByReviewLeastToMost)
  } else {
    hotelsCopy.sort(sortByReviewMostToLeast)
  }
  res.json({hotels: hotelsCopy});
});


//Endpoint 4: Filter the hotels based on the Hotel Amenity

function filterByAmenity(hotelObj, amenity) {
  return hotelObj.amenity.toLowerCase() === amenity;
}

app.get("/hotels/filter/amenity", (req, res) => {
  let amenity = req.query.amenity;
  
  let results = hotels.filter((hotelObj) => filterByAmenity(hotelObj, amenity));
  res.json (results);
});


// Endpoint 5: Filter the hotels based on the selected Country

function filterByCountry(hotelObj, country) {
  return hotelObj.country.toLowerCase() === country;
}

app.get("/hotels/filter/country", (req, res) => {
  let country = req.query.country;
  let results = hotels.filter((hotelObj) => filterByCountry(hotelObj, country));
  res.json(results);
});


//Endpoint 6: Filter the hotels based on the selected Category

function filterByCategory(hotelObj, category) {
  return hotelObj.category.toLowerCase() === category;
}

app.get("/hotels/filter/category", (req, res) => {
  let category = req.query.category;
  let results = hotels.filter((hotelObj) => filterByCategory(hotelObj, category));
  res.json(results);
});


//Endpoint 7: Send all hotels

app.get("/hotels", (req, res) => {
  res.json(hotels);
});




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
