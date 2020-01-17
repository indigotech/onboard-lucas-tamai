import styled from 'styled-components/native'


export const SubmitButton = styled.TouchableOpacity`
    background-Color: ${(props) => (props.disabled ? '#d3d3d3' : '#7a42f4')};
    padding: 10px;
    margin-Top: 0px;
    margin-Bottom: 15px;
    margin-left: 15px;
    margin-right: 15px;
    height: 44px; 
    border-Radius: 6px;
    text-align: center;
`
;


