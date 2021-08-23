import React from "react";
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            firstname: "",
            lastname: "",
            password: "",
            dob: "",
            age: "",
            adress: "",
            gender: "",
            mail: "",
            phoneNumber: "",
            tableData: [],
        };

    }
    handleFirstname = (e) => {
        this.setState({ firstname: e.target.value });
    };

    handleLastname = (e) => {
        this.setState({ lastname: e.target.value });
    };
    handlepassword = (e) => {
        this.setState({ password: e.target.value });
    };
    handledob = (e) => {
        this.setState({ dob: e.target.value });
    };
    handleage = (e) => {
        this.setState({ age: e.target.value });
    };
    handleadress = (e) => {
        this.setState({ adress: e.target.value });
    };

    handlegender = (event) => {
        this.setState({ gender: event.target.value });
    };
    handlemail = (e) => {
        this.setState({ mail: e.target.value });
    };
    handlephoneNumber = (e) => {
        this.setState({ phoneNumber: e.target.value });
    };
    onsubmit = () => {
        let tableobject = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            password: this.state.password,
            dob: this.state.dob,
            age: this.state.age,
            adress: this.state.adress,
            gender: this.state.gender,
            mail: this.state.mail,
            phoneNumber: this.state.phoneNumber,

        };
        let updatedData = this.state.tableData;
        updatedData.push(tableobject);
        this.setState({tableData:updatedData});
    };
   oncancel =() => {
       this.setState({
        firstname: "",
        lastname: "",
        password: "",
        dob: "",
        age: "",
        adress: "",
        gender: "",
        mail: "",
        phoneNumber: "",
       });
   }


render() {
    return (
        <div>
            <center>

                <tr>
                    <td>Firstname : </td>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input value={this.state.firstname} type="text" 
                    onChange={(e) => this.handleFirstname(e)}></input>
                </tr>
                <br></br>

                <tr>
                    <td>Lastname : </td>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input value={this.state.lastname} type="text" 
                    onChange={(e) => this.handleLastname(e)}></input>
                </tr>
                <br></br>

                <tr>
                    <td>Password : </td>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input value={this.state.password} type="password" 
                    onChange={(e) => this.handlepassword(e)} />
                </tr>
                <br></br>

                <tr>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <td>D.O.B : </td>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input value={this.state.dob} type="text" 
                    onChange={(e) => this.handledob(e)}></input>
                </tr>
                <br></br>

                <tr>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;<td>Age : </td>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input value={this.state.age} type="text" 
                    onChange={(e) => this.handleage(e)}></input>
                </tr>
                <br></br>

                <tr>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <td>Adress : </td>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input value={this.state.adress} type="text" 
                    onChange={(e) => this.handleadress(e)}></input>
                </tr>
                <br></br>


                <tr>
                    <td>Gender: </td>
                    &nbsp;
                    <input type="radio" name="gender" value="male" 
                    onChange={(e) => this.handlegender(e)}></input>
                    <label>Male</label> &nbsp;
                    <input type="radio" name="gender" value="female" 
                    onChange={(e) => this.handlegender(e)}></input>
                    <label>Female</label> &nbsp;
                </tr>
                <br></br>

                <tr>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<td>Mail : </td>
                    &nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input value={this.state.mail} type="text" 
                    onChange={(e) => this.handlemail(e)}></input>
                </tr>
                <br></br>

                <tr>
                    <td>Phone : </td>
                    <select>
                        <option> +91</option>
                        <option> +92</option>
                        <option> +93</option>
                        <option> +94</option>
                        <option> +95</option>
                        <option> +96</option>
                    </select>
                    <input value={this.state.phoneNumber} type="number" 
                    onChange={(e) => this.handlephoneNumber(e)}></input>
                </tr>

                <br />
                <tr>
                    <button onClick={() => this.onsubmit()}>sumbit</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={() => this.oncancel()}>cancel</button>
                </tr>
                <br></br>

            </center>

            <hr></hr>

            <table>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Password</th>
                    <th>DOB</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Gender</th>
                    <th>mail</th>
                    <th>phoneNumber</th>
                </tr>
                {this.state.tableData.map((data) => {
                    return (
                        <tr>
                            <td>{data.firstname}</td>
                            <td>{data.lastname}</td>

                            <td>{data.password}</td>
                            <td>{data.dob}</td>

                            <td>{data.age}</td>
                            <td>{data.gender}</td>
                            <td>{data.adress}</td>
                            <td>{data.mail}</td>
                            <td>{data.phoneNumber}</td>
                        </tr>
                    );
                })}
            </table>

        </div>
    );

}
}
export default Form;