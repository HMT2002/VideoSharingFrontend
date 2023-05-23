

// POST
export const LoginAction = async (userData) => {
    if (!userData) {
        return { status: 'fail' };
    }
    const response = await fetch('https://videosharingbackend-production.up.railway.app/api/v1/users/signin', {
        crossDomain:true,

        method: 'POST',
        // mode: "cors",
        body: JSON.stringify(userData),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    return data;
};

// POST
export const RegisterAction = async (userData) => {
    if (!userData) {
        return { status: 'fail' };
    }
    const response = await fetch('https://videosharingbackend-production.up.railway.app/api/v1/users/signup', {
        crossDomain:true,

        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    return data;
};

// POST
export const RegisterActionFormDataVersion = async (userFormData) => {
    if (!userFormData) {
        return { status: 'fail' };
    }
    const response = await fetch('https://videosharingbackend-production.up.railway.app/api/v1/users/signup', {
          crossDomain:true,

        method: 'POST',
        body: userFormData,
    });
    const data = await response.json();
    return data;
};

// GET
export const CheckTokenAction = async (token) => {
    if (!token) {
        return { status: 'fail' };
    }
    const response = await fetch('https://videosharingbackend-production.up.railway.app/api/v1/auth/check-token', {
        method: 'GET',
        headers: {
            // 'Content-Type': 'application/json',
            Authorization: token,
        },
    });
    const data = await response.json();
    return data;
};
