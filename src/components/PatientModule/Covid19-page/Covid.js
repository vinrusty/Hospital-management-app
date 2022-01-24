import React from 'react'
import './Covid.css'
import PatientCard from '../PatientCard'

function Covid() {
    return (
        <div class='covid-wrapper'>
            <div class="container">
        <div class="input-group">
            <input type="search" class="form-control rounded" placeholder="Search for patient" aria-label="Search" aria-describedby="search-addon" />
            <button type="button" class="btn btn-outline-primary outline">search</button>
          </div>
        <div className='container chart-wrapper shadow'>

        </div>
        <div class="row">
            <div class="col-sm-4 px-3 py-sm-0">
                <div class="card box-shadow card2 card_font2 shadow">
                    <img src="https://www.gethealthystayhealthy.com/sites/default/files/styles/article_image_default/public/2019-04/hospital-discharge.jpg?itok=Rk6yw_z1" class="card-img-top"/>
                    <div class="card-header">
                      Recovered
                    </div>
                    <div class="card-stats">
                        <div class="stat">
                            <div class="value"><h3><span class="counter">10,000</span> recovered</h3></div>
                        </div>
                    </div>
                    <ul class="list-group list-group-flush">
                        <p class="card-text card-text2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </ul>
                </div>
            </div>
            <div class="col-sm-4 px-3 py-3 py-sm-0">
                <div class="card box-shadow card2 card_font2">
                    <img src="https://www.gethealthystayhealthy.com/sites/default/files/styles/article_image_default/public/2019-04/hospital-discharge.jpg?itok=Rk6yw_z1" class="card-img-top"/>
                    <div class="card-header">
                      Active
                    </div>
                    <div class="card-stats">
                        <div class="stat">
                            <div class="value"><h3><span class="counter">10,000</span> recovered</h3></div>
                        </div>
                    </div>
                    <ul class="list-group list-group-flush">
                        <p class="card-text card-text2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </ul>
                </div>
            </div>
            <div class="col-sm-4 px-3 py-3 py-sm-0">
                <div class="card box-shadow card2 card_font2 shadow">
                    <img src="https://www.gethealthystayhealthy.com/sites/default/files/styles/article_image_default/public/2019-04/hospital-discharge.jpg?itok=Rk6yw_z1" class="card-img-top"/>
                    <div class="card-header">
                      Total
                    </div>
                    <div class="card-stats">
                        <div class="stat">
                            <div class="value"><h3><span class="counter">10,000</span> recovered</h3></div>
                        </div>
                    </div>
                    <ul class="list-group list-group-flush">
                        <p class="card-text card-text2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <PatientCard/>
        </div>
    )
}

export default Covid
