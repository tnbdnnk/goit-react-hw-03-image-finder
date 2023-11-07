import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchImageGallery = async (value, currentPage) => {
    const params = {
        key: '36857280-3c2e802b96ad5f58d22cd9be6', // Replace with your actual API key
        q: value,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 12,
        page: currentPage,
    };

    try {
        const response = await axios.get('/', { params });
        return {
            hits: response.data.hits,
            totalHits: response.data.totalHits,
        }
    } catch (error) {
        console.error('Error fetching image gallery:', error);
        return [];
    }
};







// import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api';

// export const fetchImageGallery = async (value, currentPage) => {
//     const params = new URLSearchParams({
//         key: '36857280-3c2e802b96ad5f58d22cd9be6',
//         q: value,
//         image_type: 'photo',
//         orientation: 'horizontal',
//         safesearch: true,
//         per_page: 12,
//         page: currentPage,
//     });

//     const response = await axios.get(`/?${params}`);
//     return response.data.hits;
// };