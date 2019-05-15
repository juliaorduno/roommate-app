import axios from 'axios';

export const instance = axios.create({
    baseURL: process.env.API_URL
});

function login(username, password) {
    const requestOptions = { username, password };

    return instance.post(`/login`, requestOptions)
      .then(user => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          // axios.defaults.headers.common['Authorization'] = `Bearer ${user.data.token}`

          instance.get(`/members/${username}`)
            .then( res => localStorage.setItem('currentUser', JSON.stringify(res.data)));
          return user;
      });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    // currentUserSubject.next(null);
}

export const authenticationService = {
    login,
    logout,
};