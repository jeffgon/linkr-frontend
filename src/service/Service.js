import axios from "axios";

export const urlAxios = "https://linkr-gjjd.onrender.com/";

export function postSingInSingUp(path, body) {
  const promise = axios.post(`${urlAxios + path}`, body);
  return promise;
}

export function getPersistLogin(path, token) {
  const promise = axios.get(`${urlAxios + path}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return promise;
}

export function postPost(path, submitObject, token) {
  const promise = axios.post(`${urlAxios + path}`, submitObject, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return promise;
}

export function editPost(path, editObject, token) {
  const promise = axios.put(`${urlAxios + path}`, editObject, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return promise;
}

export function deletePost(path, token) {
  const promise = axios.delete(`${urlAxios + path}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return promise;
}

export function getSearchUsers(path, params, followerId) {
  const promise = axios.get(
    `${urlAxios + path + "/" + params + "/" + followerId}`
  );
  return promise;
}

export function getComments(path, postId) {
  const promise = axios.get(`${urlAxios + path}/${postId}`);
  return promise;
}

export function postComment(path, postId, commentObject, token) {
  const promise = axios.post(`${urlAxios + path}/${postId}`, commentObject, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return promise;
}

export function checkFollow(path, followerId, followedId, token) {
  const promise = axios.get(
    `${urlAxios + path + "/" + followerId + "/" + followedId}`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return promise;
}

export function followOrUnfollow(path, followerId, followedId, token) {
  const promise = axios.post(
    `${urlAxios + path}`,
    { followerId, followedId },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return promise;
}

export function getNewPosts(path, token, lastPostDate) {
  const formatDate = lastPostDate.replace("T", " ").replace("Z", "");
  console.log(formatDate);
  const promise = axios.get(
    `${urlAxios + path}`,
    {
      params: { lastPostDate: formatDate },
    },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return promise;
}
