function Contact() {
  return (
    <div className="container">
      <h1>Contact Us</h1>

      <br />

      <form>
        <input
          type="text"
          placeholder="Enter Name"
        />

        <input
          type="email"
          placeholder="Enter Email"
        />

        <textarea
          rows="5"
          placeholder="Message"
        ></textarea>

        <button>Send</button>
      </form>
    </div>
  );
}

export default Contact;