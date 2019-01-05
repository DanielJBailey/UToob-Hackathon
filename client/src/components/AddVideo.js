import React from "react";
import styled from "styled-components";
// import axios from 'axios';

class AddVideo extends React.Component {
  state = { title: "", duration: "", genre: "", description: "", url: "" };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { title, duration, genre, description, url } = this.state;

    return (
      <Container>
        <Form>
          <select value={genre} onChange={this.handleChange} name="genre">
            <option value="">Genre</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Horror">Horror</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Drama">Drama</option>
            <option value="Documentary">Documentary</option>
          </select>
          <input
            name="title"
            label="Title"
            placeholder="Title"
            required
            value={title}
            onChange={this.handleChange}
          />
          <input
            name="duration"
            label="Duration"
            placeholder="Duration"
            required
            value={duration}
            onChange={this.handleChange}
          />
          <input
            name="description"
            label="Description"
            placeholder="Description"
            required
            value={description}
            onChange={this.handleChange}
          />
          <input
            name="url"
            label="Url"
            placeholder="Url"
            required
            value={url}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" className="submit-button" />
        </Form>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input {
    width: 600px;
    padding: 20px;
    margin: 5px 0;
    font-size: 18px;
    border: none;
    background-color: #f1f2f6;
    border-radius: 5px;
    &::placeholder {
      color: #a4b0be;
    }
    @media (max-width: 425px) {
      width: 100%;
    }
  }
  select {
    align-self: flex-start;
    font-size: 18px;
    background-color: #f1f2f6;
    border: none;
    height: 40px;
    margin: 5px 0;
    &::placeholder {
      color: #a4b0be;
    }
  }

  .submit-button {
    width: 100%;
    background-color: #e02038;
    cursor: pointer;
    color: white;
    &:hover {
      background-color: #e74b5e;
    }
  }
`;
/* <input 
        name="genre"
        label="Genre"
        placeholder="Genre"
        required
        value={genre}
        onChange={this.handleChange}
    /> */

export default AddVideo;
