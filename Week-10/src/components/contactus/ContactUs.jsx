const ContactUs = () => {
  return (
    <div className="contactUs">
      <form className="form">
      <h3 class="formTitle">Info Form</h3>
      <label>
        <span>Title:</span>
        <span>
          <span><input type="radio" name="title" />&nbsp;Mr</span>
          <span><input type="radio" name="title" />&nbsp;Mrs</span>
          <span><input type="radio" name="title" />&nbsp;Miss</span></span>
      </label>
      <label>
        <span>First name:</span>
        <input type="text" name="firstName" placeholder="Enter first name" required />
      </label>
      <label>
        <span>Last name:</span>
        <input type="text" name="lastName" placeholder="Enter last name" required />
      </label>
      <label>
        <span>Email</span>
        <input type="email" name="email" placeholder="Enter email" required />
      </label>
      <label>
        <span>Phone number</span>
        <input type="tel" name="phoneNumber" placeholder="Enter phone number" required />
      </label>
      <label>
        <span>Password</span>
        <input type="password" name="pasword" placeholder="Enter password" required />
      </label>
      <label>
        <span>Confirm password</span>
        <input type="password" name="confirmPassword" placeholder="Enter confirm password" required />
      </label>
      <label>
        <span>Country</span>
        <select>
          <option>India</option>
          <option>USA</option>
          <option>Canada</option>
        </select>
      </label>
      <label class="agreeCheckbox">
        <input type="checkbox" />
        <span>I agree to the <span><a href="https://www.google.com/" target="_blank">terms and
              conditions</a></span></span>
      </label>
      <button type="submit">Sign up</button>
    </form>
  
    </div>
  )
}

export default ContactUs