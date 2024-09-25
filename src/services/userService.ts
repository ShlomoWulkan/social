import NewUserDto from '../DTO/newUserDto';
import User from '../models/userModel';
import { getFileData, saveFileData } from '../config/fileDataLayer';

class UserService {
    public static async createMNewUser(newUser: NewUserDto): Promise<boolean> {
        const { userName, password, email, birthDate, avatarUrl } = newUser;
        const user: User = new User(
            userName,
            password,
            email,
            birthDate,
            avatarUrl
        );

        let users: User[] = await getFileData<User>('users') as User[];
        if (!users)  users = [];
        users.push(user);
        return await saveFileData('users', users);
    }
}

export default UserService;
