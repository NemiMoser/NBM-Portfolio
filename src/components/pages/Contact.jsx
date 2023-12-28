import './Portfolio.css';

export default function Contact() {

    return (
      <div>
        <h2>contact</h2>
        
        <div className="row">
          <div className="col-6-md">
            <form>
              <div className="form-group">
                <label htmlFor="name">name:</label>
                <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
                />
              <div className="invalid-feedback">Name is required</div>
          </div>

              <div className="form-group">
                <label htmlFor="email">email:</label>
                <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                required
                />
              <div className="invalid-feedback">Valid email is required</div>
              </div>

              <div className="form-group">
                <label htmlFor="message">message:</label>
                <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
              <div className="invalid-feedback">Message is required</div>
            </div>

            <button type="submit" className="btn btn-primary">submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  };
