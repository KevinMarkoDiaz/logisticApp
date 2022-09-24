const setTokenLS = ({ data }) => {
    localStorage.setItem('token', data.token)
};
const getTokenLS = () => {
    localStorage.getItem('token')
};
export {
    setTokenLS,
    getTokenLS
};