
import userSlices from "../Slices/userSlices";

const actions = userSlices.actions;

const fetchMiddleware = () => async (dispatch) => {
    try {
        dispatch(actions.pending());
        const user = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const userData = await user.json();
        console.log(userData);
        dispatch(actions.fulfilled(userData));
    } catch (err) {
        dispatch(actions.rejected(err));
    }
};

export default fetchMiddleware;