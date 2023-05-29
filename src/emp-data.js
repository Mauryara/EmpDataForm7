import { LitElement, css, html } from "lit";

import { repeat } from "lit/directives/repeat.js";

export class Data extends LitElement {
  static styles = css`
    .form-center {
      color: white;
    }

    h2 {
      font-family: Georgia;
      margin-bottom: 10px;
      font-weight: 900;
    }

    form {
      width: 700px;
      border: 1px solid white;
      border-radius: 20px;
      padding: 30px;
      margin: -70px 45% 50px;
      background: linear-gradient(to top, #0066ff 0%, #000066 100%);
    
    }

    form tr:hover {
      background-color: #454545ee;
    }

    label {
      display: inline;
      margin-top: 10px;
      font-family: Arial;
      font-weight: 700;
    }
    #search-bar input {
    padding: 5px;
    margin-top: 20px;
    font-size: 17px;
    border: none;
}
    

    input[type="text"],
    input[type="email"] {
      padding: 5px;
      margin-top: 5px;
      border: 1px solid black;
      border-radius: 3px;
    }

    .btn {
      width: 20%;
      border: none;
      border-radius: 3px;
      background-color: rgb(4, 170, 109);
      color: white;
      padding: 7px 10px;
      font-size: 18px;
      cursor: pointer;
      text-align: center;
      margin: 20px 21px 0px 13px;
      display: inline;
    }

    #cancel {
      border-color: rgb(4, 170, 109);
      background-color: white;
      color: black;
    }

    select {
      width: 180px;
      height: 27px;
      margin: 5px 0 0;
      padding: 5px;
      background: white;
      border: 1px solid;
      border-radius: 4px;
    }
    /* ==================================== */
    table {
      margin: 15px 0;
      border-collapse: collapse;
      width: 100%;
      
    }

    /* #search-bar {
      width: 35%;
    } */
    /* .table_header{
  width:100%;
  height:10%;
  background-color:white;
  padding:.8rem 1rem;
  position:center;
} */

    th,
    td,tr {
      color: white;
      padding: 8px;
      text-align: left;
      border-bottom: 1px solid #ddd;
      /* border-bottom: 1px solid white; */
    }
    #mainTable thead tr {
      background: #0a0354c6;
    }

    tr {
      background:#0000ff6a;
    }

    tr:hover {
      background: #0a0354c6;
    }

    #mainTable .EditDetails tr {
      background:none;
    }

    #mainTable .EditDetails tr:hover {
      background:none;
    }
    #mainTable .EditDetails  tr,td {
      border-bottom: none;
      
    }
    h3 {
      color: white;
    }
    #fullDetails {
      position: relative;
    }
    #mainTable .card {
      /* border:1px solid black; */
      position: absolute;
      color: black;
    }
    input {
      border: none;
      border-radius: 5px;
    }
    #childTable tr {
      background-color: #111;
      padding: 8px;
    }
  #btn button{
  background-color: #fff ; 
  color: black;
  padding: 3px 8px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  width:45%;
  border-radius: 5px;
  cursor: pointer;
   
    }
 
  `;

  static properties = {
    empData: { type: Array },
    filteredformData: { type: Array },
  };

  constructor() {
    super();
    this.empData = JSON.parse(localStorage.getItem("empData")) || [];
    this.filteredformData = [...this.empData];
    console.log(this.filteredformData);
    console.log(this.empData);

    this.updateUser = null;
  }

