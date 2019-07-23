import React, { Component } from "react";
import axios from "axios";
import "../index.css";

class StoryControl extends Component {
  constructor(props) {
    super();
    this.state = {
      name: [],
    }
  };

componentDidMount() {
  axios.get('/stories/view')
  .then(res => {
    const stories = res.data;
    let newState = [];
    for (let name in stories) {
      newState.push({
        _id: name,
        date: stories[name].date,
        name: stories[name].name,
        location: stories[name].location,
        email: stories[name].email,
        occupation: stories[name].occupation,
        bio: stories[name].bio,
        childAge: stories[name].childAge,
        storyTitle: stories[name].storyTitle,
        story: stories[name].story,
        lessons: stories[name].lessons,
      });
    }
    this.setState({
      name: newState
    });
  });
};

// deleteStory = (story) => {
//   axios.delete(`/stories/${story}`)
//     .then(res => {
//       console.log(res);
//     })
//     .catch(err => {
//       console.log(err);
//     })
// };

  render() {

    return (
      <div>
        <h6 id="controlHeader">Below you will find all of the user submissions for MommyFails</h6>
        {this.state.name.map(name => (
          <div className = "storyControl">
           <p id="controlRow"><span id="label">Name: </span><span id="value" key={name.id}>{name.name}</span></p>
           <p id="controlRow"><span id="label">Email: </span><span id="value" key={name.id}>{name.email}</span></p>
           <p id="controlRow"><span id="label">Location: </span><span id="value" key={name.id}>{name.location}</span></p>
           <p id="controlRow"><span id="label">Occupation: </span><span id="value" key={name.id}>{name.occupation}</span></p>
           <p id="controlRow"><span id="label">Bio: </span><span id="value" key={name.id}>{name.bio}</span></p>
           <p id="controlRow"><span id="label">Child Age: </span><span id="value" key={name.id}>{name.childAge}</span></p>
           <p id="controlRow"><span id="label">Story Title: </span><span id="value" key={name.id}>{name.storyTitle}</span></p>
           <p id="controlRow"><span id="label">Story: </span><span id="value" key={name.id}>{name.story}</span></p>
           <p id="controlRow"><span id="label">Lessons: </span><span id="value" key={name.id}>{name.lessons}</span></p>
           {/*
             <a id="delete" onDoubleClick={() => this.deleteStory(name.story)}>Delete Story</a>
             */}
          </div>
        ))}
      </div>
    )
  };
};

export default StoryControl;
