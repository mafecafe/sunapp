import { addDays, format } from 'date-fns';

// Interfaces for the weather data
export interface WeatherData {
  date: string;
  sunshineHours: number;
}

// Met Office API limits
// Note: Met Office requires an API key for actual use
// This is a simplified version that would need to be replaced with actual API integration
export const fetchWeatherData = async (): Promise<WeatherData[]> => {
  try {
    // In a real app, you would use the actual Met Office API
    // For demonstration, we'll generate mock data
    return generateMockWeatherData();
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

// Generate mock data for demonstration purposes
const generateMockWeatherData = (): WeatherData[] => {
  const today = new Date();
  const data: WeatherData[] = [];
  
  // Generate data for the next 30 days
  for (let i = 0; i < 30; i++) {
    const date = addDays(today, i);
    const formattedDate = format(date, 'yyyy-MM-dd');
    
    // Random sunshine hours between 0 and 12
    const sunshineHours = Math.random() * 12;
    
    data.push({
      date: formattedDate,
      sunshineHours
    });
  }
  
  return data;
};

// For a real implementation, you would need to get an API key from Met Office
// and use their actual API endpoints, which might look something like this:
/*
import axios from 'axios';

export const fetchActualWeatherData = async (apiKey: string): Promise<WeatherData[]> => {
  const response = await axios.get('https://data.metoffice.gov.uk/api/v1/forecast', {
    params: {
      apikey: apiKey,
      // Other required parameters
    }
  });
  
  // Process the response to extract sunshine hours
  // This would depend on the actual API response structure
  return processApiResponse(response.data);
};
*/ 