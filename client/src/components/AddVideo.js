import react from 'react';
import { Form, } from 'semantic-ui-react';

class AddVideo extends React.Component {
    state = { title: "", duration: 0, genre: "", description: "", url: "" };

    handleChange = (e) => {
        const { name, value, } = e.target;
        this.setState({ [name]: value, });
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`/api/videos/${this.props.videoId}`, {...this.state, })
            .then(res => this.props.add(res.data))
        this.props.toggle();
    }

    render() {
        const { title, duration, genre, description, url } = this.state;

        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group width="equal">
                        <Form.Input
                            name="title"
                            label="Title"
                            placeholder="Title"
                            required
                            value={title}
                            onChange={this.handleChange}
                        />
                        <Form.Input
                            name="duration"
                            label="Duration"
                            placeholder="Duration"
                            required
                            value={duration}
                            onChange={this.handleChange}
                        />    
                    </Form.Group>
                    <Form.Group width="equal">
                        <Form.Input
                            name="description"
                            label="Description"
                            placeholder="Description"
                            required 
                            value={description}
                            onChange={this.handleChange}
                        />
                        <Form.Input
                            name="url"
                            label="Url"
                            placeholder="Url"
                            required
                            value={url}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                <Form.Button color="green">Submit</Form.Button>  
                </Form>
            </div>
        )
    }

}

export default AddVideo;