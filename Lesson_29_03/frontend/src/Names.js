import React from 'react'

class Names extends React.Component {
    constructor() {
        super();
        this.state = {
            names: []
        }


        let self = this;
        fetch("http://localhost:5000/get-names", {
            method: "GET"
        }).then(function (response) {
            if (response.ok) {
                response.json().then(json => {
                    self.setEntries(json.response);
                })
            }
        })
    }

    setEntries = (values) => {
        this.setState({ names: values })
    }

    render() {
        return (

            <table>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Last Name
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {!(this.state.names === undefined) && this.state.names.map((item) => {
                        return (
                            <tr key={item.ID}>
                                <td>{item.name}</td>
                                <td>{item.lastname}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}

export default Names;