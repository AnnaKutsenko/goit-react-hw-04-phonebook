import styled from 'styled-components';

export const ContactsList = styled.ul`
    width: 600px;
    padding: 30px;
    border-radius: 20px;
    border: 2px solid #111;
`;

export const ContactsListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 10px 40px;
    border-radius: 40px;
    border: 2px solid #111;
    outline: none;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.33;
    text-transform: uppercase;
    background-color: white;
    margin-bottom: 10px;
    
`;

export const DeleteBtn = styled.button`
    padding: 10px 20px;
    border: transparent;
    border-radius: 40px;
    background-color: black;
    color: white;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
`;