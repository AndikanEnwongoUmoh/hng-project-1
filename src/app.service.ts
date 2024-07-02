import { Injectable, Query, Req } from '@nestjs/common';
import axios from 'axios';
import { Request } from 'express';

@Injectable()
export class AppService {
  private readonly ipapiBaseUrl = 'https://ipapi.co';

    async getIP(@Req() req: Request) {
      try {
        const ipApiResponse = await axios.get(`${this.ipapiBaseUrl}/json/`);
        const { ip, city } = ipApiResponse.data;
    
        const weatherstackApiUrl = `http://api.weatherstack.com/current?access_key=2a5ccf8aa94cba3ccd6de4072108124f&query=${city}`;
        const weatherApiResponse = await axios.get(weatherstackApiUrl);
        const temperature = weatherApiResponse.data.current.temperature;

        const greeting = `Hello, Mark! The temperature is ${temperature} degrees Celsius in ${city}.`;

        const responseBody = {
          client_ip: ip,
          location: city,
          greeting: greeting
        };
  
        return responseBody;
      } catch (error) {
        throw new Error('Unable to fetch weather data');
      }
  }
}