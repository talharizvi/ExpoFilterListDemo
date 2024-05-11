interface User {
    name: string;
    type: number;
}

const filterUsersByType = (users: User[], userType: string): User[] => {
    return users.filter(({ type }) => {
        if (userType === 'admin') {
            return type === 0;
        } else {
            return type === 1;
        }
    });
};

export {filterUsersByType}