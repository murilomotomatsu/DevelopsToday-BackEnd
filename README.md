# Country Information API For DevelopsToday Test

This API provides information on countries, including available countries with flags and details like borders, population, and flag images. It uses Express.js for server routing, Axios for HTTP requests, and dotenv for environment variable management.

## Table of Contents
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Routes](#routes)
- [Usage](#usage)
- [Technologies](#technologies)
- [License](#license)

## Installation

1. Clone the repository:
    ```bash
        git clone https://github.com/murilomotomatsu/DevelopsToday-BackEnd
        cd DevelopsToday-BackEnd
    ```
2. Install dependencies:
    ```bash
        npm install
    ````
3. Set up your environment variables in a .env file (see below for required variables).
  
4. Start the server:
    ```bash
        npm start
    ```

## Environment Variables

- Make sure to create a .env file in the root directory of your project and set the following environment variables:
    ```bash
        PORT=5000                               # Port on which the server will run
        BASE_URL=https://date.nager.at/api/v3   # Base URL for the country information API
    ```
## Routes

1. Get Available Countries
- Endpoint: /api/countries/available
    Method: GET
    Description: Fetches a list of available countries, each with a flag image.
    Example Response:
    ```bash
    [
    {
        "name": "Country Name",
        "code": "Country Code",
        "flagURL": "https://example.com/flag.png"
    }
    ]
    ```


2. Get Country Details
- Endpoint: /api/countries/info/:countryCode
    Method: GET
    URL Params: countryCode - Code of the country for detailed information
    Description: Provides details for a specific country, including borders, population data, and flag.
    Example Response:
    ```bash
    {
    "borders": ["Country1", "Country2"],
    "countryName": "Country Name",
    "populationData": [
        {
        "year": 2020,
        "value": 5000000
        }
    ],
    "flagURL": "https://example.com/flag.png"
    }
    ```

## Usage
- To use the API:
    1. Start the server.
    2. Make requests to the endpoints listed above to get data on available countries and specific country details.

## Technologies
Node.js: JavaScript runtime.
Express.js: Web framework for building the API.
Axios: For making HTTP requests.
dotenv: For managing environment variables.
cors: For handling CORS.