import "./App.css";

function App() {
  return (
    <main className="container">
      <div className="card card-stars">
        <h1>
          Social Media <span>10x</span> <i>Faster</i> with AI
        </h1>

        <img
          src="/assets/images/illustration-five-stars.webp"
          alt="illustrtion of 5 stars"
        />

        <p>Over 4,000 5-star reviews</p>
      </div>

      <div className="card card-platforms">
        <img
          src="/assets/images/illustration-multiple-platforms.webp"
          alt="illustrtion of mulitple platforms"
        />

        <h1>Manage multiple accounts and platforms.</h1>
      </div>

      <div className="card card-consistent">
        <h1>Maintain a consistent posting schedule.</h1>
        <img
          src="/assets/images/illustration-consistent-schedule.webp"
          alt="illustrtion of consistent schedule"
        />
      </div>

      <div className="card card-schedule">
        <h1>Schedule to social media.</h1>

        <img
          src="/assets/images/illustration-schedule-posts.webp"
          alt="illustrtion of best time to post"
        />

        <p>
          Optimize post timings to publish content at the perfect time for your
          audience.
        </p>
      </div>

      <div className="card card-followers">
        <img
          src="/assets/images/illustration-grow-followers.webp"
          alt="illustrtion of followers growth"
        />

        <h1>Grow followers with non-stop content.</h1>
      </div>

      <div className="card card-audience">
        <h1>&gt;56%</h1>
        <p>faster audience growth</p>
        <img
          src="/assets/images/illustration-audience-growth.webp"
          alt="illustrtion of audience growth"
        />
      </div>

      <div className="card card-create">
        <h1>
          Create and schedule content <i>quicker.</i>
        </h1>

        <img
          src="/assets/images/illustration-create-post.webp"
          alt="illustrtion of create a post"
        />
      </div>

      <div className="card card-ai">
        <h1>Write your content using AI.</h1>
        <img
          src="/assets/images/illustration-ai-content.webp"
          alt="illustrtion of ai content"
        />
      </div>
    </main>
  );
}

export default App;
