export default function Contact() {
  return (
    <section id="contact" class="py-5 bg-body-tertiary">
      <div class="container">
        <h1 class="fw-semibold text-center mb-2">Contact Us</h1>
        <p class="text-center text-body-secondary mb-5">
          Have a question? We'd love to hear from you.
        </p>
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="mb-3">
              <label class="form-label fw-semibold">Name</label>
              <input type="text" class="form-control" placeholder="Your name" />
            </div>
            <div class="mb-3">
              <label class="form-label fw-semibold">Email</label>
              <input
                type="email"
                class="form-control"
                placeholder="your@email.com"
              />
            </div>
            <div class="mb-4">
              <label class="form-label fw-semibold">Message</label>
              <textarea
                class="form-control"
                rows="5"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <div class="d-grid">
              <button type="button" class="btn btn-primary btn-lg">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
