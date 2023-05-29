import { html, css, LitElement } from "lit";

class NavBar extends LitElement {
  static styles = css`
    nav {
      /* width:100%;
      height:50px;
      padding:0px 100px; */

      /* position: fixed; */
      margin: -8px -9px;
      
      background-color: #0a035490;
    }

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
    }

    li {
      float: left;
    }

    li a {
      display: block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }

    li a:hover {
      background-color: #0334f64d;
    }
  .search-container {
    border-radius: 40px;
  float: right;
}
input[type=text] {
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
}
.search-container button {
  float: right;
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}
.search-container button:hover {
  background: #ccc;
}

  `;

  render() {
    return html`
      <nav>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="data.html">Details</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
          <div class="search-container">
          <!-- <form >
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit">Search</button>
          </form> -->
        </div>
        </ul>
      </nav>
    `;
  }
}

customElements.define("nav-bar", NavBar);
