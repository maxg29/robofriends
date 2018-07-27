import React from 'react';

class Card extends React.Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     idToRemove: null,
    //   };
    // }

    render() {
        // console.log(this.props.id);
        return(
            <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robotphoto' src={`https://robohash.org/${this.props.name}?200x200`} />
            <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.email}</p>
                <button className="f6 link dim br3 ph3 pv2 mb2 dib white bg-mid-gray"
                >
                Remove
                </button>
            </div>
        </div>
        );
    }
}

export default Card;
