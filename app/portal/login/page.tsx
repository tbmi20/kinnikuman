export default function loginPage() {
  return (
    <div>
      <h1>Login Page</h1>
      <form action="">
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}