import React, { Component, createFactory } from "react";
import { Button, Form, Input, Message } from "semantic-ui-react";
import Layout from "../../components/Layout";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";

import { Router } from "../../routes";

//ipfs requirements
const ipfsClient = require("ipfs-http-client");

const ipfs = ipfsClient({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
});
const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];
class newRecord extends Component {
  state = {
    name: "",
    bufferReport: null,
    bufferPrescription: null,
    account: null,
    errorMessage: "",
    loading: false,
    age: "",
    gender: "",
    height: "",
    weight: "",
    imageHash: "",
    doctorAddress: this.props.doctor,
    message: "",
    visible: true,
  };

  static getInitialProps(props) {
    return { doctor: props.query.address };
  }

  async componentDidMount() {
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
  }

  captureFilePrescription = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      this.setState({ bufferPrescription: Buffer(reader.result) });
      console.log("bufferPrescription", this.state.bufferPrescription);
    };
  };

  captureFileReport = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      this.setState({ bufferReport: Buffer(reader.result) });
      console.log("bufferReport", this.state.bufferReport);
    };
  };

  captureFileImage = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      this.setState({ imageHash: Buffer(reader.result) });
      console.log("imageHash", this.state.imageHash);
    };
  };

  onSubmit = async (event) => {
    event.preventDefault();
    const { name, age, gender, height, weight, doctorAddress } = this.state;
    this.setState({
      loading: true,
      visible: false,
      message: "your files are being uploaded to ipfs",
      errorMessage: "",
    });
    try {
      const resultPrescription = await ipfs.add(this.state.bufferPrescription);
      const resultReport = await ipfs.add(this.state.bufferReport);
      const imageHash = await ipfs.add(this.state.imageHash);
      const link = "https://ipfs.infura.io/ipfs/";
      this.setState({ message: "added your files, creating your record" });
      await factory.methods
        .createRecord(
          name,
          age,
          gender,
          height,
          weight,
          doctorAddress,
          link + resultPrescription.path,
          link + resultReport.path,
          link + imageHash.path
        )
        .send({ from: this.state.account });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
    Router.pushRoute("/all");
  };

  render() {
    return (
      <Layout>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Group widths="equal">
            <Form.Input
              label="name"
              placeholder="name"
              onChange={(event, { value }) => {
                this.setState({ name: value });
              }}
            />
            <Form.Input
              label="age"
              placeholder="age"
              onChange={(e, { value }) => {
                this.setState({ age: value });
              }}
            />
            <Form.Select
              label="gender"
              placeholder="gender"
              options={options}
              onChange={(event, { value }) => {
                this.setState({ gender: value });
              }}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              label="height"
              placeholder="height"
              onChange={(event, { value }) => {
                this.setState({ height: value });
              }}
            />
            <Form.Input
              label="weight"
              placeholder="weight"
              onChange={(e, { value }) => {
                this.setState({ weight: value });
              }}
            />
            <Form.Input
              label="Profile Image"
              type="file"
              onChange={this.captureFileImage}
            />
          </Form.Group>
          <Form.Field>
            <label>prescriptions(if any previous prescriptions)</label>
            <Form.Input type="file" onChange={this.captureFilePrescription} />
          </Form.Field>
          <Form.Field>
            <label>reports(if any previous reports)</label>
            <Form.Input type="file" onChange={this.captureFileReport} />
          </Form.Field>
          <Message error header="Oops!!" content={this.state.errorMessage} />
          <Message
            info
            header="Please wait It may take two minutes!!"
            content={this.state.message}
            hidden={this.state.visible}
          />
          <Button loading={this.state.loading} primary type="submit">
            Create
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default newRecord;
