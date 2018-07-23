import React from 'react';

removeCard() {    
    this.props.removeItem(this.props.id);
}

const Card = ({ name, email, id }) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robotphoto' src={`https://robohash.org/${name}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
                <button type="button" className="close" onClick={this.removeCard}>&times;</button>
            </div>
        </div>
    );
}

export default Card;
