import * as React from 'react';
export class FriendsList extends React.Component {

  constructor(props) {
    super(props);
    // const friends: IFriends = { friends: [{ name: 'saurabh', id: 222}, { name: 'Michale', id: 111}]};
    // this.state = friends;
  }

  render() {
    return (
      <div>
        <h1>List of New Friends!</h1>
        {/* {friends} */}
        <p> hello from a new react app </p>
      </div>
    );
  }
}
