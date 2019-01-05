import React from 'react';
import axios from 'axios';

class AddVideo extends React.Component {
    state = { title: "", duration: 0, genre: "", description: "", url: "" };

    handleChange = (e) => {
        const { name, value, } = e.target;
        this.setState({ [name]: value, });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`/api/videos/${this.props.videoId}`, { ...this.state, })
            .then(res => this.props.add(res.data))
        this.props.toggle();
    }

    render() {
        const { title, duration, genre, description, url } = this.state;

        return (
            <form>
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
                <select>
                    <option value="Action">Action</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Horror">Horror</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                    <option value="Drama">Drama</option>
                    <option value="Documentary">Documentary</option>
                </select>
                <input
                    name="url"
                    label="Url"
                    placeholder="Url"
                    required
                    value={url}
                    onChange={this.handleChange}
                />    
                <button color="green">Submit</button>
            </form>
        )
    }

}


/* <input 
        name="genre"
        label="Genre"
        placeholder="Genre"
        required
        value={genre}
        onChange={this.handleChange}
    /> */

export default AddVideo;