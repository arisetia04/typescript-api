import axios from "axios";
import { API_URL } from "../config/constants";

export const GetAllPost = () => {
    return axios
        .get(`${API_URL}/posts`)
        .then((res) => {
            return res.data;
        })
        .catch((err: { response: { data: any } }) => {
            return err.response;
        });
};

export const GetSinglePost = (id: number) => {
    return axios
        .get(`${API_URL}/posts/${id}`)
        .then((res) => {
            return res.data;
        })
        .catch((err: { response: { data: any } }) => {
            return err.response;
        });
};

export const CreatePost = (payload: {
    userId: number;
    title: string;
    body: string;
}) => {
    return axios
        .post(`${API_URL}/posts`, payload)
        .then((res) => {
            return res.data;
        })
        .catch((err: { response: { data: any } }) => {
            return err.response;
        });
};

export const UpdatePost = (
    id: number,
    payload: {
        userId: number;
        title: string;
        body: string;
    }
) => {
    return axios
        .put(`${API_URL}/posts/${id}`, payload)
        .then((res) => {
            return res.data;
        })
        .catch((err: { response: { data: any } }) => {
            return err.response;
        });
};

export const PatchPost = (
    id: number,
    payload: {
        userId: number;
        title: string;
        body: string;
    }
) => {
    return axios
        .patch(`${API_URL}/posts/${id}`, payload)
        .then((res) => {
            return res.data;
        })
        .catch((err: { response: { data: any } }) => {
            return err.response;
        });
};

export const DeletePost = (id: number) => {
    return axios
        .delete(`${API_URL}/posts/${id}`)
        .then((res) => {
            return res.data;
        })
        .catch((err: { response: { data: any } }) => {
            return err.response;
        });
};
