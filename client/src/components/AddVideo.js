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
<div class="custom-select" style="width:200px;">
  <select>
    <option value="0">Action</option>
    <option value="1">Comedy</option>
    <option value="2">BMW</option>
    <option value="3">Citroen</option>
    <option value="4">Ford</option>
    <option value="5">Honda</option>
    <option value="6">Jaguar</option>
    <option value="7">Land Rover</option>
    <option value="8">Mercedes</option>
    <option value="9">Mini</option>
    <option value="10">Nissan</option>
    <option value="11">Toyota</option>
    <option value="12">Volvo</option>
  </select>
</div>

{/* <Form.Input 
    name="genre"
    label="Genre"
    placeholder="Genre"
    required
    value={genre}
    onChange={this.handleChange}
/> */}

export default AddVideo;