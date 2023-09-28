import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';

export const Forma = styled(Form)`
    width: 600px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    border-radius: 20px;
    border: 2px solid #111;
`;

export const FormInput = styled(Field)`
    width: 500px;
    padding: 20px 40px;
    border-radius: 40px;
    border: 2px solid #111;
    outline: none;
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
`;

export const ErrorMsg = styled(ErrorMessage)`
    color: red;
`;

export const AddBtn = styled.button`
    margin: 0 auto;
    width: 300px;
    height: 64px;
    padding: 0;
    border: transparent;
    border-radius: 40px;
    background-color: #111;
    color: white;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    margin-top: 20px;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: #111;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
`;
