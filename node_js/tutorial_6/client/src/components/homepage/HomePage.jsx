import "./HomePage.css";
import Header from "../header/Header";

function HomePage() {
  return (
    <div>
      <Header></Header>

      <main>
        <section className="section paragraph-section">
          <h3>Welcome to the travel book and planner</h3>
          <p>
            Here you can add your preferred locations for you to travel. You may
            add the cities that you have already visited. Also, you can add the
            cities that you want to visit in the future. Having this list of
            cities, you will always keep track of the places that you want to
            visit. Happy travelling :)
          </p>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
