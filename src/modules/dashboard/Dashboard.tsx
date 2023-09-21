import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FoodItems } from "../../appInterface";
import { DataContext } from "../../context/DataProvider";
import Footer from "../common/Footer/Footer";
import Header from "../common/Header/Header";
import "./Dashboard.css";

function Dashboard() {
  const { topRated, allCategories, dishesNearYou } = useContext(DataContext);

  const navigate = useNavigate();

  const foodDetails = (item: FoodItems) => {
    navigate("/food-details", { state: item });
  };

  const renderCard = (items: FoodItems) => (
    <div className="custom-card-container">
      <div className="card pointer custom-card" onClick={() => foodDetails(items)} key={items.id}>
        <div className="card-body d-flex flex-column align-items-center text-center">
          <img
            src={items.url}
            className="card-img-top"
            alt="icon"
            style={{width: "300px", height: "280px", borderRadius: "15px 15px 0 0", marginTop:"-50px" }}
          />
          <h4 className="card-title fw-600 custom-title custom-border" style={{ marginTop: "20px" }}>{items.name}</h4>
        </div>
      </div>
    </div>
  );
  

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container mb-5">
          <h4 className="my-4 fw-600 d-blue title-1">Top Rated</h4>
          <div className="row">
            {topRated.map((items: FoodItems) => (
              <div className="col-md-4" key={items.id}>
                {renderCard(items)}
              </div>
            ))}
          </div>
          <h4 className="my-4 fw-600 d-blue title-1">All Categories</h4>
          <div className="row">
            {allCategories.map((items: FoodItems) => (
              <div className="col-md-4" key={items.id}>
                {renderCard(items)}
              </div>
            ))}
          </div>
          <h4 className="my-4 fw-600 d-blue title-1">Dishes Near You</h4>
          <div className="row">
            {dishesNearYou.map((items: FoodItems) => (
              <div className="col-md-4" key={items.id}>
                {renderCard(items)}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;