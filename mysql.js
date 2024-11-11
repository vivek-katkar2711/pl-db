import mysql from 'mysql2/promise';

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'vivek@987',
    database: 'mydb'
};

async function connectToDatabase() {
    try {
        const connection = await mysql.createConnection(dbConfig);
        console.log('Connected to the MySQL database');
        return connection;
    } catch (error) {
        console.error('Database connection failed:', error.message);
        throw error;
    }
}

async function createUser(name, email, mobile) {
    const connection = await connectToDatabase();
    try {
        const query = 'INSERT INTO users (name, email, mobile) VALUES (?, ?, ?)';
        const [result] = await connection.execute(query, [name, email, mobile]);
        console.log('User created with ID:', result.insertId);
    } catch (error) {
        console.error('Error creating user:', error.message);
    } finally {
        await connection.end();
    }
}

async function getAllUsers() {
    const connection = await connectToDatabase();
    try {
        const query = 'SELECT * FROM users';
        const [rows] = await connection.execute(query);
        console.log('All users:', rows);
        return rows;
    } catch (error) {
        console.error('Error fetching users:', error.message);
    } finally {
        await connection.end();
    }
}

async function getUserByEmail(email) {
    const connection = await connectToDatabase();
    try {
        const query = 'SELECT * FROM users WHERE email = ?';
        const [rows] = await connection.execute(query, [email]);
        console.log('User:', rows[0]);
        return rows[0];
    } catch (error) {
        console.error('Error fetching user:', error.message);
    } finally {
        await connection.end();
    }
}

async function updateUser(email, newData) {
    const connection = await connectToDatabase();
    try {
        const { name, mobile } = newData;
        const query = 'UPDATE users SET name = ?, mobile = ? WHERE email = ?';
        const [result] = await connection.execute(query, [name, mobile, email]);
        console.log('User updated:', result.affectedRows > 0);
    } catch (error) {
        console.error('Error updating user:', error.message);
    } finally {
        await connection.end();
    }
}

async function deleteUser(email) {
    const connection = await connectToDatabase();
    try {
        const query = 'DELETE FROM users WHERE email = ?';
        const [result] = await connection.execute(query, [email]);
        console.log('User deleted:', result.affectedRows > 0);
    } catch (error) {
        console.error('Error deleting user:', error.message);
    } finally {
        await connection.end();
    }
}

export { createUser, getAllUsers, getUserByEmail, updateUser, deleteUser };

(async () => {
    await createUser('John Doe', 'john.doe@example.com', '1234567890');
    const users = await getAllUsers();
    console.log(users);
    await updateUser('john.doe@example.com', { name: 'Jane Doe', mobile: '0987654321' });
    const user = await getUserByEmail('john.doe@example.com');
    console.log(user);
    await deleteUser('john.doe@example.com');
})();
