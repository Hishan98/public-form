import axios from "axios"

const UserGen = async () => {


    try {
        const uerImg = await axios.get('https://randomuser.me/api/');

        return uerName.data.results[0].picture.medium
    } catch (error) {
        return error
    }
}

export default UserGen