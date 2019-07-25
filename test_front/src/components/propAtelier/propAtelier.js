import React, { Component } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

export default class PropAtelier extends Component {

    constructor(props) {
        super(props);
        this.state = { profil: [] };

    }
    componentDidMount() {
        axios.get(`http://localhost:8080/api/users/newArticle/${localStorage.id}`)
            .then(response => {
                console.log('user-article ==== ', response)
                this.setState({ profil: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })

        

    }
    
    liste() {
        return <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TITRE</th>
                            <th>PRIX</th>
                            <th>DESCRIPTION</th>
                            <th>DATE</th>
                            <th>DEBUT</th>
                            <th>DUREE</th>
                            <th>PLACE LIBRE</th>
                            <th>PHOTO</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {
                                
                                return <tr key={obj._id}>
                                    <td>{obj._id}</td>
                                    <td>{obj.titre}</td>
                                    <td>{obj.prix}</td>
                                    <td>{obj.description}</td>
                                    <td>{obj.date}</td>
                                    <td>{obj.debut}</td>
                                    <td>{obj.duree}</td>
                                    <td>{obj.place}</td>
                                    <td>
                                        <img width="150px" height="50px" src={'http://localhost:8080/api/users/newArticleImage/'+obj.image} alt="pdp" />
                                    </td>
                                    <td>
                                        <Link to={"/modifierAtl/"+ obj._id} className="btn btn-great dark red">Modifier</Link>
                                    </td>
                                    {console.log(obj)}
                                </tr>

                            })) : ('')
                        }
                    </tbody>
                </table>
    }
    render() {
        return (
            <div className='app1'>
                {this.liste()}
            </div>
        );
    }
}