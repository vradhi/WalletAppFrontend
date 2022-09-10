import React, { Component } from 'react';
//import axios from 'axios';
//import Dashboard from '../Dashboard';
import {createWallet} from '../../../actions/projectActions'
import {connect} from 'react-redux'

class CreateWallet extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            accountNumber: '',
            description: '',
            priority: ''
        }
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({errors:nextProps.errors})
    }

    changeHandler = (event, fieldName) => {
        this.setState({
            [fieldName]: event.target.value
        })
    }

    submitHandler = (event) => {
        const newWallet = {
            name: this.state.name,
            accountNumber: this.state.accountNumber,
            description: this.state.description,
            priority: this.state.priority
        }
       this.props.createWallet(newWallet)
        event.preventDefault();

    }
    render() {
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h5 className="display-4 text-center">Create Wallet</h5>
                            <hr />
                            <form onSubmit={(event)=>this.submitHandler(event)}>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg " onChange={(event) => this.changeHandler(event, "name")} placeholder="Account Name" />
                                    <p className="text-danger">{this.props.errors.name}</p>
                                </div>
                                <br></br>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg" onChange={(event) => this.changeHandler(event, "accountNumber")} placeholder="Account No" />
                                    <p className="text-danger">{this.props.errors.accountNumber}</p>
                                </div>
                                <br></br>
                                <div className="form-group">
                                    <textarea className="form-control form-control-lg" onChange={(event) => this.changeHandler(event, "description")} placeholder="Description"></textarea>
                                    <p className="text-danger">{this.props.errors.description}</p>
                                </div>
                                <br></br>
                                <div className="form-group">
                                    <select className="form-control form-control-lg" onChange={(event) => this.changeHandler(event, "priority")}>
                                        <option value={3}>Display Priority</option>
                                        <option value={1}>High</option>
                                        <option value={2}>Medium</option>
                                        <option value={3}>Low</option>
                                    </select>
                                </div>
                                <br></br>
                                <input type="submit" className="btn btn-primary btn-block mt-4" value="Create" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
   errors:state.errors
})

export default connect(mapStateToProps,{createWallet})(CreateWallet);