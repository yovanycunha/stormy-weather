import styled from 'vue-styled-components';

const Input = styled.input`
    width: 85%;
    height: 2rem;
    border: none;
    border-bottom: solid .1rem black;
    background-color: #e6effa;
    padding: .5rem;
    margin-top: 2rem;

    &::placeholder {
        font-style: italic;
    }
`;

export { Input }