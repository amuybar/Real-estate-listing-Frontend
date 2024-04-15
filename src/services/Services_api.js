import axios from 'axios';

const BASE_URL = 'https://real-estate-listing-backend.onrender.com'; 

class BackendService {
  static async getListingData(id) {
    const response = await axios.get(`${BASE_URL}/properties`);
    return response.data;
  }

// get data byid
  static async getListingById(id) {
    try {
      const response = await fetch(`/properties${id}`); 
      if (!response.ok) {
        throw new Error('Failed to fetch listing by ID');
      }
      return await response.json();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async submitProperty(formData) {
    try {
      const response = await axios.post(`${BASE_URL}/properties`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', 
        },
      });
      return response.data; 
    } catch (err) {
      throw err; 
    }
  }
}



export default BackendService;
