import React, { Component, Fragment } from 'react';
import CardPres from './CardPres';

const mockCard = [
    {
        date: 'September 18th',
        employees: [
            {name: 'Felipe'},
            {name: 'Leandro'},
        ],
        text: 'Lorem ipsum dolor sit amet.',
        recognition: 'Townhall',
        link: 'https://sqirl.sqbox.com',
    },
    {
        date: 'August 18th',
        employees: [
            {name: 'Felipe'},
            {name: 'Leandro'},
        ],
        text: 'Lorem ipsum dolor sit amet.',
        recognition: 'Townhall',
        link: 'https://sqirl.sqbox.com',
    },
];

class CardCont extends Component {

    

    render() {
        return (
            <Fragment>
              {mockCard.map((content, idx) => <CardPres textAlign={((idx + 1) % 2 === 0 ? 'left' : 'right')} content={content}  /> )}  
            </Fragment>
        );
    }
}

export default CardCont;