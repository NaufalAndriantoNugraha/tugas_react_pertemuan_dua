export default function Footer() {
  return (
    <footer class="py-4 border-top">
      <div class="container d-flex flex-wrap justify-content-between align-items-center">
        <div class="col-md-4 d-flex align-items-center gap-2">
          <i
            class="fa-solid fa-book-open fa-lg"
            style={{ color: "#0d6efd" }}
          ></i>
          <span class="fw-semibold" style={{ color: "#0d6efd" }}>
            Digital Library
          </span>
        </div>
        <ul class="nav col-md-4 justify-content-end">
          <li class="nav-item">
            <a href="/" class="nav-link px-2 text-body-secondary">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a href="#books" class="nav-link px-2 text-body-secondary">
              Books
            </a>
          </li>
          <li class="nav-item">
            <a href="#teams" class="nav-link px-2 text-body-secondary">
              Teams
            </a>
          </li>
          <li class="nav-item">
            <a href="#contact" class="nav-link px-2 text-body-secondary">
              Contact
            </a>
          </li>
        </ul>
        <p
          class="text-body-secondary mt-3 mb-0 w-100 text-center"
          style={{ fontSize: "0.85rem" }}
        >
          © 2025 Digital Library. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
