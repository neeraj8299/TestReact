export const getContactList = () => {
  return (dispatch) => {
    fetch("https://api23.searcheducation.com:4123/practice/contact")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res.Result);
        dispatch({
          type: "getContactList",
          payload: res.Result,
        });
      })
      .catch((err) => {
        throw err;
      });
  };
};

export const deleteData = (id) => {
  return (dispatch) => {
    fetch(`https://api23.searcheducation.com:4123/practice/contact/${id}`, {
      method: "Delete",
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        dispatch(getContactList());
      })
      .catch((err) => {
        throw err;
      });
  };
};
