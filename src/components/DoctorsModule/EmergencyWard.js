import React from 'react';
import './Prescription.css';

function EmergencyWard() {
  return (
    <div class="page-wrapper bg-dark p-t-100 p-b-50">
            <div class="wrapper wrapper--w900">
                <div class="card card-6">
                    <div class="card-heading">
                        <h2 class="title">Emergency Ward Registration Form</h2>
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
                                <div class="name">Blood Group</div>
                                <div class="value">
                                    <div class="input-group">
                                        <input class="input--style-6" type="email" name="email"/>
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Gender</div>
                                <div class="value">
                                    <div class="input-group">
                                        <input class="input--style-6" type="email" name="email" placeholder="Male/Female/Other"/>
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Emergency Contact Number</div>
                                <div class="value">
                                    <div class="input-group">
                                        <input class="input--style-6" type="email" name="email" />
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="name">Patient Allergies/Tendencies</div>
                                <div class="value">
                                    <div class="input-group">
                                        <textarea class="textarea--style-6" name="message" placeholder="List allergies/condition(s) that the patient if suffering from(if any)"></textarea>
                                    </div>
                                </div>
                            </div>
                        </form>
                    <div class="card-footer">
                        <button class="btn btn--radius-2 btn--blue-2" type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
  );
}

export default EmergencyWard;
