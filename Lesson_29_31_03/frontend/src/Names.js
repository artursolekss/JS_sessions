import React from 'react'
import Input from './Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

class Names extends React.Component {
    constructor() {
        super();
        this.state = {
            names: [],
            namesInital: [],
            namesChanged: [],
            editable: false
        }

        this.setInitalValues();

    }

    setInitalValues = () => {
        let self = this;
        fetch("http://localhost:5000/get-names", {
            method: "GET"
        }).then(function (response) {
            if (response.ok) {
                response.json().then(json => {
                    self.setEntries(json.response);
                    self.setInitialEntries([...json.response]);
                })
            }
        })
    }

    setInitialEntries = (values) => {

        const initvalues = []
        values.map((obj) => {
            initvalues.push(Object.assign({}, obj));
        })

        this.setState({ namesInital: initvalues });
    }

    setEntries = (values) => {
        this.setState({ names: values })
    }

    setChanged = (values) => {
        this.setState({ namesChanged: values })
    }

    onChange = (event, id, name) => {

        if (name === "name") {
            this.state.names.find(obj => {
                return obj.ID === id
            }).name = event.target.value;
        }
        else if (name === "lastname") {
            this.state.names.find(obj => {
                return obj.ID === id
            }).lastname = event.target.value;
        }

        const namesTab = [...this.state.names];
        this.setEntries(namesTab);

        const namesChangedTab = [...this.state.namesChanged];
        namesChangedTab[id] = true;
        this.setChanged(namesChangedTab);

    }

    getObjectsChanged = () => {
        const objectsChanged = [];
        let self = this;
        this.state.namesChanged.map((val, id) => {
            if (val !== undefined) {
                objectsChanged.push(self.state.names.find(obj => {
                    return obj.ID === id;
                }))
            }
        })
        return objectsChanged;

    }

    onSubmitChange = (event) => {
        const headers = new Headers();
        headers.append("Content-type", "application/json");

        const entriesChanged = this.getObjectsChanged();
        fetch('http://localhost:5000/change-names', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(entriesChanged)
        }).then(function (response) {
            return response.json;
        })
        event.preventDefault();
    }

    onDeleteEntry = (ID) => {
        const headers = new Headers();
        headers.append("Content-type", "application/json");

        fetch('http://localhost:5000/delete-name', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({ id: ID })
        }).then(function (response) {
            return response.json;
        })
        this.setInitalValues();
    }


    onEdit = () => {
        this.setState({ editable: true });
    }

    onCancel = () => {
        const namesInitTab = [...this.state.namesInital];
        this.setState({ editable: false, names: namesInitTab });
    }

    render() {
        return (

            <form onSubmit={this.onSubmitChange}>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Last Name
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {!(this.state.names === undefined) && this.state.names.map((item) => {
                            return (
                                <tr key={item.ID}>
                                    {/* <td>{item.name}</td>
                                <td>{item.lastname}</td> */}
                                    <td><Input initValue={item.name} onChange={this.onChange} id={item.ID} fieldname="name" editable={!this.state.editable} /></td>
                                    <td><Input initValue={item.lastname} onChange={this.onChange} id={item.ID} fieldname="lastname" editable={!this.state.editable} /></td>
                                    <td><button type='button' onClick={() => this.onDeleteEntry(item.ID)}><FontAwesomeIcon icon={faTrash} /></button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <button>Save</button>
                <button type='button' onClick={this.onEdit}>Edit</button>
                <button type='button' onClick={this.onCancel}>Cancel</button>
            </form>
        )
    }
}

export default Names;