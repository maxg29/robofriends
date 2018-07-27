import React from 'react';
import Card from './Card';

class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: this.props.robots,
    };
  }

  render(){
    
    // if(true) {
    //   throw new Error('NOOOOOO');
    // }

    return (
      <div>
        {
          this.props.robots.map((users, i) => {
            return (
              <Card
                key={i}
                id={this.props.robots[i].id}
                name={this.props.robots[i].name}
                email={this.props.robots[i].email}
                value={this.state.robots[i]} 
                // onClick={this.props.remove(this.props.robots[i].id)}
              />
            );
          })
        }
      </div>
    );
  }
}

export default CardList;
