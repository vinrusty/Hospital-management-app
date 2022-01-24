import React from 'react';
import './Prescription.css';

function EmergencyWard() {
  return (
    <div class="page-wrapper bg-dark p-t-100 p-b-50">
    <div class="wrapper wrapper--w900">
        <div class="card card-6">
            <div class="card-heading">
                <h2 class="title">Prescription Form </h2>
            </div>
            <div class="card-body">
                <form method="POST">
                    <div class="form-row">
                        <div class="name">Patient Name</div>
                        <div class="value">
                            <input class="input--style-6" type="text" name="full_name"/>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="name">Patient ID</div>
                        <div class="value">
                            <div class="input-group">
                                <input class="input--style-6" type="email" name="email" placeholder="HMS19C5666"/>
                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="name">Prescription</div>
                        <div class="value">
                            <div class="input-group">
                                <textarea class="textarea--style-6" name="message" placeholder="Details of the prescribed medicines"></textarea>
                            </div>
                        </div>
                    </div>
                </form>
            <div class="card-footer">
                <button class="btn btn--radius-2 btn--blue-2" type="submit">Download PDF</button>
            </div>
        </div>
    </div>
</div>
</div>
  );
}

export default EmergencyWard;
