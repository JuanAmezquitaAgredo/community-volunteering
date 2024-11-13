import { Control, Controller, FieldError, FieldValues, Path } from "react-hook-form";
import styled from "styled-components";
import InputFile from "../atoms/inputFile";

interface IpropsFormFileField<T extends FieldValues> {
    label: string;
    name: Path<T>;
    control: Control<T>;
    error?: FieldError;
    id?: string;
    placeholder?: string;
}

const FormFileFieldContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
`;

const Label = styled.label`
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: #202020;
`;

export const FormFileField = <T extends FieldValues>({
    label,
    name,
    control,
    error,
    id,
    placeholder,
}: IpropsFormFileField<T>) => {
    return (
        <FormFileFieldContainer>
            <Label htmlFor={id || label.toLowerCase()}>{label}</Label>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <InputFile
                        id={id || label.toLowerCase()}
                        error={error?.message}
                        placeholder={placeholder || `Sube tu ${label.toLowerCase()}`}
                        {...field}
                        onChange={(e) => {
                            field.onChange(e.target.files ? e.target.files[0] : null);
                        }}
                    />
                )}
            />
            {error && <p style={{ color: "#f79393", fontSize: "12px", marginTop: "5px" }}>{error.message}</p>}
        </FormFileFieldContainer>
    );
};
