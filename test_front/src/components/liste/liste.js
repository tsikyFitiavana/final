import React, { Component } from 'react';
import axios from 'axios';


export default class ListTout extends Component {

    constructor(props) {
        super(props);
        this.state = { produit: [] };

    }
    componentDidMount() {
        axios.get('http://localhost:8080/api/users/newArticle')
            .then(response => {
                console.log('i am a response', response)
                this.setState({ produit: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })



    }

    liste() {
        return <div>
            <div className="table-responsive">

                {
                    (this.state.produit.length > 0) ? (this.state.produit.map((obj) => {
                        return <div >
                            <div id="ligne" className="row" key={obj._id}>
                                <div className="col-md-1"></div>
                                <div className="col-md-6">
                                    <img width="400px" height="450" src={'http://localhost:8080/api/users/newArticle/' + obj.image} alt="pdp" />
                                </div>
                                <div className="col-md-2">
                                    <div className="row">
                                        <div className="container-fluid">
                                            <h2>
                                                {obj.titre}
                                            </h2>
                                            <p><strong>{obj.prix}</strong></p>
                                        </div>
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-xs-6">
                                                    <button><span className=" glyphicon glyphicon-shopping-cart "></span>S'inscrire</button>
                                                </div>
                                                <div className="col-xs-6">
                                                    <button onClick={() => {
                                                        return (
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <img width="400px" height="450" src={'http://localhost:8080/user/produitImage/' + obj.image} alt="pdp" />
                                                                </div>
                                                            </div>
                                                        )
                                                    }}><span className=" glyphicon glyphicon-eye-open " ></span>Voir detail</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-3"></div>
                            </div>
                        </div>

                    })) : ('')
                }

            </div>
        </div>
    }
    render() {
        return (
            <div>
                {this.liste()}
            </div>
        );
    }
}