import styled from 'vue-styled-components';

const Button = styled.button`
    height: 4rem;
    background-color: red;
    width: 85%;
    padding: .5rem;
    margin-top: 2rem;
    text-decoration: none;
    border-radius: 1rem;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all .1s;
    
    &:hover {
        transform: translateY(-.3rem);
        box-shadow: 0rem .5rem 1.3rem 0 rgba(0,0,0,.5);
    }
    &:active {
        transform: translateY(-.1rem);
        box-shadow: 0rem .5rem 1.3rem 0 rgba(0,0,0,.5);
    }
`;

export { Button }