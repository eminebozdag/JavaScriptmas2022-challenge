const candies = (children, candy) => {
  return candy - (candy % children);
};

export default candies;
