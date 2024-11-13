import styled from "styled-components";

interface InputFileProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    error?: string;
    name?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Añadimos onChange personalizado
}

const StyledLabel = styled.label<{ $error?: string }>`
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: white;
  color: #747576;
  border: ${({ $error }) => ($error ? '1px solid #f08484' : '1px solid #e2e8f0')};
  cursor: pointer;

  &:focus-within {
    outline: none;
    border-color: transparent;
    box-shadow: 0 0 0 2px #4299e1;
  }
`;

const HiddenInput = styled.input`
  display: none;
`;

const ErrorText = styled.p`
  color: #f79393;
  font-size: 12px;
  margin-top: 5px;
`;

const InputFile = ({
    placeholder = "Selecciona un archivo",
    type = "file",
    error,
    name,
    onChange,
    ...props
}: InputFileProps) => {
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e);
        }
    };

    return (
        <div>
            <StyledLabel $error={error}>
                {placeholder}
                <HiddenInput
                    type={type}
                    name={name}
                    onChange={handleFileChange} 
                    {...props}
                />
            </StyledLabel>
            {error && <ErrorText>{error}</ErrorText>}
        </div>
    );
};

export default InputFile;
