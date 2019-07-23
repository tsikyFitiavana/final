import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      titre: '',
      utilisateur:'',
      prix: '',
      debut: '',
      duree: '',
      place: '',
      description: '',
      image: '',
        visible : false
    }
    this.onChange = this.onChange.bind(this)
    this.handleUploadImage = this.handleUploadImage.bind(this);
}

onChange(event) {
  this.setState({
    [event.target.name]: event.target.value
  })
}
handleUploadImage(ev) {
  ev.preventDefault();

  const data = new FormData();
  data.append('image', this.uploadInput.files[0]);
  data.append('titre', this.state.titre);
  data.append('prix', this.state.prix);
  data.append('debut', this.state.debut);
  data.append('duree', this.state.duree);
  data.append('place', this.state.place);
  data.append('description', this.state.description)

  fetch('http://localhost:8080/api/users/newArticle', {
    method: 'POST',
    body: data,
  }).then((response) => {
    response.json().then((body) => {
      this.setState({ image: `http://localhost:8080/api/users/newArticle/${body.image}` });
      console.log('ity ilay body.image', body.image);

    });
  });
}
openModal() {
    this.setState({
        visible : true
    });
}
closeModal() {
    this.setState({
        visible : false
    });
}
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    console.log('localStorage.local sur dashbord'+localStorage.local);
    
    const { user } = this.props.auth;

    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="container-fluid">
        <form onSubmit={this.handleUploadImage} className="md-form">
          <div className="form-group mx-sm-3 mb-2 container">
            <div className="row">
              <div className="col-xs-6">

              <input className="form-control" type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="titre" placeholder="Titre" />

              </div>
              <div className="col-xs-6">

              <input className="form-control" type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="prix" placeholder="Prix" />
                
              </div>
            </div>
            <br />
            <br />
            <div className="row">
              <div className="col-xs-6">
              <input className="form-control" type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="debut" placeholder="Debut" />
              </div>

              <div className="col-xs-6">

                <input className="form-control" type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="description" placeholder="Description" />

              </div>
            </div>
           
            <br />
            <div className="row">
              <div className="col-xs-6">
              <input className="form-control" type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="place" placeholder="Nombre des places" />
              </div>
              <div className="col-xs-6">
                <input className="form-control" type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="duree" placeholder="Durée" />
              </div>
            </div>
            <br />
            
            <div className="row">
            <input ref={(ref) => { this.uploadInput = ref; }} type="file" name="image" />
                <button id="validate" className="btn btn-info">Publier</button>
             
                
                
              
            </div>
            
            
          </div>

        </form>
      </div>
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.nom.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                You are logged into a full-stack{" "}
                <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
                
              </p>
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Deconnecter
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
