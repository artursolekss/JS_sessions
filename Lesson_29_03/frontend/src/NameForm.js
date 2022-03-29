import React from 'react'

class NameForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            lastname: ""
        }
    }

    onSubmit = (event) => {
        let headers = new Headers();
        headers.append("Content-type", "application/json");

        fetch('http://localhost:5000/add-name', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(this.state)
        }).then(function (response) {
            console.log(response);
            return response.json;
        })
        event.preventDefault();
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label>
                    Name:
                    <input value={this.state.name} name="name" onChange={this.onChange} />
                </label>
                <label>
                    Last Name:
                    <input value={this.state.lastname} name="lastname" onChange={this.onChange} />
                </label>
                <button>Submit</button>
            </form>
        )
    }
}

export default NameForm;