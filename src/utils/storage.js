const storage = {
  set : (name, val) => {
    let strVal = JSON.stringify(val);
    sessionStorage.setItem(name, strVal);
  } ,
  get : (name) => {
    let val = sessionStorage.getItem(name);
    return JSON.parse(val);
  }
}
export default storage;