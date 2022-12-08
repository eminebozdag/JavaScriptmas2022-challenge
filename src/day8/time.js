const validTime = (str) => {
  const time = str.split(":");
  const hour = parseInt(time[0]);
  const minute = parseInt(time[1]);
  console.log(typeof hour, typeof minute);
  return hour < 0 || hour > 23 || minute < 0 || minute > 59 ? false : true;
};

export default validTime;
