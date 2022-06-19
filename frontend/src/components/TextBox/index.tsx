import React from 'react';

export interface IButtonProps {
    onClick: () => void;
    disabled?: boolean;
}

export const TextBox: React.FC<IButtonProps> = ({ children, onClick, disabled }) => {
    return (
        <input type={'text'} onClick={onClick} disabled={!!disabled}>{children}</input>
    )
};

export default TextBox;
