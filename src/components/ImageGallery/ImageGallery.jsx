import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImgList } from './ImageGallery.styled.js';

export const ImageGallery = ({ apiImage }) => {
    return (
        <ImgList>
            {apiImage.map(item => (
                <li key={item.id}>
                    <ImageGalleryItem apiImage={item}/>
                </li>
            ))}
        </ImgList>
    )
}