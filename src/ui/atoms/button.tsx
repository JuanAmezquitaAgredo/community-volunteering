import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    label?: string;
    type?: 'button' |'submit' |'reset';
    onClick?: () => void;
}

const StyledButton = styled.button`
    width: 100%;
    padding: 0.5rem 1rem;
    background-color: #1a1a1a;
    color: white;
    font-weight: 500;
    border-radius: 0.375rem;
    transition: background-color 0.3s ease;
    text-align: center;
    cursor: pointer;

    &:hover {
        background-color: #545454;
    }
`;

const Button = ({
    label,
    type,
    onClick,
   ...props
}: ButtonProps) => {
    return(
        <StyledButton type={type} onClick={onClick} {...props}>
            {label}
        </StyledButton>
    );
};

export default Button;