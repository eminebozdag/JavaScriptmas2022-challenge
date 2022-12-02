import userData from "./data";

const transformData = (data) => {
  return data.map((user) => ({
    fullName: `${user.name.first} ${user.name.last}`,
    birthday: new Date(user.dob.date).toDateString(),
  }));
};

console.log(transformData(userData));
