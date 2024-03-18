export interface Register {
    userEntity: UserEntity;
    message:    string;
}

export interface UserEntity {
    id:          string;
    nombres:     string;
    apellidos:   string;
    username:    string;
    password:    string;
    role:        string;
    authorities: Authority[];
    tareas:      any[];
}

export interface Authority {
    authority: string;
}

