export default function registerPage() {
    return (
        <div>
        <h1>Register Page</h1>
        <form action="">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
            <button type="submit">Register</button>
        </form>
        </div>
    );
}