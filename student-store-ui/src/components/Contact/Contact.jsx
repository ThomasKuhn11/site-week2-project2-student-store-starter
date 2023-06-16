import * as React from "react";
import "./Contact.css"

export default function Contact() {
  return (
    <div id="Contact" class="contact">
      <div class="content">
        <h3>Contact Us</h3>
        <div class="summary">
          <ul class="info">
            <li>
              <span class="label">Email:</span>
              <span>   Thomas.kuhn@salesforce.com</span>
            </li>
            <li>
              <span class="label">Phone:</span>
              <span>   1-800-TK</span>
            </li>
            <li>
              <span class="label">Address:</span>
              <span>   123 Salesforce Tower</span>
            </li>
          </ul>
        
        </div>
      </div>
    </div>
  );
}
