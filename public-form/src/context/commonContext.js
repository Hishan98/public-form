import axios from "axios"
import { createContext, useState, useEffect } from "react"

import { toast } from 'react-toastify';

export const CommonContext = createContext({});
const CommonContextProvider = (props) => {

    const host = "http://localhost:3000"
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const loadUserList = async () => {
            try {
                const userData = await userDataFun(host);
                setUserData(userData)

            } catch (error) {
                toast.error(error, {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        };

        loadUserList();
    }, []);



    return (
        <CommonContext.Provider
            value={{
                userData,
                host
            }}>
            {props.children}
        </CommonContext.Provider>
    )
}

const userDataFun = async (host) => {
    try {
        const userData = await axios.get(host + '/api/user');
        return userData.data.results
        // console.log(userData.data.results.userName);
    } catch (error) {
        return error
    }
}

export default CommonContextProvider