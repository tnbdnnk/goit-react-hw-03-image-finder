import { BsSearch } from 'react-icons/bs';
import { Header, Input, FormWrapper, BtnSearch } from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
    return (
        <Header>
            <FormWrapper onSubmit={e => {
                const form = e.currentTarget;
                e.preventDefault();
                const query = form.elements.search.value;
                onSubmit(query);
                form.reset();
            }} >
                <BtnSearch type='submit'>
                    <BsSearch size={30} />
                </BtnSearch>
                <Input
                    name='search'
                    type='text'
                    autoComplete='off'
                    autoFocus
                    placeholder='Search images and photos'
                    required
                    pattern='[a-zA-Z]{3,}'
                    title='Please enter at least 3 letters (a-z, A-Z).'
                />
            </FormWrapper>
        </Header>
    )
}