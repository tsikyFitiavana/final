import React, { Component } from 'react';
import { MDBContainer, MDBInput, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { Redirect } from 'react-router-dom'

class NewAtelier extends Component {
    constructor(props) {
        super(props);

        this.state = {
            titre: '',
            description: '',
            utilisateur: '',
            prix: '',
            image: '',
            debut: '',
            duree: '',
            place:'',
            modal: false
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleUploadImage = this.handleUploadImage.bind(this);
        this.renderRedirect = this.renderRedirect.bind(this)
    }

    renderRedirect = () => {
        this.setState({
            modal: !this.state.modal,
        })
        return <Redirect to='/dashboard' />
    }

    toggle = () => {
        this.handleUploadImage()
        this.setState({
            modal: !this.state.modal,
            titre: '',
            description: '',
            utilisateur: '',
            prix: '',
            image: '',
            debut: '',
            duree: '',
            place: ''
        });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleUploadImage(ev) {
        const data = new FormData();
        data.append('image', this.uploadInput.files[0]);
        data.append('titre', this.state.titre);
        data.append('debut', this.state.debut);
        data.append('duree', this.state.duree);
        data.append('description', this.state.description);
        data.append('prix', this.state.prix);
        data.append('place', this.state.place);
        data.append('utilisateur', localStorage.getItem('id'))

        fetch('http://localhost:8080/api/users/newArticle', {
            method: 'POST',
            body: data,
        }).then((response) => {
            console.log(response)
            response.json().then((body) => {
                this.setState({
                    image: `http://localhost:8080/api/users/newArticle/${body.image}`,
                });
                console.log('ity ilay body.fil', body.image);
            });
        });
    }

    render() {
        return (

            <div className='container fluid w-100'> {/* //DEBUT */}

                <div class="card" style={{ width: "500px", marginLeft: "10%" }}>

                    <h5 class="card-header info-color white-text text-center">
                        <strong>NOUVEAU PRODUIT</strong>
                    </h5>

                    <div class="card-body">

                        <form class="text">

                            <MDBInput label="Titre"  type="text" className="input black-text" name="titre" value={this.state.value} onChange={this.handleChange} />
                            <MDBInput label="Descriptions" size="lg"  type="textarea" rows="3" className="input black-text" name="description" value={this.state.value} onChange={this.handleChange} />
                            <MDBInput label="Debut" size="lg"  type="text" className="input black-text" name="debut" value={this.state.value} onChange={this.handleChange} />
                            <MDBInput label="Durée" size="lg"  type="text" className="input black-text" name="duree" value={this.state.value} onChange={this.handleChange} />
                            <MDBInput label="Place disponible" size="lg"  type="text" className="input black-text" name="place" value={this.state.value} onChange={this.handleChange} />
                            <MDBInput label="Prix" size="lg" type="number" className="input black-text" name="prix" value={this.state.value} onChange={this.handleChange} />
                            <input ref={(ref) => { this.uploadInput = ref; }} type="file" name="image" />
                            
                        </form>
                    </div>
                    <MDBContainer>
                        <MDBBtn onClick={this.toggle}>Ajouter</MDBBtn>
                        <MDBModal isOpen={this.state.modal}>
                            <MDBModalHeader>Enregistrement...</MDBModalHeader>
                            <MDBModalBody><center>Ajout du Produit avec succés</center></MDBModalBody>
                            <MDBModalFooter>
                                <MDBBtn color="secondary" onClick={() => { this.renderRedirect() }}>Close</MDBBtn>
                            </MDBModalFooter>
                        </MDBModal>
                    </MDBContainer>
                </div>
            </div>
        );
    }
}

export default NewAtelier;