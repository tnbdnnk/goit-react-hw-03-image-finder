import { Component } from 'react';
import { fetchImageGallery } from '../api/PixabayAPI';

import toast, { Toaster } from 'react-hot-toast';

import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { BtnLoadMore } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Error } from './Error/Error';

export class App extends Component {
    state = {
        query: '',
        page: 1,
        loading: false,
        imageGallery: [],
        error: false,
        toast: false,
        loadMore: true,
    };

    handleSearchImg = newImg => {
        this.setState({
            query: newImg,
            page: 1,
            imageGallery: [],
            toast: false,
        });
    };

    handleLoadMore = () => {
        this.setState(prevState => ({ page: prevState.page + 1}));
    };

    queryImgGallery = async (query, page, prevState) => {
        try {
            this.setState({ loading: true, error: false });
        
            const response = await fetchImageGallery(query, page);
            console.log('Response:', response);

            if (!response || response.length === 0) {
                toast.error('No images found, please change your search query', {
                    style: { width: '1000px', height: '60px' },
                });
                this.setState({ loading: false, loadMore: false });
            } else {
                if (!this.state.toast && response.length > 0) {
                    toast.success('We found images');
                    this.setState({ toast: true });
                }
    
                const newImages = response.filter(newImage => {
                    return prevState.imageGallery.every(image => image.id !== newImage.id);
                });
    
                this.setState(prevState => ({
                    imageGallery: [...prevState.imageGallery, ...newImages],
                    loadMore: page < Math.ceil(response.length / 12),
                    loading: false,
                    error: false,
                }));
            }
        } catch (error) {
            console.error(error);
            this.setState({ error: true, loading: false });
        } 
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
            const { query, page } = this.state;
            this.queryImgGallery(query, page, prevState);
        }
    }

    render() {
        const { imageGallery, loading, error, loadMore } = this.state;

        return (
            <div> 
                <SearchBar onSubmit={this.handleSearchImg}/>
                {loading && <Loader/>}
                {error && <Error>Whoops! Error! Please reload this page!</Error>}
                {imageGallery.length > 0 && (
                    <ImageGallery apiImage={this.state.imageGallery}/>
                )}
                {loadMore && imageGallery.length > 0 && (
                    <BtnLoadMore onClick={this.handleLoadMore}/>
                )}
                <Toaster
                    position="top-right"
                    toastOptions={{
                        style: {
                            height: '40px',
                            fontSize: '20px',
                            fontWeight: '400',
                            lineHeight: '20px',
                        },
                    }}
                />
            </div>
        )
    }
}



// import { Component } from 'react';
// import { fetchImageGallery } from '../api/PixabayAPI';

// import toast, { Toaster } from 'react-hot-toast';

// import { SearchBar } from './SearchBar/SearchBar';
// import { ImageGallery } from './ImageGallery/ImageGallery';
// import { BtnLoadMore } from './Button/Button';
// import { Loader } from './Loader/Loader';
// import { Error } from './Error/Error';


// export class App extends Component {
//     state = {
//         query: '',
//         page: 1,
//         loading: false,
//         imageGallery: [],
//         error: false,
//         loadMore: false,
//         errorMessage: '',
//         toast: false,
//     };

//     handleSearchImg = newImg => {
//         this.setState({
//             query: newImg,
//             page: 1,
//             imageGallery: [],
//             toast: false,
//         });
//     };

//     handleLoadMore = () => {
//         this.setState(prevState => ({ page: prevState.page + 1}));
//     };

//     queryImgGallery = async (query, page, prevState) => {
//         try {
//             this.setState({ loading: true, error: false });

//             const { hits, totalHits } = await fetchImageGallery(query, page);

//             if (hits.length === 0) {
//                 this.setState({ errorMessage: 'No images found, please change your search query', loading: false, imageGallery: [], loadMore: false });
//             } else {
//                 this.setState({ errorMessage: '', loading: false, imageGallery: [...prevState.imageGallery, ...hits], loadMore: page < Math.ceil(totalHits / 12) });
//             }

//             if (!this.state.toast && hits.length > 0) {
//                 toast.success('We found images');
//                 this.setState({ toast: true });
//             }

//             this.setState(prevState => ({
//                 imageGallery: [...prevState.imageGallery, ...hits],
//             }));

//         } catch (error) {
//             this.setState({ error: true, errorMessage: 'An error occurred. Please try again later.' });
//         } finally {
//             this.setState({ loading: false });
//         }
//     };

//     componentDidUpdate(prevProps, prevState) {
//         if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
//             const { query, page } = this.state;
//             this.queryImgGallery(query, page, prevState);
//         }
//     }

//     render() {
//         const { imageGallery, loading, error, errorMessage } = this.state;
//         const showLoadMore = imageGallery.length > 0 && this.state.loadMore;

//         return (
//             <div> 
//                 <SearchBar onSubmit={this.handleSearchImg}/>
//                 {loading && <Loader/>}
//                 {error && <Error>{errorMessage || 'Whoops! Error! Please reload this page!'}</Error>}                {imageGallery.length > 0 && (
//                     <ImageGallery imageGallery={this.state.imageGallery}/>
//                 )}
//                 {showLoadMore && (
//                     <BtnLoadMore onClick={this.handleLoadMore}/>
//                 )}
//                 <Toaster
//                     position="top-right"
//                     toastOptions={{
//                         style: {
//                         height: '80px',
//                         fontSize: '20px',
//                         fontWeight: '400',
//                         lineHeight: '20px',
//                         },
//                     }}
//                 />
//             </div>
//         )
//     }
// }



