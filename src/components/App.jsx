import { Component } from 'react';
import { fetchImageGallery } from '../api/PixabayAPI';

import toast, { Toaster } from 'react-hot-toast';

import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { BtnLoadMore } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Error } from './Error/Error';

// import css from './App.module.css';

export class App extends Component {
    state = {
        query: '',
        page: 1,
        loading: false,
        imageGallery: [],
        error: false,
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

            const queryImg = await fetchImageGallery(query, page);

            if (queryImg.length === 0) {
                toast.error('No images found, please change your search query', {
                    style: { width: '1000px', height: '80px' },
                });
            }

            if (!this.state.toast && queryImg.length > 0) {
                toast.success('We found images');
                this.setState({ toast: true });
            }

            const newImages = queryImg.filter(
                newImage => newImage.id !== prevState.imageGallery.id
            );

            this.setState(prevState => ({
                imageGallery: [...prevState.imageGallery, ...newImages],
            }));
        } catch (error) {
            this.setState({ error: true });
        } finally {
            this.setState({ loading: false });
        }
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
            const { query, page } = this.state;
            this.queryImgGallery(query, page, prevState);
        }
    }

    render() {
        const { imageGallery, loading, error } = this.state;

        return (
            <div> 
                <SearchBar onSubmit={this.handleSearchImg}/>
                {loading && <Loader/>}
                {error && <Error>Whoops! Error! Please reload this page!</Error>}
                {imageGallery.length > 0 && (
                    <ImageGallery apiImage={this.state.imageGallery}/>
                )}
                {imageGallery.length > 0 && (
                    <BtnLoadMore onClick={this.handleLoadMore}/>
                )}
                <Toaster
                    position="top-right"
                    toastOptions={{
                        style: {
                        height: '80px',
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