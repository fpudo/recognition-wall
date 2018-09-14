import React from 'react';
import styled from 'styled-components';
import townhall from '../assets/icons8-museum-50.png';

const CardPres = (props) => {
    return (
        <div className="timeline__block"> 
        <img alt="Image" className="timeline__image" src={townhall} /> 
        <div className="timeline__content">
            <AvatarWrapper textAlign={props.textAlign} >
                {props.content.employees.map(employee => 
                  <Avatar width="40" height="40" src={`employees/${employee.name}.jpg`} />  
                )}
            </AvatarWrapper> 
            <h3 className="timeline__headline">{props.content.date}</h3> 
            <p className="">{props.content.text}</p>
            <Button href={props.content.link} >Read More</Button>
        </div>
        <div className="timeline__info"> 
            <p className="timeline__date">Thursday, 1 January 1970</p>
        </div>
        </div>
    );
};

const AvatarWrapper = styled.div`
    text-align: ${props => props.textAlign};
`;

const Avatar = styled.img`
    border-radius: 50%;
    margin-left: 8px;
`;

const Button = styled.a`
	background-color:#3e76d6;
	-moz-border-radius:4px;
	-webkit-border-radius:4px;
	border-radius:4px;
	border:1px solid #4e6096;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size: 12px;
	padding: 4px 12px;
	text-decoration:none;
	text-shadow:0px 1px 0px #283966;
&:hover {
	background-color:#476e9e;
}
&:active {
	position:relative;
	top:1px;
}
`;

export default CardPres;
