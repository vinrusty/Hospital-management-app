import React from 'react'

function ContactForm() {
    return (
        <div class="bg-contact2">
		<div class="container-contact2">
			<div class="wrap-contact2">
				<form class="contact2-form validate-form">
					<span class="contact2-form-title">
						Prescription Module
					</span>

					<div class="wrap-input2 validate-input" data-validate="Name is required">
						<input class="input2" type="text" name="name" />
						<span class="focus-input2" data-placeholder="Patient Name"></span>
					</div>

					<div class="wrap-input2 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input2" type="text" name="email" />
						<span class="focus-input2" data-placeholder="Patient ID"></span>
					</div>

					<div class="wrap-input2 validate-input" data-validate = "Message is required">
						<textarea class="input2" name="message"></textarea>
						<span class="focus-input2" data-placeholder="Prescription:"></span>
					</div>

					<div class="container-contact2-form-btn">
						<div class="wrap-contact2-form-btn">
							<div class="contact2-form-bgbtn"></div>
							<button class="contact2-form-btn">
								Print
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>

    )
}

export default ContactForm
