import { LoadMore, BtnWrapper } from "./Button.styled";

export const BtnLoadMore = ({ onClick }) => {
    return (
        <BtnWrapper>
            <LoadMore onClick={onClick} type="button">
                Load more
            </LoadMore>
        </BtnWrapper>
    )
}
