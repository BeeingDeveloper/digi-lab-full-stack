import axios from 'axios'

const baseURL = 'https://digi-lab-backend.onrender.com/'

// USER API
// export const createNewUser = async(credentials)=>{

//     // const uid = credentials.user_id;
//     try {
//         // const foundUser = await axios.get()

//         const res = await axios.post(`${baseURL}api/users/create`, {...credentials});
//         return await res.data;
//     } catch (error) {
//         return null;
//     }
// }


// EMAIL API
export const sendEmail = async(data)=>{

    try {
        const res = await axios.post(`${baseURL}api/email/send`,{...data});
        return await res.data;
    } catch (error) {
        return null;
    }
}

export const fetchAllEmail = async()=>{
    try {
        const res = await axios.get(`${baseURL}api/email/get`);
        return await res.data;
    } catch (error) {
        return null;
    }
}

export const deleteEmailById = async(id)=>{
    try {
        const res = await axios.delete(`${baseURL}api/email/delete/${id}`);
        return await res.data;
    } catch (error) {
        return null;
    }
}





// UI API
export const fetchUiData = async()=>{

    try {
        const res = await axios.get(`${baseURL}api/ui-data/get`);
        return await res.data;
    } catch (error) {
        return null;
    }
}

export const updateUiData = async(id, data)=>{

    try {
        const res = await axios.put(`${baseURL}api/ui-data/update/${id}`, {...data});
        return await res.data;
    } catch (error) {
        return null;
    }
}