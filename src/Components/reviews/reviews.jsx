import React from "react";
import './reviews.css'
import rev1 from "../../Assets/Reviews/1.jpg"
import rev2 from "../../Assets/Reviews/2.jpg"
const Reviews =()=>{

    return(
        <div className="reviews">
            <label className="text-center text-light fw-bold mt-3 mb-3 fs-3">Testimonials</label>
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={rev1} class="d-block img-review" alt="..." />
                        <p className="fw-light fs-6 font w-50 text-light text-center">"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."</p>
                        <p className="description">Simab Dave - Web Designer</p>
                    </div>
                    <div class="carousel-item">
                        <img src={rev2} class="d-block img-review" alt="..." />
                        <p className="fw-light fs-6 font w-50 text-light text-center">"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live far from the countries Vokalia."</p>
                        <p className="description">Johnthan Doe - UX Designer</p>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )

}
export default Reviews