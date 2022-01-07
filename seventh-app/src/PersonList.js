import React, { Component } from "react";
import { connect } from "react-redux";

class PersonList extends Component {
  state = {
    selectedObject: null,
  };

  onResetClickHandler = () => {
    this.setState({ selectedObject: null });
  };
  onEditClickHandler = (person) => {
    console.log("edit", person);
    this.setState({ selectedObject: person });
  };
  onValueChangeHandler = (event) => {
    const { value, name } = event.target;
    this.setState({
      selectedObject: { ...this.state.selectedObject, [name]: value },
    });
  };
  render() {
    console.log(this.props.personList);
    return (
      <>
        <h1>Person</h1>
        <table className={"table"}>
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Name</th>
              <th>Age</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {this.props.personList.map((person, index) => {
              return (
                <tr key={person.id}>
                  <td>{person.id}</td>
                  <td>
                    {this.state.selectedObject &&
                    this.state.selectedObject.id === person.id ? (
                      <input
                        name="name"
                        value={this.state.selectedObject.name}
                        onChange={this.onValueChangeHandler}
                      />
                    ) : (
                      person.name
                    )}
                  </td>
                  <td>
                    {this.state.selectedObject &&
                    this.state.selectedObject.id === person.id ? (
                      <input
                        name="age"
                        value={this.state.selectedObject.age}
                        onChange={this.onValueChangeHandler}
                      />
                    ) : (
                      person.age
                    )}
                  </td>
                  <td>
                    {this.state.selectedObject &&
                    this.state.selectedObject.id === person.id ? (
                      <>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            console.log("gfdgfd");
                            this.props.updatePerson({
                              ...this.state.selectedObject,
                            });
                            this.onResetClickHandler();
                          }}
                        >
                          Update
                        </button>
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            this.onResetClickHandler();
                          }}
                        >
                          Reset
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            this.props.deletePersonByIndex(index);
                          }}
                        >
                          Delete
                        </button>
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            this.onEditClickHandler(person);
                          }}
                        >
                          Edit
                        </button>
                      </>
                    )}
                  </td>
                  <td></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    personList: state.personList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deletePersonByIndex: (index) =>
      dispatch({ type: "PERSON_DELETE", payload: index }),

    updatePerson: (person) =>
      dispatch({ type: "PERSON_UPDATE", payload: person }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonList);
