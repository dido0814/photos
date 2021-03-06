import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const verticalStyle = css`
  display: inline-flex;
  flex-direction: column;
`;

const horizontalStyle = css`
  display: flex;
`;

const horizontalReverseStyle = css`
  display: flex;
  flex-direction: row-reverse;
`;

const variantMap = {
    vertical: verticalStyle,
    horizontal: horizontalStyle,
    'horizontal-reverse': horizontalReverseStyle,
};

const StyledCard = styled.div`
  border: 1px solid #DDD;
  border-radius: 3px;
  overflow: hidden;

  ${(props) => variantMap[props.$variant] || variantMap.vertical}
`;

const Cover = styled.div`
  overflow: hidden;
  width: 450px;
  img {
    width: 100%;
    display: block;
  }
`;

const SpaceBetween = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

/**
 * `Card` 是一個可以顯示單個主題內容及操作的元件，通常這個主題內容包含圖片、標題、描述或是一些操作。
 */
const Card = ({
    className, cover, variant,
    children, footer, ...props
}) => (
    <StyledCard className={className} $variant={variant} {...props}>
        <Cover className="card__cover">{cover}</Cover>
        <SpaceBetween>
            {children}
            {footer}
        </SpaceBetween>
    </StyledCard>
);

Card.propTypes = {
    /**
     * 客製化樣式
     */
    className: PropTypes.string,
    /**
     * 卡片封面媒體
     */
    cover: PropTypes.element,
    /**
     * 變化模式
     */
    variant: PropTypes.oneOf(['vertical', 'horizontal', 'horizontal-reverse']),
    /**
     * 卡片置底頁尾
     */
    footer: PropTypes.element,
    /**
     * 內容
     */
    children: PropTypes.element,
};

Card.defaultProps = {
    className: '',
    cover: null,
    variant: 'vertical',
    footer: null,
    children: null,
};

export default Card;