export default function ContactForm() {
  return (
    <form
      action="https://formsubmit.co/89e5371d1dacd1ec80a92107ac21a22b"
      method="POST"
    >
      <h1 class="margin-bottom">Get in touch</h1>
      <p class="margin-bottom">
        If you want to know more about me or my work, or if you would just like
        to say hello, send me a message. I'd love to hear from you.
      </p>
      <label for="name">
        Name <span class="highlight">*</span>
      </label>
      <input
        class="margin-bottom"
        type="text"
        placeholder="Your name"
        name="name"
        id="name"
        required
      />

      <label for="email">
        Email <span class="highlight">*</span>
      </label>
      <input
        class="margin-bottom"
        type="email"
        placeholder="Your email"
        name="email"
        id="email"
        required
      />

      <label for="message">
        Message <span class="highlight">*</span>
      </label>
      <textarea
        class="margin-bottom"
        name="message"
        id="message"
        placeholder="What's up?"
        required
      ></textarea>

      <button>Send</button>
    </form>
  );
}
