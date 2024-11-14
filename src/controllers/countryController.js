const axios = require('axios');
const BASE_URL = process.env.BASE_URL;

// Available Countries
const getAvailableCountries = async (req, res) => {
    try {
        const availableCountriesResponse = await axios.get(`${BASE_URL}/AvailableCountries`);
        const flagsResponse = await axios.get('https://countriesnow.space/api/v0.1/countries/flag/images');

        const flagsMap = flagsResponse.data.data.reduce((map, country) => {
            map[country.name.toLowerCase()] = country.flag;
            return map;
        }, {});

        const result = availableCountriesResponse.data.map(country => {
            const flagURL = flagsMap[country.name.toLowerCase()] || null; 
            return {
                ...country,
                flagURL
            };
        });

        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Country Details
const getCountryInfo = async (req, res) => {
    const { countryCode } = req.params;

    try {
        const countryInfoResponse = await axios.get(`${BASE_URL}/CountryInfo/${countryCode}`);
        const populationResponse = await axios.post('https://countriesnow.space/api/v0.1/countries/population', {
            country: countryInfoResponse.data.commonName
        });
        const flagResponse = await axios.post('https://countriesnow.space/api/v0.1/countries/flag/images', {
            country: countryInfoResponse.data.commonName
        });
        res.json({
            borders: countryInfoResponse.data.borders,
            countryName: countryInfoResponse.data.commonName,
            populationData: populationResponse.data.data.populationCounts,
            flagURL: flagResponse.data.data.flag
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAvailableCountries,
    getCountryInfo
};
