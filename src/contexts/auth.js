import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const userToken = localStorage.getItem("userToken");
        const usersStorage = localStorage.getItem("usersDB");

        if (userToken && usersStorage) {
            const hasUser = JSON.parse(usersStorage)?.filter(
                (user) => user.email === JSON.parse(userToken).email
            );

            if (hasUser) setUser(hasUser[0]);
        }
    }, []);

    const signin = (email, password) => {
        const usersStorage = JSON.parse(localStorage.getItem("usersDB"));
        const hasUser = usersStorage?.filter((user) => user.email === email);

        if (hasUser?.length) {
            if (hasUser[0].email === email && hasUser[0].password === password) {
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem("userToken", JSON.stringify({ email, token }));
                setUser({ email, password });
                return;
            } else {
                return "Email e/ou senha incorretos";
            }
        } else {
            return "Usuário não cadastrado";
        }
    };

    const signup = (email, password) => {
        const usersStorage = JSON.parse(localStorage.getItem("usersDB"));
        const hasUser = usersStorage?.filter((user) => user.email === email);

        if (hasUser?.length) {
            return "Já existe uma conta usando esse Email";
        }
        let newUser;
        if (usersStorage) {
            newUser = [...usersStorage, { email, password }];
        } else {
            newUser = [{ email, password }];
        }
        localStorage.setItem("usersDB", JSON.stringify(newUser));
        return;
    };

    const signout = () => {
        setUser(null);
        localStorage.removeItem("userToken");
    };

    return (
        <AuthContext.Provider
            value={{ user, signed: !!user, signin, signup, signout }}
        >
            {children}
        </AuthContext.Provider>
    );
};