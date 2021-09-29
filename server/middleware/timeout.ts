const timeout = (req, res, next) => {
    setTimeout(() => next(), 500);
}
  
export default timeout;
  