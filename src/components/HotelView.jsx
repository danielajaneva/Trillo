import React from "react";

import sprite from "../img/symbol-defs.svg";
import img1 from "../img/hotel-1.jpg";
import img2 from "../img/hotel-2.jpg";
import img3 from "../img/hotel-3.jpg";

import u1 from "../img/user-1.jpg";
import u2 from "../img/user-2.jpg";
import u3 from "../img/user-3.jpg";
import u4 from "../img/user-4.jpg";
import u5 from "../img/user-5.jpg";
import u6 from "../img/user-6.jpg";

const HotelView = () => {
  return (
    <main className="hotel-view">
      <div className="gallery">
        <figure className="gallery__img">
          <img src={img1} alt="" className="gallery__photo" />
        </figure>
        <figure className="gallery__img">
          <img src={img2} alt="" className="gallery__photo" />
        </figure>
        <figure className="gallery__img">
          <img src={img3} alt="" className="gallery__photo" />
        </figure>
      </div>

      <div className="overview">
        <h1 className="overview__heading">Hotel Las Palmas</h1>
        <div className="overview__stars">
          <svg className="overview__icon-star">
            <use href={`${sprite}#icon-star`}></use>
          </svg>
          <svg className="overview__icon-star">
            <use href={`${sprite}#icon-star`}></use>
          </svg>
          <svg className="overview__icon-star">
            <use href={`${sprite}#icon-star`}></use>
          </svg>
          <svg className="overview__icon-star">
            <use href={`${sprite}#icon-star`}></use>
          </svg>
          <svg className="overview__icon-star">
            <use href={`${sprite}#icon-star`}></use>
          </svg>
        </div>

        <div className="overview__location">
          <svg className="overview__icon-location">
            <use href={`${sprite}#icon-location-pin`}></use>
          </svg>
          <button className="btn-inline">Albufeira, Portugal</button>
        </div>

        <div className="overview__rating">
          <div className="overview__rating-average">8.9</div>
          <div className="overview__rating--count">440 votes</div>
        </div>
      </div>

      <div className="detail">
        <div className="description">
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi
            dignissimos debitis ratione sapiente saepe. Accusantium cumque,
            quas, ut corporis incidunt deserunt quae architecto voluptate.
          </p>
          <p className="paragraph">
            Accusantium cumque, quas, ut corporis incidunt deserunt quae
            architecto voluptate delectus, inventore iure aliquid aliquam.
          </p>
          <ul className="list">
            <li className="list__item">Close to the beach</li>
            <li className="list__item">Breakfast included</li>
            <li className="list__item">Free airport shuttle</li>
            <li className="list__item">Free wifi in all rooms</li>
            <li className="list__item">Air conditioning and heating</li>
            <li className="list__item">Pets alowed</li>
            <li className="list__item">We speak all languages</li>
            <li className="list__item">Perfect for families</li>
          </ul>
          <div className="recommend">
            <p className="recommend__count">
              Lucy and 3 other friends recommend this.
            </p>
            <div className="recommend__friends">
              <img src={u3} alt="" className="recommend__photo" />
              <img src={u4} alt="" className="recommend__photo" />
              <img src={u5} alt="" className="recommend__photo" />
              <img src={u6} alt="" className="recommend__photo" />
            </div>
          </div>
        </div>
        <div className="user-reviews">
          <figure className="review">
            <blockquote className="review__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              doloremque architecto dicta animi, totam, itaque officia ex.
            </blockquote>
            <figcaption className="review__user">
              <img src={u1} alt="" className="review__photo" />
              <div className="review__user-box">
                <p className="review__user-name">Nick</p>
                <p className="review__user-date">Feb 23rd, 2019</p>
              </div>
              <div className="review__rating">7.8</div>
            </figcaption>
          </figure>
          <figure className="review">
            <blockquote className="review__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              doloremque architecto dicta animi.
            </blockquote>
            <figcaption className="review__user">
              <img src={u2} alt="" className="review__photo" />
              <div className="review__user-box">
                <p className="review__user-name">Jesica</p>
                <p className="review__user-date">April 2nd, 2020</p>
              </div>
              <div className="review__rating">9.2</div>
            </figcaption>
          </figure>
          <button className="btn-inline">
            Show all <span>&rarr;</span>
          </button>
        </div>
      </div>
      <div className="cta">
        <h2 className="cta__book-now">
          Good news! We have 4 free rooms for your selected dates!
        </h2>
        <button className="btn">
          <span className="btn__visible">Book now</span>
          <span className="btn__invisible">Only 4 rooms left</span>
        </button>
      </div>
    </main>
  );
};

export default HotelView;
