import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div<{
  $backgroundColor?: string;
  $disabled?: boolean;
  $imageWidth?: string;
}>`
  background-color: ${props =>
    props.$disabled ? '#f5f5f5' : props.$backgroundColor || '#fff'};
  border: 1px solid ${props => (props.$disabled ? '#ddd' : '#ccc')};
  border-radius: 10px;
  padding: 20px;
  box-shadow: ${props =>
    props.$disabled ? 'none' : '0 4px 8px rgba(0, 0, 0, 0.1)'};
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  cursor: ${props => (props.$disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    transform: ${props => (props.$disabled ? 'none' : 'translateY(-3px)')};
    box-shadow: ${props =>
      props.$disabled ? 'none' : '0 6px 12px rgba(0, 0, 0, 0.15)'};
  }
`;

export const Card: React.FC<CardProps> = ({
  title,
  content,
  children,
  backgroundColor,
  disabled,
  image,
  imageWidth,
}) => {
  return (
    <StyledCard
      $backgroundColor={backgroundColor}
      $disabled={disabled}
      $imageWidth={imageWidth}
    >
      {image && (
        <img
          src={image}
          alt={title}
          style={{
            width: imageWidth || '50%',
            borderRadius: '10px',
            marginBottom: '2px',
          }}
        />
      )}
      {title && <h3>{title}</h3>}
      {content && <p>{content}</p>}
      {children}
    </StyledCard>
  );
};
