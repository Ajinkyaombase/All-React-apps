import { createStore } from "redux";

const initialstate = {
  personList: [],
  //courseList: [],
};

const reducer = (state = initialstate, action) => {
  const { type, payload } = action;
  const personListCopy = [...state.personList];
  //const courseListCopy = [...state.courseList];

  switch (type) {
    case "PERSON_ADD":
      const id = payload.id ? payload.id : state.personList.length + 1;
      personListCopy.push({ ...payload, id });
      return {
        personList: personListCopy,
      };

    case "PERSON_DELETE":
      console.log(payload);
      personListCopy.splice(payload, 1);
      alert("Deleted");
      return {
        ...state,
        personList: personListCopy,
      };

    case "PERSON_UPDATE":
      let objectToBeUpdatedIndex = personListCopy.findIndex(
        (person) => person.id === payload.id
      );
      personListCopy[objectToBeUpdatedIndex] = {
        ...personListCopy[objectToBeUpdatedIndex],
        ...payload,
      };
      console.log(payload);
      return {
        ...state,
        personList: personListCopy,
      };

    // case "COURSE_ADD":
    //   console.log(payload);
    //   courseListCopy.push(payload);
    //   return {
    //     ...state,
    //     courseList: courseListCopy,
    //   };
    // case "COURSE_DELETE":
    //   console.log(payload);
    //   courseListCopy.splice(payload, 1);
    //   alert("Deleted");
    //   return {
    //     ...state,
    //     courseList: courseListCopy,
    //   };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
