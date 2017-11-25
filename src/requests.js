import axios from 'axios';
import each from 'lodash/each';

let root = process.env.REACT_APP_HOST_URL;

export async function login(email, password, type) {
        let url = `${root}/api/1/login`
        let response = await axios.post(url, {email, password, type: 'customer'})
        let status = response.status
        console.log('status : ', status)
        console.log('repsonse : ', response)
        switch(status) {
            case 200: 
                return response.data
            default : 
                throw {status: status, message: 'login failed', error: response}
        }
}

export async function uploadAsset(fields, token, uploadProgressCallback) {
        let url = `${root}/api/1/media`
        console.log("fields", fields);
        var data = new FormData();

        each(fields, (value, key) => {
            data.append(key, value);
        })
        
        const config = {
            onUploadProgress: (progressEvent) => {
                var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
                uploadProgressCallback(percentCompleted)
            }, 
            headers: {
                Authorization: token
            }
        }
        let media = await axios.post(url, data, config)
        return media.data;
}

export async function getMedia(token) {
        let url = `${root}/api/1/media`
        const config = {
            headers: {
                Authorization: token
            }
        }
        let prospectInfo = await axios.get(url, config)
        return prospectInfo.data
}

export async function getAccountData(token) {
        let url = `${root}/api/1/accounts/me`
        const config = {
            headers: {
                Authorization: token
            }
        }
        let prospectInfo = await axios.get(url, config)
        return prospectInfo.data
}

export async function inviteAccount(fields) {
    const { email, user_type_key } = fields;
    let url = `${root}/api/1/prospects`
    let prospect = await axios.post(url, {email, user_type_key})
    return prospect
}

export async function postProject(fields, token) {
    let url = `${root}/api/1/projects`
     const config = {
            headers: {
                Authorization: token
            }
        }
    let project = await axios.post(url, fields, config)
    return project.data
}

export async function loadProspectData(prospectId) {
        let url = `${root}/api/1/prospects/${prospectId}`
        let prospectInfo = await axios.get(url)
        return prospectInfo.data
    }

export async function getCreateProjectConfig(prospectId) {
        let url = `${root}/api/1/projects/config`
        let prospectInfo = await axios.get(url)
        return prospectInfo.data
    }

export async function createAccount(requestObj) {
    const {
        name,
        password,
        token,
        prospect_key
    } = requestObj

    let url = `${root}/api/1/accounts`
    let loggedIn = await axios.post(url, {name, password, token, prospect_key})
    return loggedIn.data
    
}