  render() {
    return html`
      <div id="search-bar">
        <input @input="${this.handleSearch}" placeholder="Search..." />
      </div>
      <table id="mainTable">
        <div class="fullDetails">
        <thead>
          <tr>
            <th>Name</th>
            <th>Empcode</th>
            <th>Official Email</th>
            <th>Personal Email</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Address1</th>
            <th>Address2</th>
            <th>Landmark</th>
            <th>Country</th>
            <th>State</th>
            <th>City</th>
            <th>Zipcode</th>
            <th>Actions</th>
          </tr>
        </thead>

        ${repeat(
          this.filteredformData,
          (item) => html`
            <tr>
              <td>${item.fullName}</td>
              <td>${item.employeeCode}</td>
              <td>${item.officialEmail}</td>
              <td>${item.personalEmail}</td>
              <td>${item.designation}</td>
              <td>${item.department}</td>
              <td>${item.addressLine1}</td>
              <td>${item.addressLine2}</td>
              <td>${item.landmark}</td>
              <td>${item.city}</td>
              <td>${item.state}</td>
              <td>${item.country}</td>
              <td>${item.zip}</td>
              <td id="btn">
                <button @click="${() => this.edit(item)}">
                  Edit
                </button>

                <button @click="${() => this.delete(item)}">
                  Delete
                </button>
              </td>
            </tr>
        </div>
        <div class="EditDetails">
            ${this.updateUser === item
              ? html`
                  <div class="card">
                    <div class="form-center">
                      <!-- <div>
                        <emp-form
                        .empData=${this.empData
                        .editingUserIndex=${index}
                        @save-form=${this.handelSaveForm}}>
                          

                      </emp-form>


                     </div> -->

                      <form>
                        <h2>Employee Details</h2>
                        <table class="EditDetails">
                          <tr>
                            <td>
                              <label for="fullName"> Full Name:</label>
                            </td>
                            <td>
                              <input
                                type="text"
                                .value="${item.fullName}"
                                @input="${(e) =>
                                  (item.fullName = e.target.value)}"
                              /><br />
                            </td>

                            <td>
                              <label for="employeeCode">Employee Code:</label>
                            </td>
                            <td>
                              <input
                                type="text"
                                .value="${item.employeeCode}"
                                @input="${(e) =>
                                  (item.employeeCode = e.target.value)}"
                              /><br />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <label for="officialEmail">Official Email:</label>
                            </td>
                            <td>
                              <input
                                type="text"
                                .value="${item.officialEmail}"
                                @input="${(e) =>
                                  (item.officialEmail = e.target.value)}"
                              /><br />
                            </td>

                            <td>
                              <label for="personalEmail">Personal Email:</label>
                            </td>
                            <td>
                              <input
                                type="text"
                                .value="${item.personalEmail}"
                                @input="${(e) =>
                                  (item.personalEmail = e.target.value)}"
                              /><br />
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <label> Designation: </label>
                            </td>
                            <td>
                              <input
                                type="text"
                                .value="${item.designation}"
                                @input="${(e) =>
                                  (item.designation = e.target.value)}"
                              />
                            </td>

                            <td>
                              <label> Department: </label>
                            </td>
                            <td>
                              <input
                                type="text"
                                .value="${item.department}"
                                @input="${(e) =>
                                  (item.department = e.target.value)}"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2>Address</h2>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <label for="addressLine1">Address Line 1:</label>
                            </td>
                            <td>
                              <input
                                type="text"
                                .value="${item.addressLine1}"
                                @input="${(e) =>
                                  (item.addressLine1 = e.target.value)}"
                              /><br />
                            </td>
                            <td>
                              <label for="addressLine2">Address Line 2:</label>
                            </td>
                            <td>
                              <input
                                type="text"
                                .value="${item.addressLine2}"
                                @input="${(e) =>
                                  (item.addressLine2 = e.target.value)}"
                              /><br />
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <label for="landmark">Landmark:</label>
                            </td>
                            <td>
                              <input
                                type="text"
                                .value="${item.landmark}"
                                @input="${(e) =>
                                  (item.landmark = e.target.value)}"
                              /><br />
                            </td>

                            <td>
                              <label for="city">City:</label>
                            </td>
                            <td>
                              <input
                                type="text"
                                .value="${item.city}"
                                @input="${(e) => (item.city = e.target.value)}"
                              /><br />
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <label for="state">State:</label>
                            </td>
                            <td>
                              <input
                                type="text"
                                .value="${item.state}"
                                @input="${(e) => (item.state = e.target.value)}"
                              /><br />
                            </td>
                            <td>
                              <label for="country">Country:</label>
                            </td>
                            <td>
                              <input
                                type="text"
                                .value="${item.country}"
                                @input="${(e) =>
                                  (item.country = e.target.value)}"
                              />
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <label for="zip">Zip:</label>
                            </td>
                            <td>
                              <input
                                type="text"
                                .value="${item.zip}"
                                @input="${(e) => (item.zip = e.target.value)}"
                              /><br />
                            </td>
                          </tr>
                        </table>

                        <button
                          class="btn"
                          @click="${() => this.saveUser(item)}"
                        >
                          Save
                        </button>
                        <button
                          class="btn"
                          @click="${() => this.cancelEdit()}"
                          id="cancel"
                        >
                          Cancel
                        </button>
                      </form>
                    </div>
                  </div>
                `
              : ""}
          </div>
          `
        )}
      </table>
    `;
  }

  delete(user) {
    if (confirm(`Are you sure you want to delete ${user.fullName}?`)) {
      this.deleteUser(user);
    }
  }
  deleteUser(user) {
    const index = this.empData.indexOf(user);
    if (index > -1) {
      this.empData.splice(index, 1);
      localStorage.setItem("empData", JSON.stringify(this.empData));
      this.requestUpdate();
      window.location.reload();
    }
  }

  edit(user) {
    this.updateUser = user;
    this.requestUpdate();
  }
  cancelEdit(user) {
    localStorage.setItem("empData", JSON.stringify(this.empData));
    this.updateUser = null;
    this.requestUpdate();
  }
  saveUser(user) {
    localStorage.setItem("empData", JSON.stringify(this.empData));
    this.updateUser = null;
    this.requestUpdate();
    alert("Update Successful...");
  }
  handleSearch(e) {
    const query = e.target.value.toLowerCase();
    this.filteredformData = this.empData.filter(
      (emp) =>
        emp.fullName.toLowerCase().includes(query) ||
        emp.employeeCode.toLowerCase().includes(query)
    );
  }
}

customElements.define("emp-data", Data);
